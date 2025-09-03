import { useState } from "react"
import { Hero } from "@/components/Hero"
import { FarmerDashboard } from "@/components/FarmerDashboard"
import { ChatBot } from "@/components/ChatBot"
import { Button } from "@/components/ui/button"

const Index = () => {
  // Simulate login state - in real app, this would come from Supabase auth
  const [currentView, setCurrentView] = useState<'hero' | 'dashboard' | 'chat'>('hero')

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <FarmerDashboard />
      case 'chat':
        return <ChatBot />
      default:
        return <Hero />
    }
  }

  return (
    <div className="min-h-screen">
      {/* Demo Navigation */}
      {currentView !== 'hero' && (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">अ</span>
              </div>
              <span className="font-bold text-xl text-foreground">AnnaRakshak</span>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={currentView === 'dashboard' ? 'agricultural' : 'ghost'}
                onClick={() => setCurrentView('dashboard')}
              >
                डैशबोर्ड
              </Button>
              <Button
                variant={currentView === 'chat' ? 'agricultural' : 'ghost'}
                onClick={() => setCurrentView('chat')}
              >
                सहायक
              </Button>
              <Button variant="outline" onClick={() => setCurrentView('hero')}>
                होम
              </Button>
            </div>
          </div>
        </nav>
      )}

      {renderCurrentView()}

      {/* Demo Notice */}
      {currentView === 'hero' && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-card border rounded-lg p-4 shadow-lg max-w-sm">
            <p className="text-sm text-muted-foreground mb-3">
              यह AnnaRakshak का डेमो है। पूर्ण कार्यक्षमता के लिए Supabase कनेक्ट करें।
            </p>
            <div className="flex gap-2">
              <Button 
                size="sm" 
                variant="agricultural"
                onClick={() => setCurrentView('dashboard')}
              >
                डैशबोर्ड देखें
              </Button>
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => setCurrentView('chat')}
              >
                चैट करें
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Index
