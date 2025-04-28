import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  pincode: Yup.string().required('Pincode is required').matches(/^\d{6}$/, 'Invalid pincode'),
  serviceableArea: Yup.string().required('Serviceable area is required'),
  serviceRadius: Yup.number().min(1, 'Minimum radius is 1 km').max(50, 'Maximum radius is 50 km'),
});

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 
  'West Bengal'
];

function LocationDetails({ formData, onNext, onBack }) {
  const handleSubmit = (values) => {
    onNext(values);
  };

  return (
    <Formik
      initialValues={{
        address: formData.address || '',
        city: formData.city || '',
        state: formData.state || '',
        pincode: formData.pincode || '',
        serviceableArea: formData.serviceableArea || '',
        serviceRadius: formData.serviceRadius || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Address</label>
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
            <label className="block text-sm font-medium text-gray-700">City</label>
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
            <label className="block text-sm font-medium text-gray-700">State</label>
            <Field
              as="select"
              name="state"
              className="input-field"
            >
              <option value="">Select state</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </Field>
            {errors.state && touched.state && (
              <div className="text-red-500 text-sm mt-1">{errors.state}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pincode</label>
            <Field
              name="pincode"
              type="text"
              className="input-field"
              placeholder="Enter 6-digit pincode"
            />
            {errors.pincode && touched.pincode && (
              <div className="text-red-500 text-sm mt-1">{errors.pincode}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Serviceable Area</label>
            <Field
              name="serviceableArea"
              type="text"
              className="input-field"
              placeholder="Enter area where you can provide service"
            />
            {errors.serviceableArea && touched.serviceableArea && (
              <div className="text-red-500 text-sm mt-1">{errors.serviceableArea}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Service Radius (in km)</label>
            <Field
              name="serviceRadius"
              type="number"
              min="1"
              max="50"
              className="input-field"
              placeholder="Enter service radius in kilometers"
            />
            {errors.serviceRadius && touched.serviceRadius && (
              <div className="text-red-500 text-sm mt-1">{errors.serviceRadius}</div>
            )}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={onBack}
              className="btn-secondary"
            >
              Back
            </button>
            <button type="submit" className="btn-primary">
              Continue to Professional Details
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LocationDetails;