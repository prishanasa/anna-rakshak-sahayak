import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Bug } from "lucide-react"
import { useNavigate } from "react-router-dom"

const PestPrediction = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    moisture: "",
    soilType: "",
    cropType: "",
    nitrogen: "",
    potassium: "",
    phosphorus: ""
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
      const fertilizers = ["NPK 10-10-10", "Urea", "DAP", "Potash", "Organic Compost"]
      const randomFertilizer = fertilizers[Math.floor(Math.random() * fertilizers.length)]
      setPrediction(randomFertilizer)
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
            <Bug className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Pest Prediction</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle>Enter Crop & Environmental Data</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="temperature">Temperature (°C)</Label>
                    <Input
                      id="temperature"
                      type="number"
                      value={formData.temperature}
                      onChange={(e) => handleInputChange("temperature", e.target.value)}
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
                    <Label htmlFor="moisture">Soil Moisture (%)</Label>
                    <Input
                      id="moisture"
                      type="number"
                      value={formData.moisture}
                      onChange={(e) => handleInputChange("moisture", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="soilType">Soil Type</Label>
                    <Select onValueChange={(value) => handleInputChange("soilType", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clay">Clay</SelectItem>
                        <SelectItem value="sandy">Sandy</SelectItem>
                        <SelectItem value="loamy">Loamy</SelectItem>
                        <SelectItem value="silty">Silty</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="cropType">Crop Type</Label>
                  <Select onValueChange={(value) => handleInputChange("cropType", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="corn">Corn</SelectItem>
                      <SelectItem value="soybean">Soybean</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
                    <Label htmlFor="potassium">Potassium (ppm)</Label>
                    <Input
                      id="potassium"
                      type="number"
                      value={formData.potassium}
                      onChange={(e) => handleInputChange("potassium", e.target.value)}
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
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Analyzing..." : "Predict Fertilizer"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Result */}
          <Card>
            <CardHeader>
              <CardTitle>Prediction Result</CardTitle>
            </CardHeader>
            <CardContent>
              {prediction ? (
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                    <Bug className="h-10 w-10 text-success" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-success">Recommended Fertilizer</h3>
                    <p className="text-xl text-foreground mt-2">{prediction}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      This fertilizer recommendation is based on your soil and crop conditions to help prevent pest issues.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <Bug className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your crop data to get fertilizer recommendations for pest prevention.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PestPrediction