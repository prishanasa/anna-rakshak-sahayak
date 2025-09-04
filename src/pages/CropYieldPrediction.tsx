import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, TrendingUp } from "lucide-react"
import { useNavigate } from "react-router-dom"

const CropYieldPrediction = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    stateName: "",
    districtName: "",
    cropYear: "",
    season: "",
    crop: "",
    area: ""
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
      const areaNum = parseFloat(formData.area) || 1
      const yieldPerHectare = Math.random() * (25 - 15) + 15 // Random yield between 15-25 tons/hectare
      const totalProduction = (areaNum * yieldPerHectare).toFixed(2)
      setPrediction(totalProduction)
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
            <TrendingUp className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Crop Yield Prediction</h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle>Enter Location & Crop Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="stateName">State Name</Label>
                    <Input
                      id="stateName"
                      type="text"
                      value={formData.stateName}
                      onChange={(e) => handleInputChange("stateName", e.target.value)}
                      placeholder="e.g., Punjab"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="districtName">District Name</Label>
                    <Input
                      id="districtName"
                      type="text"
                      value={formData.districtName}
                      onChange={(e) => handleInputChange("districtName", e.target.value)}
                      placeholder="e.g., Ludhiana"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cropYear">Crop Year</Label>
                    <Input
                      id="cropYear"
                      type="number"
                      value={formData.cropYear}
                      onChange={(e) => handleInputChange("cropYear", e.target.value)}
                      placeholder="e.g., 2024"
                      min="2000"
                      max="2030"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="season">Season</Label>
                    <Select onValueChange={(value) => handleInputChange("season", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select season" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kharif">Kharif</SelectItem>
                        <SelectItem value="rabi">Rabi</SelectItem>
                        <SelectItem value="summer">Summer</SelectItem>
                        <SelectItem value="whole-year">Whole Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="crop">Crop</Label>
                  <Select onValueChange={(value) => handleInputChange("crop", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="corn">Corn</SelectItem>
                      <SelectItem value="soybean">Soybean</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      <SelectItem value="potato">Potato</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="area">Area (Hectares)</Label>
                  <Input
                    id="area"
                    type="number"
                    value={formData.area}
                    onChange={(e) => handleInputChange("area", e.target.value)}
                    placeholder="e.g., 2.5"
                    step="0.1"
                    min="0.1"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Calculating..." : "Predict Yield"}
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
                    <TrendingUp className="h-10 w-10 text-success" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-success">Predicted Production</h3>
                    <p className="text-3xl text-foreground mt-2">{prediction} tons</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Estimated total production for {formData.area} hectares of {formData.crop} in {formData.season} season.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your crop details to get yield predictions based on historical data and ML models.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CropYieldPrediction