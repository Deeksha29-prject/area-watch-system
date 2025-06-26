
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FileText, Users, Wrench, AlertTriangle, Search, Filter, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

const AdminPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const reports = [
    {
      id: "UR00123",
      title: "Broken Street Light",
      type: "Street Lighting",
      location: "Main Street & 5th Avenue",
      status: "Assigned",
      priority: "Medium",
      date: "2024-01-15",
      assignedTo: "John Smith",
      citizenName: "Sarah Johnson"
    },
    {
      id: "UR00124",
      title: "Water Leak on Sidewalk",
      type: "Water Problems",
      location: "Park Avenue 123",
      status: "In Progress",
      priority: "High",
      date: "2024-01-10",
      assignedTo: "Mike Wilson",
      citizenName: "Robert Davis"
    },
    {
      id: "UR00125",
      title: "Large Pothole",
      type: "Potholes & Road Issues",
      location: "Oak Street near School",
      status: "New",
      priority: "High",
      date: "2024-01-18",
      citizenName: "Emily Brown"
    },
    {
      id: "UR00126",
      title: "Garbage Collection Missed",
      type: "Garbage Collection",
      location: "Pine Street 456",
      status: "Completed",
      priority: "Low",
      date: "2024-01-12",
      assignedTo: "Lisa Garcia",
      citizenName: "David Miller"
    }
  ];

  const workers = [
    { id: 1, name: "John Smith", department: "Electrical", activeJobs: 3, completedJobs: 45 },
    { id: 2, name: "Mike Wilson", department: "Water & Sewage", activeJobs: 2, completedJobs: 38 },
    { id: 3, name: "Lisa Garcia", department: "Sanitation", activeJobs: 1, completedJobs: 52 },
    { id: 4, name: "Tom Anderson", department: "Road Maintenance", activeJobs: 4, completedJobs: 41 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Assigned": return "bg-yellow-100 text-yellow-800";
      case "New": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-orange-100 text-orange-800";
      case "Low": return "bg-green-100 text-green-800";
      case "Urgent": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || report.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    totalReports: reports.length,
    newReports: reports.filter(r => r.status === "New").length,
    inProgress: reports.filter(r => r.status === "In Progress").length,
    completed: reports.filter(r => r.status === "Completed").length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h1>
          <p className="text-gray-600">Manage reports, assign tasks, and oversee operations</p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Reports</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalReports}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New Reports</p>
                  <p className="text-2xl font-bold text-red-600">{stats.newReports}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.inProgress}</p>
                </div>
                <Wrench className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                </div>
                <UserCheck className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="reports" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="reports">Manage Reports</TabsTrigger>
            <TabsTrigger value="workers">Manage Workers</TabsTrigger>
          </TabsList>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>All Reports</CardTitle>
                <CardDescription>Review, assign, and manage citizen reports</CardDescription>
                
                {/* Search and Filter */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search reports..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="Assigned">Assigned</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredReports.map((report) => (
                    <Card key={report.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="font-semibold text-lg">{report.title}</h3>
                              <Badge className={getStatusColor(report.status)}>
                                {report.status}
                              </Badge>
                              <Badge className={getPriorityColor(report.priority)}>
                                {report.priority} Priority
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                              <div className="space-y-1">
                                <p><strong>Report ID:</strong> {report.id}</p>
                                <p><strong>Type:</strong> {report.type}</p>
                                <p><strong>Location:</strong> {report.location}</p>
                                <p><strong>Citizen:</strong> {report.citizenName}</p>
                              </div>
                              <div className="space-y-1">
                                <p><strong>Submitted:</strong> {report.date}</p>
                                {report.assignedTo && (
                                  <p><strong>Assigned to:</strong> {report.assignedTo}</p>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                            {report.status === "New" && (
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                Assign Worker
                              </Button>
                            )}
                            {report.status === "Assigned" && (
                              <Button size="sm" variant="outline">
                                Update Status
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workers">
            <Card>
              <CardHeader>
                <CardTitle>Worker Management</CardTitle>
                <CardDescription>Monitor worker performance and task assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workers.map((worker) => (
                    <Card key={worker.id}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{worker.name}</h3>
                            <p className="text-gray-600">{worker.department}</p>
                          </div>
                          <Users className="h-8 w-8 text-blue-600" />
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Active Jobs:</span>
                            <span className="font-medium">{worker.activeJobs}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Completed Jobs:</span>
                            <span className="font-medium">{worker.completedJobs}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            View Tasks
                          </Button>
                          <Button size="sm" className="flex-1">
                            Assign Job
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPortal;
