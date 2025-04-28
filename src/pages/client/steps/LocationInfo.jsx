import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  address: Yup.string().required("Address is required"),
  pincode: Yup.string()
    .matches(/^\d{6}$/, "Invalid pincode")
    .required("Pincode is required"),
});

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

function LocationInfo({ formData, onNext, onBack }) {
  const handleSubmit = (values) => {
    onNext(values);
  };

  return (
    <Formik
      initialValues={{
        state: formData.state || "",
        city: formData.city || "",
        address: formData.address || "",
        pincode: formData.pincode || "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <Field as="select" name="state" className="input-field">
              <option value="">Select state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Field>
            {errors.state && touched.state && (
              <div className="text-red-500 text-sm mt-1">{errors.state}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <Field
              name="city"
              type="text"
              className="input-field"
              placeholder="Enter your city"
            />
            {errors.city && touched.city && (
              <div className="text-red-500 text-sm mt-1">{errors.city}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Address
            </label>
            <Field
              as="textarea"
              name="address"
              rows={3}
              className="input-field"
              placeholder="Enter your complete address"
            />
            {errors.address && touched.address && (
              <div className="text-red-500 text-sm mt-1">{errors.address}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              PIN Code
            </label>
            <Field
              name="pincode"
              type="text"
              className="input-field"
              placeholder="Enter 6-digit PIN code"
            />
            {errors.pincode && touched.pincode && (
              <div className="text-red-500 text-sm mt-1">{errors.pincode}</div>
            )}
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={onBack} className="btn-secondary">
              Back
            </button>
            <button type="submit" className="btn-primary">
              Continue to Preferences
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LocationInfo;
