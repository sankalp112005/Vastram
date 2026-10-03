import React from "react";

const Disclaimer = () => {
  const pageStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "32px",
    background: "#18181b",
    color: "#e4e4e7",
    borderRadius: "16px",
    lineHeight: "1.8",
  };

  const headingStyle = {
    color: "#f97316",
    marginTop: "28px",
    marginBottom: "8px",
  };

  return (
    <main style={pageStyle}>
      <h1 style={{ color: "#fff", marginTop: 0 }}>Disclaimer</h1>

      <p>
        The information provided on Vastram is for general shopping and
        informational purposes only. By using this website, you agree to this
        disclaimer.
      </p>

      <h2 style={headingStyle}>Product Information</h2>
      <p>
        We try to keep product descriptions, prices, images, sizes, and stock
        availability accurate. However, minor differences in colour, fabric,
        measurements, or appearance may occur because of screen settings and
        lighting.
      </p>

      <h2 style={headingStyle}>Pricing and Availability</h2>
      <p>
        Product prices and availability may change without prior notice. We
        reserve the right to correct pricing errors, update product details, or
        cancel an order if incorrect information is displayed.
      </p>

      <h2 style={headingStyle}>Orders and Payments</h2>
      <p>
        Placing an order does not guarantee acceptance. Vastram may cancel or
        refuse an order due to stock issues, payment failure, incorrect pricing,
        suspected fraud, or other operational reasons.
      </p>

      <h2 style={headingStyle}>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party services. Vastram is not
        responsible for the content, security, policies, or practices of those
        external websites.
      </p>

      <h2 style={headingStyle}>Limitation of Liability</h2>
      <p>
        Vastram will not be liable for any direct, indirect, incidental, or
        consequential loss arising from the use of this website, products, or
        services, to the extent permitted by applicable law.
      </p>

      <h2 style={headingStyle}>Changes to This Disclaimer</h2>
      <p>
        We may update this disclaimer at any time. Updates will be posted on
        this page, and continued use of Vastram means you accept the revised
        terms.
      </p>

      <h2 style={headingStyle}>Contact</h2>
      <p>
        For questions about this disclaimer, please contact the Vastram support
        team.
      </p>

      <p style={{ color: "#a1a1aa", marginTop: "28px" }}>
        Last updated: September 25, 2026
      </p>
    </main>
  );
};

export default Disclaimer;