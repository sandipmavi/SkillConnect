import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  mobileOtp: Yup.string()
    .matches(/^\d{6}$/, "Invalid OTP")
    .required("Mobile OTP is required"),
  emailOtp: Yup.string()
    .matches(/^\d{6}$/, "Invalid OTP")
    .required("Email OTP is required"),
  agreeToTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms")
    .required("You must agree to the terms"),
});

function Verification({ formData, onNext, onBack }) {
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);

  const handleSendMobileOtp = () => {
    // TODO: Implement OTP sending logic
    setMobileOtpSent(true);
  };

  const handleSendEmailOtp = () => {
    // TODO: Implement OTP sending logic
    setEmailOtpSent(true);
  };

  const handleSubmit = (values) => {
    onNext(values);
  };

  return (
    <Formik
      initialValues={{
        mobileOtp: formData.mobileOtp || "",
        emailOtp: formData.emailOtp || "",
        agreeToTerms: formData.agreeToTerms || false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Verification
            </label>
            <div className="mt-1 flex space-x-4">
              <div className="flex-1">
                <Field
                  name="mobileOtp"
                  type="text"
                  className="input-field"
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                />
              </div>
              <button
                type="button"
                onClick={handleSendMobileOtp}
                className="btn-secondary whitespace-nowrap"
                disabled={mobileOtpSent}
              >
                {mobileOtpSent ? "OTP Sent" : "Send OTP"}
              </button>
            </div>
            {errors.mobileOtp && touched.mobileOtp && (
              <div className="text-red-500 text-sm mt-1">
                {errors.mobileOtp}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Verification
            </label>
            <div className="mt-1 flex space-x-4">
              <div className="flex-1">
                <Field
                  name="emailOtp"
                  type="text"
                  className="input-field"
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                />
              </div>
              <button
                type="button"
                onClick={handleSendEmailOtp}
                className="btn-secondary whitespace-nowrap"
                disabled={emailOtpSent}
              >
                {emailOtpSent ? "OTP Sent" : "Send OTP"}
              </button>
            </div>
            {errors.emailOtp && touched.emailOtp && (
              <div className="text-red-500 text-sm mt-1">{errors.emailOtp}</div>
            )}
          </div>

          <div className="flex items-start">
            <Field
              type="checkbox"
              name="agreeToTerms"
              className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary mt-1"
            />
            <label className="ml-2 block text-sm text-gray-700">
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
          {errors.agreeToTerms && touched.agreeToTerms && (
            <div className="text-red-500 text-sm">{errors.agreeToTerms}</div>
          )}

          <div className="flex justify-between">
            <button type="button" onClick={onBack} className="btn-secondary">
              Back
            </button>
            <button type="submit" className="btn-primary">
              Complete Registration
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Verification;
