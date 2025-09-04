import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button" 
import { AlertCard } from "@/components/ui/alert-card"
import { Badge } from "@/components/ui/badge"
import { 
  Droplets, 
  Leaf, 
  Cloud, 
  TrendingUp, 
  MessageCircle,
  MapPin,
  Calendar,
  Timer,
  Wheat,
  Bug,
  BarChart3
} from "lucide-react"

export const FarmerDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 p-4">
      <div className="container mx-auto max-w-7xl space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Hello, Farmer</h1>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Punjab, India</span>
              <Badge variant="outline" className="ml-2">
                Active Farm
              </Badge>
            </div>
          </div>
        </div>

        {/* Weather Card */}
        <Card className="bg-gradient-to-r from-water-blue/10 to-accent/20 border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Cloud className="h-5 w-5 text-water-blue" />
              Today's Weather
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">28°C</div>
                <div className="text-sm text-muted-foreground">Temperature</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-water-blue">30%</div>
                <div className="text-sm text-muted-foreground">Rain Chance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-foreground">65%</div>
                <div className="text-sm text-muted-foreground">Humidity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-soil-healthy">22°C</div>
                <div className="text-sm text-muted-foreground">Soil Temperature</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alert Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <AlertCard
            type="success"
            title="Crop Health Good"
          >
            Your wheat crop is healthy and growing well.
          </AlertCard>
          <AlertCard
            type="warning"
            title="Irrigation Needed"
          >
            Irrigation recommended within the next 2 days.
          </AlertCard>
          <AlertCard
            type="danger"
            title="Pest Alert"
          >
            Aphid infestation possible in this region. Monitor closely.
          </AlertCard>
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Yield Prediction vs Actual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-success mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Predicted: 18-20 quintals/hectare
                  </p>
                  <p className="text-lg font-bold text-success">
                    +15% above regional average
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-water-blue" />
                Irrigation Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-sm">Completed</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span className="text-sm">Due Tomorrow</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-muted rounded-full"></div>
                    <span className="text-sm">Scheduled</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crop Status Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Card className="hover:shadow-lg transition-all duration-300 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-crop-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wheat className="h-6 w-6 text-crop-green" />
              </div>
              <div className="text-lg font-bold text-foreground">Wheat</div>
              <div className="text-sm text-muted-foreground">Primary Crop</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="text-lg font-bold text-foreground">Nov 15</div>
              <div className="text-sm text-muted-foreground">Sowing Date</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
              <div className="text-lg font-bold text-foreground">18-20</div>
              <div className="text-sm text-muted-foreground">Est. Yield (q/ha)</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-water-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Droplets className="h-6 w-6 text-water-blue" />
              </div>
              <div className="text-lg font-bold text-foreground">Tomorrow</div>
              <div className="text-sm text-muted-foreground">Next Irrigation</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-border/50">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-secondary/40 rounded-full flex items-center justify-center mx-auto mb-3">
                <Timer className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div className="text-lg font-bold text-foreground">75</div>
              <div className="text-sm text-muted-foreground">Crop Age (days)</div>
            </CardContent>
          </Card>
        </div>

        {/* ML Prediction Buttons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            size="lg" 
            variant="agricultural" 
            className="h-20 text-lg shadow-lg flex-col"
            onClick={() => window.location.href = '/pest-prediction'}
          >
            <Bug className="h-6 w-6 mb-2" />
            Pest Prediction
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-20 text-lg flex-col"
            onClick={() => window.location.href = '/crop-yield'}
          >
            <TrendingUp className="h-6 w-6 mb-2" />
            Crop Yield Prediction
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="h-20 text-lg flex-col"
            onClick={() => window.location.href = '/soil-fertility'}
          >
            <Leaf className="h-6 w-6 mb-2" />
            Soil Fertility
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-20 text-lg flex-col"
            onClick={() => window.location.href = '/crop-recommendation'}
          >
            <Wheat className="h-6 w-6 mb-2" />
            Crop Recommendation
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Button size="lg" variant="agricultural" className="h-16 text-lg shadow-lg">
            <Leaf className="h-5 w-5 mr-2" />
            Update Crop Data
          </Button>
          <Button size="lg" variant="outline" className="h-16 text-lg">
            <MessageCircle className="h-5 w-5 mr-2" />
            Chat with AI Assistant
          </Button>
          <Button size="lg" variant="secondary" className="h-16 text-lg">
            <BarChart3 className="h-5 w-5 mr-2" />
            View Detailed Reports
          </Button>
        </div>

        {/* AI Chatbot Preview */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/10 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <MessageCircle className="h-5 w-5 text-primary" />
              AI Assistant Chat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">You</span>
                </div>
                <div className="bg-secondary rounded-lg p-3 max-w-xs">
                  <p className="text-sm">What should I do for my wheat crop this week?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-primary rounded-lg p-3 max-w-xs">
                  <p className="text-sm text-primary-foreground">
                    Based on weather and your crop condition, irrigate this week and check for weeds. 
                    NPK fertilizer application would also be beneficial.
                  </p>
                </div>
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground text-sm font-bold">AI</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}