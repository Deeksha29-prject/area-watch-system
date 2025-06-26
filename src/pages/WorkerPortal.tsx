
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, MapPin, Camera, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";

const WorkerPortal = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const assignedJobs = [
    {
      id: "UR00123",
      title: "Broken Street Light",
      type: "Street Lighting",
      location: "Main Street & 5th Avenue",
      priority: "Medium",
      assignedDate: "2024-01-15",
      dueDate: "2024-01-20",
      status: "In Progress",
      progress: 60,
      description: "Street light is completely out. Pole appears intact but bulb needs replacement.",
      notes: "Checked electrical connection - working fine. Need LED bulb replacement."
    },
    {
      id: "UR00127",
      title: "Water Pipe Leak",
      type: "Water Problems",
      location: "Elm Street 789",
      priority: "High",
      assignedDate: "2024-01-18",
      dueDate: "2024-01-22",
      status: "Assigned",
      progress: 0,
      description: "Water leak visible on sidewalk near residential building.",
      notes: ""
    },
    {
      id: "UR00128",
      title: "Damaged Road Sign",
      type: "Street Signs",
      location: "Broadway & 2nd Street",
      priority: "Low",
      assignedDate: "2024-01-16",
      dueDate: "2024-01-25",
      status: "In Progress",
      progress: 80,
      description: "Stop sign has graffiti and is slightly bent.",
      notes: "Sign cleaned. Waiting for replacement hardware to straighten the post."
    }
  ];

  const completedJobs = [
    {
      id: "UR00124",
      title: "Pothole Repair",
      type: "Road Maintenance",
      location: "Oak Avenue 234",
      completedDate: "2024-01-14",
      rating: 5
    },
    {
      id: "UR00125",
      title: "Broken Fire Hydrant",
      type: "Water Systems",
      location: "Pine Street 567",
      completedDate: "2024-01-12",
      rating: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Assigned": return "bg-yellow-100 text-yellow-800";
      case "Completed": return "bg-green-100 text-green-800";
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

  const handleUpdateProgress = (jobId: string, newProgress: number) => {
    console.log(`Updating job ${jobId} progress to ${newProgress}%`);
  };

  const handleCompleteJob = (jobId: string) => {
    console.log(`Completing job ${jobId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Worker Portal</h1>
          <p className="text-gray-600">Manage your assigned tasks and update progress</p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Jobs</p>
                  <p className="text-2xl font-bold text-blue-600">{assignedJobs.length}</p>
                </div>
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {assignedJobs.filter(job => job.status === "In Progress").length}
                  </p>
                </div>
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{completedJobs.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Rating</p>
                  <p className="text-2xl font-bold text-purple-600">4.5</p>
                </div>
                <div className="text-2xl">⭐</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">Active Jobs</TabsTrigger>
            <TabsTrigger value="completed">Completed Jobs</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Job List */}
              <div className="space-y-4">
                {assignedJobs.map((job) => (
                  <Card 
                    key={job.id} 
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedJob === job.id ? 'ring-2 ring-blue-500 border-blue-200' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedJob(job.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(job.status)}>
                            {job.status}
                          </Badge>
                          <Badge className={getPriorityColor(job.priority)}>
                            {job.priority}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <p><strong>ID:</strong> {job.id}</p>
                        <p><strong>Type:</strong> {job.type}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Due:</strong> {job.dueDate}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{job.progress}%</span>
                        </div>
                        <Progress value={job.progress} className="w-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Job Details */}
              <div>
                {selectedJob ? (
                  <Card>
                    <CardHeader>
                      <CardTitle>Job Details</CardTitle>
                      <CardDescription>
                        Update progress and manage job completion
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {(() => {
                        const job = assignedJobs.find(j => j.id === selectedJob);
                        if (!job) return null;
                        
                        return (
                          <>
                            <div>
                              <h4 className="font-semibold mb-2">Description</h4>
                              <p className="text-gray-600 text-sm">{job.description}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Progress Update</h4>
                              <div className="flex items-center gap-4">
                                <Progress value={job.progress} className="flex-1" />
                                <span className="text-sm font-medium">{job.progress}%</span>
                              </div>
                              <div className="flex gap-2 mt-2">
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleUpdateProgress(job.id, Math.min(job.progress + 25, 100))}
                                >
                                  +25%
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleUpdateProgress(job.id, Math.min(job.progress + 50, 100))}
                                >
                                  +50%
                                </Button>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Work Notes</h4>
                              <Textarea
                                placeholder="Add notes about your progress..."
                                value={job.notes}
                                rows={3}
                              />
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Photo Documentation</h4>
                              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                <Camera className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                                <p className="text-sm text-gray-600">Upload progress photos</p>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Add Photos
                                </Button>
                              </div>
                            </div>

                            <div className="flex gap-3">
                              <Button variant="outline" className="flex-1">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Add Comment
                              </Button>
                              <Button 
                                className="flex-1 bg-green-600 hover:bg-green-700"
                                onClick={() => handleCompleteJob(job.id)}
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Mark Complete
                              </Button>
                            </div>
                          </>
                        );
                      })()}
                    </CardContent>
                  </Card>
                ) : (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <MapPin className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Job</h3>
                      <p className="text-gray-600">Choose a job from the list to view details and update progress</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle>Completed Jobs</CardTitle>
                <CardDescription>Review your completed work and performance ratings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {completedJobs.map((job) => (
                    <Card key={job.id} className="border-l-4 border-l-green-500">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                            <div className="text-sm text-gray-600 space-y-1">
                              <p><strong>ID:</strong> {job.id}</p>
                              <p><strong>Type:</strong> {job.type}</p>
                              <p><strong>Location:</strong> {job.location}</p>
                              <p><strong>Completed:</strong> {job.completedDate}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 mb-2">
                              <span className="text-2xl">⭐</span>
                              <span className="font-semibold">{job.rating}/5</span>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              Completed
                            </Badge>
                          </div>
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

export default WorkerPortal;
