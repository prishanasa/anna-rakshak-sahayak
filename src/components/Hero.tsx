import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Smartphone, TrendingUp, Users } from "lucide-react"
import heroImage from "@/assets/hero-farming.jpg"

export function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">अ</span>
          </div>
          <span className="font-bold text-xl text-foreground">AnnaRakshak</span>
        </div>
        <Button variant="outline">लॉगिन करें</Button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">स्मार्ट खेती</span> के लिए
                <br />
                <span className="text-crop-green">AI सहायक</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                मौसम, मिट्टी और फसल के डेटा के साथ अपनी पैदावार बढ़ाएं। 
                AnnaRakshak आपको वैज्ञानिक सलाह देता है।
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="agricultural" size="lg" className="text-lg px-8">
                आज ही शुरू करें
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                डेमो देखें
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">खुश किसान</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">25%</div>
                <div className="text-sm text-muted-foreground">अधिक उपज</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-water-blue">24/7</div>
                <div className="text-sm text-muted-foreground">AI सहायता</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Modern farming with technology" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            AnnaRakshak की मुख्य विशेषताएं
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            आधुनिक तकनीक के साथ पारंपरिक खेती को मिलाकर बेहतर परिणाम पाएं
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold text-lg mb-2">उपज की भविष्यवाणी</h3>
            <p className="text-muted-foreground">AI के साथ अपनी फसल की सही उपज का अनुमान लगाएं</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-water-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-6 h-6 text-water-blue" />
            </div>
            <h3 className="font-semibold text-lg mb-2">लाइव मौसम अपडेट</h3>
            <p className="text-muted-foreground">आपके खेत के लिए विशेष मौसम की जानकारी और सलाह</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">किसान समुदाय</h3>
            <p className="text-muted-foreground">अन्य किसानों से जुड़ें और अनुभव साझा करें</p>
          </Card>
        </div>
      </div>
    </div>
  )
}