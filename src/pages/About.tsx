
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Shield, Wrench, Mail, Phone, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Easy Reporting",
      description: "Report urban issues quickly with our simple, user-friendly interface"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Citizens actively participate in improving their neighborhoods"
    },
    {
      icon: Shield,
      title: "Transparent Process",
      description: "Track your reports from submission to completion with full transparency"
    },
    {
      icon: Wrench,
      title: "Efficient Resolution",
      description: "Streamlined workflow ensures quick assignment and resolution of issues"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "City Manager",
      department: "Administration",
      experience: "12 years"
    },
    {
      name: "Mike Rodriguez",
      role: "Operations Director",
      department: "Public Works",
      experience: "8 years"
    },
    {
      name: "Emily Chen",
      role: "Technology Lead",
      department: "IT Services",
      experience: "6 years"
    },
    {
      name: "David Thompson",
      role: "Community Liaison",
      department: "Public Relations",
      experience: "10 years"
    }
  ];

  const stats = [
    { label: "Cities Using Urban Alert", value: "45+" },
    { label: "Issues Resolved", value: "50,000+" },
    { label: "Active Citizens", value: "25,000+" },
    { label: "Average Response Time", value: "24 hrs" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Urban Alert</h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Empowering communities to create positive change through efficient urban problem reporting and resolution
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              Urban Alert bridges the gap between citizens and city services, creating a transparent, 
              efficient platform for reporting and resolving urban infrastructure issues. We believe 
              that every community deserves responsive, accountable public services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Urban Alert?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is designed with both citizens and city workers in mind, ensuring efficient 
              communication and swift resolution of urban issues.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Urban Alert Works</h2>
            <p className="text-lg text-gray-600">Simple steps to make your community better</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Report Issue</h3>
              <p className="text-gray-600">Citizens report problems like broken streetlights, potholes, or water leaks through our easy-to-use platform</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Admin Review</h3>
              <p className="text-gray-600">City administrators review reports, prioritize them, and assign qualified workers to address the issues</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Issue Resolved</h3>
              <p className="text-gray-600">Workers complete repairs and update progress, while citizens receive notifications about resolution</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals committed to improving urban infrastructure and community services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <Badge variant="secondary" className="mb-2">{member.department}</Badge>
                  <p className="text-gray-600 text-sm">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>
                Have questions about Urban Alert? We're here to help!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Phone Support</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 8AM-6PM</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Email Support</h4>
                  <p className="text-gray-600">support@urbanalert.com</p>
                  <p className="text-sm text-gray-500">24/7 response</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Office Hours</h4>
                  <p className="text-gray-600">Mon-Fri: 8AM-6PM</p>
                  <p className="text-sm text-gray-500">Sat: 9AM-2PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
