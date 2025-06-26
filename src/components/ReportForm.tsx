
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, MapPin, Camera, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReportFormProps {
  onClose?: () => void;
  embedded?: boolean;
}

const ReportForm = ({ onClose, embedded = false }: ReportFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    issueType: "",
    title: "",
    description: "",
    location: "",
    priority: "",
    contactName: "",
    contactPhone: "",
    contactEmail: ""
  });

  const issueTypes = [
    { value: "electricity", label: "Electricity Issues" },
    { value: "water", label: "Water Problems" },
    { value: "potholes", label: "Potholes & Road Issues" },
    { value: "streetlight", label: "Street Lighting" },
    { value: "drainage", label: "Drainage Issues" },
    { value: "garbage", label: "Garbage Collection" },
    { value: "other", label: "Other Issues" }
  ];

  const priorities = [
    { value: "low", label: "Low Priority" },
    { value: "medium", label: "Medium Priority" },
    { value: "high", label: "High Priority" },
    { value: "urgent", label: "Urgent" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate a random report ID
    const reportId = `UR${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
    
    toast({
      title: "Report Submitted Successfully!",
      description: `Your report has been submitted with ID: ${reportId}. You will receive updates via email.`,
    });

    // Reset form
    setFormData({
      issueType: "",
      title: "",
      description: "",
      location: "",
      priority: "",
      contactName: "",
      contactPhone: "",
      contactEmail: ""
    });

    if (onClose) {
      setTimeout(onClose, 2000);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="issueType">Issue Type *</Label>
          <Select value={formData.issueType} onValueChange={(value) => handleInputChange("issueType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select issue type" />
            </SelectTrigger>
            <SelectContent>
              {issueTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="priority">Priority Level *</Label>
          <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              {priorities.map((priority) => (
                <SelectItem key={priority.value} value={priority.value}>
                  {priority.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Issue Title *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          placeholder="Brief description of the issue"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location *</Label>
        <div className="relative">
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            placeholder="Enter specific address or landmark"
            required
            className="pl-10"
          />
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Detailed Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          placeholder="Provide detailed information about the issue..."
          rows={4}
          required
        />
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <Camera className="mx-auto h-12 w-12 text-gray-400 mb-2" />
        <p className="text-gray-600 mb-2">Upload Photos (Optional)</p>
        <p className="text-sm text-gray-500">Click to add images that help describe the issue</p>
        <Button type="button" variant="outline" className="mt-2">
          Choose Files
        </Button>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="contactName">Full Name *</Label>
            <Input
              id="contactName"
              value={formData.contactName}
              onChange={(e) => handleInputChange("contactName", e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactPhone">Phone Number</Label>
            <Input
              id="contactPhone"
              value={formData.contactPhone}
              onChange={(e) => handleInputChange("contactPhone", e.target.value)}
              placeholder="Your phone number"
              type="tel"
            />
          </div>
        </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="contactEmail">Email Address *</Label>
          <Input
            id="contactEmail"
            value={formData.contactEmail}
            onChange={(e) => handleInputChange("contactEmail", e.target.value)}
            placeholder="your.email@example.com"
            type="email"
            required
          />
        </div>
      </div>

      <div className="flex gap-4">
        {onClose && (
          <Button type="button" variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
        )}
        <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
          <Send className="h-4 w-4 mr-2" />
          Submit Report
        </Button>
      </div>
    </form>
  );

  if (embedded) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-green-600" />
            Report an Issue
          </CardTitle>
          <CardDescription>
            Help us improve your community by reporting urban problems
          </CardDescription>
        </CardHeader>
        <CardContent>
          {formContent}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Report an Issue</h2>
          <p className="text-gray-600">Help us improve your community</p>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
      {formContent}
    </div>
  );
};

export default ReportForm;
