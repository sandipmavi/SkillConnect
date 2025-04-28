import { useState } from "react";
import { Link } from "react-router-dom";
import BasicInfo from "./steps/BasicInfo";
import LocationDetails from "./steps/LocationDetails";
import ProfessionalDetails from "./steps/ProfessionalDetails";
import IdentityVerification from "./steps/IdentityVerification";
import SubmissionConfirmation from "./steps/SubmissionConfirmation";

const steps = [
  { id: "basic", name: "Basic Information", component: BasicInfo },
  { id: "location", name: "Location Details", component: LocationDetails },
  {
    id: "professional",
    name: "Professional Details",
    component: ProfessionalDetails,
  },
  {
    id: "verification",
    name: "Identity Verification",
    component: IdentityVerification,
  },
];

function RegisterEmployee() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: "",
    mobile: "",
    email: "",
    dob: "",
    gender: "",
    profilePicture: null,
    password: "",
    confirmPassword: "",

    // Location Details
    address: "",
    city: "",
    state: "",
    pincode: "",
    serviceableArea: "",
    serviceRadius: "",

    // Professional Details
    skillCategory: "",
    experience: "",
    certification: null,
    availability: [],
    bio: "",
    portfolio: [],

    // Identity Verification
    aadhaar: "",
    govtId: null,
    selfie: null,
  });

  const handleNext = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const CurrentStepComponent = steps[currentStep]?.component;

  if (currentStep === steps.length) {
    console.log("Form Data Submitted:", formData);
    return <SubmissionConfirmation />;
  }

  return (
    <div className="min-h-screen bg-[#F1F8E9] py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}

        <nav aria-label="Progress" className="mb-12 mx-auto w-full max-w-4xl">
          <ol className="flex items-center justify-between relative px-4 sm:px-8">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className="flex-1 flex flex-col items-center text-center relative"
              >
                <div className="relative z-10">
                  <div
                    className={`h-10 w-10 rounded-full border-2 transition-all duration-300
              flex items-center justify-center text-sm font-medium
              ${
                index <= currentStep
                  ? "bg-primary border-primary text-white"
                  : "bg-gray-100 border-gray-300 text-gray-500"
              }`}
                  >
                    {index + 1}
                  </div>
                </div>

                <span className="mt-2 text-xs sm:text-sm text-gray-600">
                  {step.name}
                </span>

                {/* Connector line */}
                {index !== steps.length - 1 && (
                  <div
                    className={`absolute top-5 left-1/2 right-[-50%] sm:right-[-45%] h-0.5 transition-colors duration-300
              ${index < currentStep ? "bg-primary" : "bg-gray-300"}`}
                  ></div>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
          {CurrentStepComponent && (
            <CurrentStepComponent
              formData={formData}
              onNext={handleNext}
              onBack={handleBack}
              isFirstStep={currentStep === 0}
              isLastStep={currentStep === steps.length - 1}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterEmployee;
