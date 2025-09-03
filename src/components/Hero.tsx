import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, Smartphone, Users, Globe } from "lucide-react"
import heroImage from "@/assets/hero-farming.jpg"

interface HeroProps {
  onLogin: () => void
  onSignup: () => void
}

export const Hero = ({ onLogin, onSignup }: HeroProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      {/* Navigation */}
      <nav className="w-full px-4 py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AnnaRakshak</h1>
              <p className="text-xs text-muted-foreground">Smart Farming Assistant</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Select defaultValue="en">
              <SelectTrigger className="w-24">
                <Globe className="h-4 w-4 mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="hi">हिं</SelectItem>
                <SelectItem value="te">తె</SelectItem>
                <SelectItem value="ta">த</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" onClick={onLogin}>
              Login
            </Button>
            <Button variant="agricultural" size="sm" className="shadow-md" onClick={onSignup}>
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                🌾 Smart Agricultural Solutions
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                AI-Powered
                <span className="block text-primary">Farming Assistant</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Boost your crop productivity with weather data, soil analysis, and AI insights. 
                Make data-driven decisions for better yields and higher profits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="agricultural" className="text-lg px-8 py-6 shadow-lg" onClick={onSignup}>
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">25%</div>
                <div className="text-sm text-muted-foreground">Higher Yields</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-water-blue">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern farming with technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining traditional farming with modern technology for better results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto">
              <TrendingUp className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Yield Prediction</h3>
            <p className="text-muted-foreground">
              Get accurate crop yield estimates using AI and weather data analysis
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-water-blue/10 rounded-lg flex items-center justify-center mx-auto">
              <Smartphone className="h-6 w-6 text-water-blue" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Live Weather Updates</h3>
            <p className="text-muted-foreground">
              Real-time weather information and crop-specific irrigation recommendations
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-all duration-300 border-border/50">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Farmer Community</h3>
            <p className="text-muted-foreground">
              Connect with experienced farmers and share knowledge and experiences
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}