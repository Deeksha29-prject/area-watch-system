
import Navbar from "@/components/Navbar";
import ReportForm from "@/components/ReportForm";

const Report = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Report an Issue</h1>
            <p className="text-lg text-gray-600">
              Help us improve your community by reporting urban problems
            </p>
          </div>
          
          <ReportForm embedded={true} />
        </div>
      </div>
    </div>
  );
};

export default Report;
