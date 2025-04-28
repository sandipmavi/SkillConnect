import { Link } from "react-router-dom";
import {
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  LightBulbIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">🔌SkillConnect</h1>
            <div className="space-x-4">
              <Link to="/login" className="btn-secondary">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute  inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3')] bg-cover bg-center" />
        <div className="absolute  inset-0 bg-gradient-to-r from-[#cfe4b8]/95 to-[#F1F8E9]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-">
              Connect with Skilled Professionals in Your Area
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Find trusted electricians, mechanics, plumbers, tutors, and more.
              Get your work done by verified professionals.
            </p>
            <div className="space-x-4">
              <Link to="/register" className="btn-primary">
                Get Started
              </Link>
              <button className="btn-secondary hover:bg-[#F1F8E9]/70 transition-colors duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<LightBulbIcon className="w-8 h-8" />}
            title="Electricians"
            description="Professional electrical services for your home and business"
          />
          <ServiceCard
            icon={<WrenchIcon className="w-8 h-8" />}
            title="Mechanics"
            description="Expert vehicle repair and maintenance services"
          />
          <ServiceCard
            icon={<WrenchScrewdriverIcon className="w-8 h-8" />}
            title="Plumbers"
            description="Quality plumbing solutions for all your needs"
          />
          <ServiceCard
            icon={<AcademicCapIcon className="w-8 h-8" />}
            title="Tutors"
            description="Experienced tutors for all subjects and levels"
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Landing;
