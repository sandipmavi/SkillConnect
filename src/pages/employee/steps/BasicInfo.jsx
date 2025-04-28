import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  mobile: Yup.string().required("Mobile number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dob: Yup.date().required("Date of birth is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

function BasicInfo({ formData, onNext }) {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (values) => {
    onNext({ ...values, profilePicture });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(file);
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: formData.fullName || "",
        mobile: formData.mobile || "",
        email: formData.email || "",
        dob: formData.dob || "",
        gender: formData.gender || "",
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
              placeholder="John Doe"
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
              placeholder="+91 123 456 7890"
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
              placeholder="john@mail.in"
            />
            {errors.email && touched.email && (
              <div className="text-red-500 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">
              Date of Birth
            </label>
            <Field name="dob" type="date" className="input-field" />
            {errors.dob && touched.dob && (
              <div className="text-red-500 text-sm mt-1">{errors.dob}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <Field as="select" name="gender" className="input-field  ">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Field>
            {errors.gender && touched.gender && (
              <div className="text-red-500 text-sm mt-1">{errors.gender}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Field
              name="password"
              type="text"
              className="input-field"
              placeholder="#########"
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
              type="text"
              className="input-field"
              placeholder="#########"
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
