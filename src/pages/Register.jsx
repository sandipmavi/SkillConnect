import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import RegisterClient from "./client/RegisterClient";
import RegisterEmployee from "./employee/RegisterEmployee";

function Register() {
  const [role, setRole] = useState("user");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F8E9] to-[#E8F5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="text-center mb-5">
          <Link to="/" className="inline-block ">
            <h1 className="text-5xl font-bold text-primary mb-2">
              SkillConnect
            </h1>
            <p className="mt-2 text-gray-600">
              Join our network of skilled professionals
            </p>
          </Link>
          <h2 className="text-2xl mt-4">Create your account</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Role Selection */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4 text-center">
              Choose your role
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <button
                className={`
                  p-6 rounded-lg border-2 flex flex-col items-center justify-center
                  transition-all duration-300 hover:shadow-md
                  ${
                    role === "user"
                      ? "border-primary bg-primary/5 text-primary shadow-primary/10"
                      : "border-gray-200 hover:border-primary/30"
                  }
                `}
                onClick={() => setRole("user")}
              >
                <div className="mb-4">
                  <FaUser className="w-12 h-12" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Client</h3>
                <p className="text-sm text-gray-600 text-center">
                  Looking for skilled professionals
                </p>
              </button>
              <button
                className={`
                  p-6 rounded-lg border-2 flex flex-col items-center justify-center
                  transition-all duration-300 hover:shadow-md
                  ${
                    role === "employee"
                      ? "border-primary bg-primary/5 text-primary shadow-primary/10"
                      : "border-gray-200 hover:border-primary/30"
                  }
                `}
                onClick={() => setRole("employee")}
              >
                <div className="mb-4">
                  <MdEngineering className="w-14 h-14" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Professional</h3>
                <p className="text-sm text-gray-600 text-center">
                  Offering skilled services
                </p>
              </button>
            </div>
          </div>

          <div className="">
            {role === "user" ? <RegisterClient /> : <RegisterEmployee />}
          </div>

          {/* Sign In Link */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className="w-full inline-flex justify-center items-center btn-secondary"
              >
                Sign in instead
              </Link>
            </div>
          </div>

          {/* Help Text */}
          <div className="text-center mt-8 text-sm text-gray-500">
            Need help?{" "}
            <a href="#" className="text-primary hover:text-primary/80">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
