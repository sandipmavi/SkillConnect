import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  preferredLanguage: Yup.string(),
  frequentlyNeededServices: Yup.array(),
});

const languages = [
  "English",
  "Hindi",
  "Bengali",
  "Telugu",
  "Marathi",
  "Tamil",
  "Urdu",
  "Gujarati",
  "Kannada",
  "Malayalam",
];

const services = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Mechanic",
  "Painter",
  "Tutor",
  "Mason",
  "Gardener",
  "House Cleaner",
  "Cook",
];

function Preferences({ formData, onNext, onBack }) {
  const handleSubmit = (values) => {
    onNext(values);
  };

  return (
    <Formik
      initialValues={{
        preferredLanguage: formData.preferredLanguage || "",
        frequentlyNeededServices: formData.frequentlyNeededServices || [],
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Preferred Language
            </label>
            <Field as="select" name="preferredLanguage" className="input-field">
              <option value="">Select language</option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </Field>
            <p className="text-sm text-gray-500 mt-1">
              Choose your preferred language for communication
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Services You Might Need
            </label>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <label key={service} className="flex items-center space-x-2">
                  <Field
                    type="checkbox"
                    name="frequentlyNeededServices"
                    value={service}
                    className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Select services you might need frequently (optional)
            </p>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={onBack} className="btn-secondary">
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

export default Preferences;
