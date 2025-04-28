import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  aadhaar: Yup.string()
    .required("Aadhaar number is required")
    .matches(/^\d{12}$/, "Invalid Aadhaar number"),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "You must agree to share your details")
    .required("You must agree to share your details"),
});

function IdentityVerification({ formData, onNext, onBack }) {
  const [govtId, setGovtId] = useState(null);
  const [selfie, setSelfie] = useState(null);

  const handleSubmit = (values) => {
    onNext({
      ...values,
      govtId,
      selfie,
    });
  };

  const handleGovtIdUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setGovtId(file);
    }
  };

  const handleSelfieUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelfie(file);
    }
  };

  return (
    <Formik
      initialValues={{
        aadhaar: formData.aadhaar || "",
        agreeToTerms: formData.agreeToTerms || false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Aadhaar Number
            </label>
            <Field
              name="aadhaar"
              type="text"
              className="input-field"
              placeholder="Enter 12-digit Aadhaar number"
            />
            {errors.aadhaar && touched.aadhaar && (
              <div className="text-red-500 text-sm mt-1">{errors.aadhaar}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Government ID
            </label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleGovtIdUpload}
              className="input-field"
            />
            <p className="text-sm text-gray-500 mt-1">
              Upload a clear photo of your government ID
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Live Selfie
            </label>
            <input
              type="file"
              accept="image/*"
              capture="user"
              onChange={handleSelfieUpload}
              className="input-field"
            />
            <p className="text-sm text-gray-500 mt-1">
              Take a clear selfie or upload one
            </p>
          </div>

          <div className="flex items-start">
            <Field
              type="checkbox"
              name="agreeToTerms"
              className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary mt-1"
            />
            <label className="ml-2 block text-sm text-gray-700">
              I agree to share my details for verification purposes and confirm
              that all information provided is accurate
            </label>
          </div>
          {errors.agreeToTerms && touched.agreeToTerms && (
            <div className="text-red-500 text-sm">{errors.agreeToTerms}</div>
          )}
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-primary hover:text-primary/80">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:text-primary/80">
                Privacy Policy
              </a>
            </label>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={onBack} className="btn-secondary">
              Back
            </button>
            <button type="submit" className="btn-primary">
              Submit Application
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default IdentityVerification;
