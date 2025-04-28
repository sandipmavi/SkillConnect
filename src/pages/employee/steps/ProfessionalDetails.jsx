import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  skillCategory: Yup.string().required('Skill category is required'),
  experience: Yup.number().required('Years of experience is required').min(0, 'Invalid experience'),
  availability: Yup.array().min(1, 'Select at least one day'),
  bio: Yup.string().required('Bio is required').min(50, 'Bio must be at least 50 characters'),
});

const skillCategories = [
  'Electrician',
  'Plumber',
  'Carpenter',
  'Mechanic',
  'Painter',
  'Tutor',
  'Mason',
  'Gardener',
  'House Cleaner',
  'Cook'
];

const days = [
  { id: 'mon', label: 'Monday' },
  { id: 'tue', label: 'Tuesday' },
  { id: 'wed', label: 'Wednesday' },
  { id: 'thu', label: 'Thursday' },
  { id: 'fri', label: 'Friday' },
  { id: 'sat', label: 'Saturday' },
  { id: 'sun', label: 'Sunday' }
];

function ProfessionalDetails({ formData, onNext, onBack }) {
  const [certification, setCertification] = useState(null);
  const [portfolio, setPortfolio] = useState([]);

  const handleSubmit = (values) => {
    onNext({
      ...values,
      certification,
      portfolio
    });
  };

  const handleCertificationUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCertification(file);
    }
  };

  const handlePortfolioUpload = (event) => {
    const files = Array.from(event.target.files);
    setPortfolio(prev => [...prev, ...files]);
  };

  return (
    <Formik
      initialValues={{
        skillCategory: formData.skillCategory || '',
        experience: formData.experience || '',
        availability: formData.availability || [],
        bio: formData.bio || '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill Category</label>
            <Field
              as="select"
              name="skillCategory"
              className="input-field"
            >
              <option value="">Select your skill category</option>
              {skillCategories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Field>
            {errors.skillCategory && touched.skillCategory && (
              <div className="text-red-500 text-sm mt-1">{errors.skillCategory}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
            <Field
              name="experience"
              type="number"
              min="0"
              className="input-field"
              placeholder="Enter years of experience"
            />
            {errors.experience && touched.experience && (
              <div className="text-red-500 text-sm mt-1">{errors.experience}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">License/Certification</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleCertificationUpload}
              className="input-field"
            />
            <p className="text-sm text-gray-500 mt-1">Upload your certification (optional)</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
            <div className="grid grid-cols-2 gap-4">
              {days.map(day => (
                <label key={day.id} className="flex items-center space-x-2">
                  <Field
                    type="checkbox"
                    name="availability"
                    value={day.id}
                    className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">{day.label}</span>
                </label>
              ))}
            </div>
            {errors.availability && touched.availability && (
              <div className="text-red-500 text-sm mt-1">{errors.availability}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bio / Work Summary</label>
            <Field
              as="textarea"
              name="bio"
              rows={4}
              className="input-field"
              placeholder="Tell us about your work experience and expertise..."
            />
            {errors.bio && touched.bio && (
              <div className="text-red-500 text-sm mt-1">{errors.bio}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Portfolio Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePortfolioUpload}
              className="input-field"
            />
            <p className="text-sm text-gray-500 mt-1">Upload images of your previous work (optional)</p>
            {portfolio.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                {portfolio.length} images selected
              </div>
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
              Continue to Verification
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProfessionalDetails;