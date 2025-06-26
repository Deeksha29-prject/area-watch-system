
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Wrench, FileText, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import ReportForm from "@/components/ReportForm";

const Index = () => {
  const [showReportForm, setShowReportForm] = useState(false);

  const portals = [
    {
      title: "User Portal",
      description: "Report issues, track status, and stay updated on community problems",
      icon: Users,
      color: "bg-green-500",
      href: "/user-portal"
    },
    {
      title: "Admin Portal", 
      description: "Manage reports, assign tasks, and oversee city-wide operations",
      icon: Shield,
      color: "bg-blue-500",
      href: "/admin-portal"
    },
    {
      title: "Worker Portal",
      description: "View assigned tasks, update progress, and complete repairs",
      icon: Wrench,
      color: "bg-orange-500", 
      href: "/worker-portal"
    }
  ];

  const stats = [
    { label: "Reports Submitted", value: "2,847", icon: FileText },
    { label: "Issues Resolved", value: "2,234", icon: MapPin },
    { label: "Average Response", value: "24hrs", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Nature Background */}
      <section 
        className="relative h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop')`
        }}
      >
        <div className="text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Urban Alert</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your voice for a better city. Report urban problems and track their resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              onClick={() => setShowReportForm(true)}
            >
              Report an Issue
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Portal</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access the right tools for your role in making our city better
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portals.map((portal, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${portal.color} rounded-full mb-4 mx-auto`}>
                    <portal.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{portal.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6">
                    {portal.description}
                  </CardDescription>
                  <Link to={portal.href}>
                    <Button className="w-full">Access Portal</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Urban Alert Works</h2>
            <p className="text-xl text-gray-600">Simple steps to report and resolve urban issues</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Issue</h3>
              <p className="text-gray-600">Submit details about electricity, water, potholes, or other urban problems</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">Monitor the status of your report as it gets assigned and worked on</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Issue Resolved</h3>
              <p className="text-gray-600">Get notified when your reported issue has been successfully resolved</p>
            </div>
          </div>
        </div>
      </section>

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

export default Index;
