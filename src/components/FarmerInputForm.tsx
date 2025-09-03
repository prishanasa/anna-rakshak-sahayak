import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { supabase } from "@/integrations/supabase/client"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Upload, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

interface FarmerInputFormProps {
  onClose: () => void
}

const FarmerInputForm = ({ onClose }: FarmerInputFormProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [sowingDate, setSowingDate] = useState<Date>()
  const [formData, setFormData] = useState({
    farmName: "",
    location: "",
    plotName: "",
    areaHectares: "",
    cropType: "",
    irrigationMethod: "",
    soilN: "",
    soilP: "",
    soilK: "",
    soilPH: "",
    notes: ""
  })

  const { toast } = useToast()

  const cropOptions = [
    "Wheat", "Rice", "Corn", "Soybean", "Cotton", "Sugarcane", 
    "Potato", "Tomato", "Onion", "Garlic", "Chili", "Other"
  ]

  const irrigationMethods = [
    "Drip Irrigation", "Sprinkler", "Flood Irrigation", "Furrow", 
    "Surface", "Subsurface", "Other"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Create farm
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error("You must be logged in to create a farm")

      const { data: farmData, error: farmError } = await supabase
        .from('farms')
        .insert({
          farm_name: formData.farmName,
          location: formData.location,
          user_id: user.id
        })
        .select()
        .single()

      if (farmError) throw farmError

      // Create plot
      const { data: plotData, error: plotError } = await supabase
        .from('plots')
        .insert({
          farm_id: farmData.id,
          plot_name: formData.plotName,
          area_hectares: parseFloat(formData.areaHectares)
        })
        .select()
        .single()

      if (plotError) throw plotError

      // Create crop
      const { error: cropError } = await supabase
        .from('crops')
        .insert({
          plot_id: plotData.id,
          crop_type: formData.cropType,
          sowing_date: sowingDate?.toISOString().split('T')[0]
        })

      if (cropError) throw cropError

      toast({
        title: "Success!",
        description: "Your farm data has been saved successfully",
        variant: "default"
      })
      
      onClose()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save farm data",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <Card className="w-full max-w-2xl my-8">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Farm Input Form</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>×</Button>
          </div>
          <CardDescription>
            Enter your farm details for personalized recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Farm Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Farm Details</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="farmName">Farm Name</Label>
                  <Input
                    id="farmName"
                    placeholder="Green Valley Farm"
                    value={formData.farmName}
                    onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location (City, State)</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="Punjab, India"
                      className="pl-10"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plotName">Plot Name</Label>
                  <Input
                    id="plotName"
                    placeholder="North Field"
                    value={formData.plotName}
                    onChange={(e) => setFormData({ ...formData, plotName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="areaHectares">Area (Hectares)</Label>
                  <Input
                    id="areaHectares"
                    type="number"
                    step="0.1"
                    placeholder="2.5"
                    value={formData.areaHectares}
                    onChange={(e) => setFormData({ ...formData, areaHectares: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Crop Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Crop Information</Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cropType">Crop Type</Label>
                  <Select value={formData.cropType} onValueChange={(value) => setFormData({ ...formData, cropType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop type" />
                    </SelectTrigger>
                    <SelectContent>
                      {cropOptions.map((crop) => (
                        <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Sowing Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !sowingDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {sowingDate ? format(sowingDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={sowingDate}
                        onSelect={setSowingDate}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="irrigationMethod">Irrigation Method</Label>
                  <Select value={formData.irrigationMethod} onValueChange={(value) => setFormData({ ...formData, irrigationMethod: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select irrigation method" />
                    </SelectTrigger>
                    <SelectContent>
                      {irrigationMethods.map((method) => (
                        <SelectItem key={method} value={method}>{method}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Soil Analysis */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Soil Test Values</Badge>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="soilN">Nitrogen (N)</Label>
                  <Input
                    id="soilN"
                    type="number"
                    placeholder="45"
                    value={formData.soilN}
                    onChange={(e) => setFormData({ ...formData, soilN: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soilP">Phosphorus (P)</Label>
                  <Input
                    id="soilP"
                    type="number"
                    placeholder="23"
                    value={formData.soilP}
                    onChange={(e) => setFormData({ ...formData, soilP: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soilK">Potassium (K)</Label>
                  <Input
                    id="soilK"
                    type="number"
                    placeholder="180"
                    value={formData.soilK}
                    onChange={(e) => setFormData({ ...formData, soilK: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="soilPH">pH Level</Label>
                  <Input
                    id="soilPH"
                    type="number"
                    step="0.1"
                    placeholder="6.5"
                    value={formData.soilPH}
                    onChange={(e) => setFormData({ ...formData, soilPH: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any specific concerns or observations about your farm..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={3}
              />
            </div>

            {/* Soil Report Upload */}
            <div className="space-y-2">
              <Label>Soil Test Report (Optional)</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Upload your soil test report PDF
                </p>
                <Button type="button" variant="outline" size="sm">
                  Choose File
                </Button>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Farm Data"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default FarmerInputForm