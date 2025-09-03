import { useState, useEffect } from "react"
import { Hero } from "@/components/Hero"
import { FarmerDashboard } from "@/components/FarmerDashboard"
import { ChatBot } from "@/components/ChatBot"
import Auth from "@/components/Auth"
import FarmerInputForm from "@/components/FarmerInputForm"
import { Button } from "@/components/ui/button"
import { supabase } from "@/integrations/supabase/client"
import type { User } from "@supabase/supabase-js"

const Index = () => {
  const [currentView, setCurrentView] = useState<'hero' | 'dashboard' | 'chat' | 'input'>('hero')
  const [showAuth, setShowAuth] = useState(false)
  const [showInputForm, setShowInputForm] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null)
        if (session?.user && currentView === 'hero') {
          setCurrentView('dashboard')
        }
      }
    )

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user && currentView === 'hero') {
        setCurrentView('dashboard')
      }
    })

    return () => subscription.unsubscribe()
  }, [currentView])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setCurrentView('hero')
  }

  const renderCurrentView = () => {
    if (!user && currentView !== 'hero') {
      return <Hero onLogin={() => setShowAuth(true)} onSignup={() => setShowAuth(true)} />
    }

    switch (currentView) {
      case 'dashboard':
        return <FarmerDashboard />
      case 'chat':
        return <ChatBot />
      case 'input':
        return <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 p-4">
          <div className="container mx-auto max-w-4xl">
            <FarmerInputForm onClose={() => setCurrentView('dashboard')} />
          </div>
        </div>
      default:
        return <Hero onLogin={() => setShowAuth(true)} onSignup={() => setShowAuth(true)} />
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      {user && currentView !== 'hero' && (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">A</span>
              </div>
              <span className="font-bold text-xl text-foreground">AnnaRakshak</span>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={currentView === 'dashboard' ? 'agricultural' : 'ghost'}
                onClick={() => setCurrentView('dashboard')}
              >
                Dashboard
              </Button>
              <Button
                variant={currentView === 'input' ? 'agricultural' : 'ghost'}
                onClick={() => setCurrentView('input')}
              >
                Farm Input
              </Button>
              <Button
                variant={currentView === 'chat' ? 'agricultural' : 'ghost'}
                onClick={() => setCurrentView('chat')}
              >
                Assistant
              </Button>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </nav>
      )}

      {renderCurrentView()}

      {/* Auth Modal */}
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}

      {/* Demo Notice for non-authenticated users */}
      {currentView === 'hero' && !user && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-card border rounded-lg p-4 shadow-lg max-w-sm">
            <p className="text-sm text-muted-foreground mb-3">
              This is AnnaRakshak demo. Sign up to access full functionality with database integration.
            </p>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="agricultural"
                onClick={() => setShowAuth(true)}
              >
                Get Started
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setCurrentView('chat')}
              >
                Try Chat
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Index
