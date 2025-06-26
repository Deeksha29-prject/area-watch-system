
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const Status = () => {
  const [reportId, setReportId] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const { toast } = useToast();

  // Sample report data
  const sampleReports = [
    {
      id: "UR00123",
      title: "Broken Street Light",
      type: "Street Lighting",
      location: "Main Street & 5th Avenue",
      status: "In Progress",
      priority: "Medium",
      submittedDate: "2024-01-15",
      estimatedCompletion: "2024-01-20",
      assignedWorker: "John Smith",
      progress: 60,
      timeline: [
        { date: "2024-01-15", status: "Submitted", description: "Report submitted by citizen" },
        { date: "2024-01-16", status: "Reviewed", description: "Report reviewed by admin" },
        { date: "2024-01-17", status: "Assigned", description: "Assigned to John Smith" },
        { date: "2024-01-18", status: "In Progress", description: "Work started on site" }
      ]
    }
  ];

  const handleSearch = () => {
    if (!reportId.trim()) {
      toast({
        title: "Please enter a report ID",
        description: "Enter your report ID to check its status",
        variant: "destructive"
      });
      return;
    }

    const found = sampleReports.find(report => 
      report.id.toLowerCase() === reportId.toLowerCase()
    );

    if (found) {
      setSearchResult(found);
      toast({
        title: "Report Found!",
        description: `Status: ${found.status}`
      });
    } else {
      setSearchResult(null);
      toast({
        title: "Report Not Found",
        description: "Please check your report ID and try again",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Assigned": return "bg-yellow-100 text-yellow-800";
      case "Reviewed": return "bg-purple-100 text-purple-800";
      case "Submitted": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "In Progress": return <Clock className="h-4 w-4 text-blue-600" />;
      case "Assigned": return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default: return <MapPin className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Check Report Status</h1>
            <p className="text-lg text-gray-600">
              Track the progress of your submitted reports
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Your Report
              </CardTitle>
              <CardDescription>
                Enter your report ID to check its current status and progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Enter Report ID (e.g., UR00123)"
                    value={reportId}
                    onChange={(e) => setReportId(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button onClick={handleSearch} className="bg-green-600 hover:bg-green-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sample Report ID */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-2">
              Don't have a report ID? Try this sample:
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setReportId("UR00123")}
            >
              Use Sample ID: UR00123
            </Button>
          </div>

          {/* Search Results */}
          {searchResult && (
            <div className="space-y-6">
              {/* Report Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{searchResult.title}</span>
                    <Badge className={getStatusColor(searchResult.status)}>
                      {searchResult.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>Report ID: {searchResult.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">Issue Type</h4>
                        <p className="text-gray-600">{searchResult.type}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Location</h4>
                        <p className="text-gray-600">{searchResult.location}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Priority</h4>
                        <Badge className={searchResult.priority === "High" ? "bg-red-100 text-red-800" : "bg-orange-100 text-orange-800"}>
                          {searchResult.priority} Priority
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">Submitted Date</h4>
                        <p className="text-gray-600">{searchResult.submittedDate}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Estimated Completion</h4>
                        <p className="text-gray-600">{searchResult.estimatedCompletion}</p>
                      </div>
                      {searchResult.assignedWorker && (
                        <div>
                          <h4 className="font-semibold text-gray-900">Assigned Worker</h4>
                          <p className="text-gray-600">{searchResult.assignedWorker}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Progress Timeline</CardTitle>
                  <CardDescription>Track the progress of your report resolution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {searchResult.timeline.map((event: any, index: number) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                          {getStatusIcon(event.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{event.status}</h4>
                            <Badge className={getStatusColor(event.status)} variant="secondary">
                              {event.date}
                            </Badge>
                          </div>
                          <p className="text-gray-600 text-sm">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Contact Support</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Have questions about your report? Contact our support team.
                      </p>
                      <div className="text-sm space-y-1">
                        <p><strong>Phone:</strong> (555) 123-4567</p>
                        <p><strong>Email:</strong> support@urbanalert.com</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Office Hours</h4>
                      <div className="text-sm space-y-1">
                        <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                        <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                        <p><strong>Sunday:</strong> Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Status;
