import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button" 
import { AlertCard } from "@/components/ui/alert-card"
import { Badge } from "@/components/ui/badge"
import { 
  Droplets, 
  Sprout, 
  CloudRain, 
  TrendingUp, 
  MessageCircle,
  MapPin,
  Calendar,
  Thermometer
} from "lucide-react"

export function FarmerDashboard() {
  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">नमस्ते किसान जी! 🌱</h1>
          <p className="text-muted-foreground mt-1">आज आपकी फसल की स्थिति देखें</p>
        </div>
        <Badge variant="outline" className="text-primary border-primary">
          <MapPin className="w-3 h-3 mr-1" />
          पंजाब, भारत
        </Badge>
      </div>

      {/* Weather Card */}
      <Card className="p-6 bg-gradient-to-r from-accent to-accent/80">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CloudRain className="w-5 h-5 text-water-blue" />
              <h3 className="font-semibold text-lg">आज का मौसम</h3>
            </div>
            <p className="text-2xl font-bold">28°C</p>
            <p className="text-sm text-muted-foreground">हल्की बारिश की संभावना</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-sm">
              <Droplets className="w-4 h-4" />
              <span>नमी: 65%</span>
            </div>
            <div className="flex items-center gap-1 text-sm mt-1">
              <Thermometer className="w-4 h-4" />
              <span>मिट्टी: 22°C</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Traffic Light Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AlertCard type="success" title="फसल स्वस्थ है ✅">
          <p>आपकी गेहूं की फसल बहुत अच्छी स्थिति में है। सिंचाई और पोषक तत्व उचित हैं।</p>
        </AlertCard>
        
        <AlertCard type="warning" title="सिंचाई की जरूरत ⚠️">
          <p>अगले 2 दिन में सिंचाई करें। मिट्टी में नमी कम हो रही है।</p>
        </AlertCard>
        
        <AlertCard type="danger" title="कीट संक्रमण का खतरा ⚠️">
          <p>इस क्षेत्र में फसली कीटों की सूचना मिली है। निरीक्षण करें और आवश्यक उपाय करें।</p>
        </AlertCard>
      </div>

      {/* Crop Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-crop-green/20 rounded-lg">
              <Sprout className="w-6 h-6 text-crop-green" />
            </div>
            <div>
              <h4 className="font-semibold">फसल: गेहूं</h4>
              <p className="text-sm text-muted-foreground">बुआई: 15 नवंबर</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <div>
              <h4 className="font-semibold">अनुमानित उपज</h4>
              <p className="text-sm font-bold text-success">25-28 क्विंटल/हेक्टेयर</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-water-blue/20 rounded-lg">
              <Droplets className="w-6 h-6 text-water-blue" />
            </div>
            <div>
              <h4 className="font-semibold">अगली सिंचाई</h4>
              <p className="text-sm text-muted-foreground">2 दिन बाद</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-soil-healthy/20 rounded-lg">
              <Calendar className="w-6 h-6 text-soil-healthy" />
            </div>
            <div>
              <h4 className="font-semibold">फसल दिवस</h4>
              <p className="text-sm text-muted-foreground">45 दिन</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="agricultural" size="lg" className="h-16">
          <Sprout className="w-5 h-5" />
          फसल डेटा अपडेट करें
        </Button>
        
        <Button variant="earth" size="lg" className="h-16">
          <MessageCircle className="w-5 h-5" />
          सहायक से बात करें
        </Button>
        
        <Button variant="water" size="lg" className="h-16">
          <TrendingUp className="w-5 h-5" />
          विस्तृत रिपोर्ट देखें
        </Button>
      </div>

      {/* Quick Chat Preview */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">सहायक (AI चैटबॉट)</h3>
        </div>
        <div className="bg-muted/30 p-3 rounded-lg mb-3">
          <p className="text-sm">"मुझे अपनी गेहूं की फसल के लिए इस सप्ताह क्या करना चाहिए?"</p>
        </div>
        <div className="bg-primary/10 p-3 rounded-lg">
          <p className="text-sm">इस सप्ताह आपको: 1) मिट्टी की नमी जांचें 2) यूरिया का छिड़काव करें 3) कीटों की जांच करें। क्या आपको विस्तार से जानकारी चाहिए?</p>
        </div>
      </Card>
    </div>
  )
}