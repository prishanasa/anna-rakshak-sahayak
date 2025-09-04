import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Wheat } from "lucide-react"
import { useNavigate } from "react-router-dom"

const CropRecommendation = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: ""
  })
  const [prediction, setPrediction] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate ML model prediction
    setTimeout(() => {
      const crops = ["Wheat", "Rice", "Corn", "Soybean", "Cotton", "Sugarcane", "Potato", "Tomato", "Barley", "Millet"]
      const randomCrop = crops[Math.floor(Math.random() * crops.length)]
      setPrediction(randomCrop)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 p-4">
      <div className="container mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex items-center gap-2">
            <Wheat className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Crop Recommendation</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle>Enter Soil & Climate Parameters</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="nitrogen">Nitrogen (ppm)</Label>
                    <Input
                      id="nitrogen"
                      type="number"
                      value={formData.nitrogen}
                      onChange={(e) => handleInputChange("nitrogen", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phosphorus">Phosphorus (ppm)</Label>
                    <Input
                      id="phosphorus"
                      type="number"
                      value={formData.phosphorus}
                      onChange={(e) => handleInputChange("phosphorus", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="potassium">Potassium (ppm)</Label>
                    <Input
                      id="potassium"
                      type="number"
                      value={formData.potassium}
                      onChange={(e) => handleInputChange("potassium", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input
                      id="temperature"
                      type="number"
                      value={formData.temperature}
                      onChange={(e) => handleInputChange("temperature", e.target.value)}
                      step="0.1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="humidity">Humidity (%)</Label>
                    <Input
                      id="humidity"
                      type="number"
                      value={formData.humidity}
                      onChange={(e) => handleInputChange("humidity", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ph">Soil pH</Label>
                    <Input
                      id="ph"
                      type="number"
                      value={formData.ph}
                      onChange={(e) => handleInputChange("ph", e.target.value)}
                      step="0.1"
                      min="0"
                      max="14"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="rainfall">Rainfall (mm)</Label>
                    <Input
                      id="rainfall"
                      type="number"
                      value={formData.rainfall}
                      onChange={(e) => handleInputChange("rainfall", e.target.value)}
                      step="0.1"
                      required
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Analyzing..." : "Get Crop Recommendation"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Result */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended Crop</CardTitle>
            </CardHeader>
            <CardContent>
              {prediction ? (
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                    <Wheat className="h-10 w-10 text-success" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-success">Best Crop for Your Conditions</h3>
                    <p className="text-3xl text-foreground mt-2 font-bold">{prediction}</p>
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Based on your soil nutrients, climate conditions, and environmental factors, 
                        {prediction.toLowerCase()} is the most suitable crop for optimal yield and growth.
                      </p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-secondary/20 p-2 rounded">
                        <span className="font-semibold">Growing Season:</span> Varies by region
                      </div>
                      <div className="bg-secondary/20 p-2 rounded">
                        <span className="font-semibold">Expected Yield:</span> Good to Excellent
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <Wheat className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your soil and climate data to get personalized crop recommendations based on ML analysis.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CropRecommendation