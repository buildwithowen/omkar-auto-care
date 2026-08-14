export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "#f7f7f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "0 0 12px",
            color: "#fd8833",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.16em",
          }}
        >
          THANK YOU
        </p>

        <h1
          style={{
            margin: 0,
            color: "#1f1f1f",
            fontSize: "clamp(36px, 6vw, 58px)",
            lineHeight: 1.08,
          }}
        >
          We&apos;ve received your enquiry.
        </h1>

        <p
          style={{
            margin: "22px auto 0",
            maxWidth: "560px",
            color: "#666666",
            fontSize: "16px",
            lineHeight: 1.7,
          }}
        >
          The OMKAR Autocare team will get back to you as soon as possible.
        </p>

        <a
          href="/"
          style={{
            display: "inline-flex",
            marginTop: "30px",
            minHeight: "50px",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
            background: "#fd8833",
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}