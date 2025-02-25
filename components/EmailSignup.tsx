export default function EmailSignup() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border rounded-lg p-8 bg-gray-50">
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">Why pay full price?</h2>
        <p className="text-base md:text-lg text-gray-600">
          Get instant alerts for flight deals to anywhere in the world. Join our free service!
        </p>
      </div>
      <div className="md:w-1/2 w-full max-w-lg mt-4 md:mt-0">
        <iframe
          src="https://embeds.beehiiv.com/30ad47ac-cfd0-4c8a-b68a-489fa999d343?slim=true"
          data-test-id="beehiiv-embed"
          height="52"
          width="100%"
          frameBorder="0"
          scrolling="no"
          style={{
            margin: 0,
            borderRadius: "6px",
            backgroundColor: "transparent",
          }}
        />
      </div>
    </div>
  )
} 