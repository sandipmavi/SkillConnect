function SubmissionConfirmation() {
  return (
    <div className="text-center py-8">
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
        <svg
          className="h-6 w-6 text-green-600"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="mt-6 text-2xl font-semibold text-gray-900">
        Thank you for registering!
      </h2>
      <p className="mt-2 text-gray-600">
        Your profile is under review. We&apos;ll notify you once it&apos;s
        approved by our team.
      </p>
      <div className="mt-6">
        <a href="/" className="text-primary hover:text-primary/80">
          Return to Home
        </a>
      </div>
    </div>
  );
}

export default SubmissionConfirmation;
