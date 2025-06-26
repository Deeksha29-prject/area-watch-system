
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Clock, CheckCircle, AlertCircle, Plus, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import ReportForm from "@/components/ReportForm";

const UserPortal = () => {
  const [showReportForm, setShowReportForm] = useState(false);

  const userReports = [
    {
      id: "UR00123",
      title: "Broken Street Light",
      type: "Street Lighting",
      location: "Main Street & 5th Avenue",
      status: "In Progress",
      priority: "Medium",
      date: "2024-01-15",
      estimatedCompletion: "2024-01-20"
    },
    {
      id: "UR00124",
      title: "Water Leak on Sidewalk",
      type: "Water Problems", 
      location: "Park Avenue 123",
      status: "Completed",
      priority: "High",
      date: "2024-01-10",
      completedDate: "2024-01-14"
    },
    {
      id: "UR00125",
      title: "Large Pothole",
      type: "Potholes & Road Issues",
      location: "Oak Street near School",
      status: "Assigned",
      priority: "High",
      date: "2024-01-18",
      estimatedCompletion: "2024-01-25"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Assigned": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-orange-100 text-orange-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "In Progress": return <Clock className="h-4 w-4 text-blue-600" />;
      case "Assigned": return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      default: return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Portal</h1>
          <p className="text-gray-600">Manage your reports and track their progress</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stats Cards */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Reports</p>
                  <p className="text-2xl font-bold text-gray-900">{userReports.length}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {userReports.filter(r => r.status === "In Progress").length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {userReports.filter(r => r.status === "Completed").length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col">
              <Button 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => setShowReportForm(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                New Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Reports Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>My Reports</CardTitle>
            <CardDescription>Track the status of all your submitted reports</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Reports</TabsTrigger>
                <TabsTrigger value="assigned">Assigned</TabsTrigger>
                <TabsTrigger value="progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {userReports.map((report) => (
                    <Card key={report.id} className="border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getStatusIcon(report.status)}
                              <h3 className="font-semibold text-lg">{report.title}</h3>
                              <Badge className={getStatusColor(report.status)}>
                                {report.status}
                              </Badge>
                              <Badge className={getPriorityColor(report.priority)}>
                                {report.priority} Priority
                              </Badge>
                            </div>
                            
                            <div className="text-sm text-gray-600 space-y-1">
                              <p><strong>Report ID:</strong> {report.id}</p>
                              <p><strong>Type:</strong> {report.type}</p>
                              <p><strong>Location:</strong> {report.location}</p>
                              <p><strong>Submitted:</strong> {report.date}</p>
                              {report.estimatedCompletion && (
                                <p><strong>Est. Completion:</strong> {report.estimatedCompletion}</p>
                              )}
                              {report.completedDate && (
                                <p><strong>Completed:</strong> {report.completedDate}</p>
                              )}
                            </div>
                          </div>
                          
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="assigned" className="mt-6">
                <div className="space-y-4">
                  {userReports.filter(r => r.status === "Assigned").map((report) => (
                    <Card key={report.id} className="border-l-4 border-l-yellow-500">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getStatusIcon(report.status)}
                              <h3 className="font-semibold text-lg">{report.title}</h3>
                              <Badge className={getStatusColor(report.status)}>
                                {report.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p><strong>Location:</strong> {report.location}</p>
                              <p><strong>Est. Completion:</strong> {report.estimatedCompletion}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="progress" className="mt-6">
                <div className="space-y-4">
                  {userReports.filter(r => r.status === "In Progress").map((report) => (
                    <Card key={report.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getStatusIcon(report.status)}
                              <h3 className="font-semibold text-lg">{report.title}</h3>
                              <Badge className={getStatusColor(report.status)}>
                                {report.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p><strong>Location:</strong> {report.location}</p>
                              <p><strong>Est. Completion:</strong> {report.estimatedCompletion}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                <div className="space-y-4">
                  {userReports.filter(r => r.status === "Completed").map((report) => (
                    <Card key={report.id} className="border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getStatusIcon(report.status)}
                              <h3 className="font-semibold text-lg">{report.title}</h3>
                              <Badge className={getStatusColor(report.status)}>
                                {report.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p><strong>Location:</strong> {report.location}</p>
                              <p><strong>Completed:</strong> {report.completedDate}</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Report Form Modal */}
      {showReportForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <ReportForm onClose={() => setShowReportForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPortal;
