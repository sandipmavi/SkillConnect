import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(
      /^(\+91[\-\s]?|91[\-\s]?|0)?[6-9]\d{9}$/,
      "Enter a valid Indian mobile number"
    ),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function BasicInfo({ formData, onNext }) {
  const handleSubmit = (values) => {
    onNext(values);
  };

  return (
    <Formik
      initialValues={{
        fullName: formData.fullName || "",
        mobile: formData.mobile || "",
        email: formData.email || "",
        password: formData.password || "",
        confirmPassword: formData.confirmPassword || "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Field
              name="fullName"
              type="text"
              className="input-field"
              placeholder="Enter your full name"
            />
            {errors.fullName && touched.fullName && (
              <div className="text-red-500 text-sm mt-1">{errors.fullName}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <Field
              name="mobile"
              type="tel"
              className="input-field"
              placeholder="Enter your mobile number"
            />
            {errors.mobile && touched.mobile && (
              <div className="text-red-500 text-sm mt-1">{errors.mobile}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="input-field"
              placeholder="Enter your email"
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Field
              name="password"
              type="password"
              className="input-field"
              placeholder="Create a password"
            />
            {errors.password && touched.password && (
              <div className="text-red-500 text-sm mt-1">{errors.password}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              type="password"
              className="input-field"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button type="submit" className="btn-primary">
              Continue to Location
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default BasicInfo;
