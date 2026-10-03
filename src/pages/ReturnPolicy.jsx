import React from 'react';

const ReturnPolicy = () => {
  const pageStyle = {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '32px',
    background: '#18181b',
    color: '#e4e4e7',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
    lineHeight: '1.8'
  };

  const headingStyle = {
    color: '#f97316',
    marginTop: '28px',
    marginBottom: '8px'
  };

  return (
    <main style={pageStyle}>
      <h1 style={{ color: '#fff', marginTop: 0 }}>Return Policy</h1>
      <p style={{ color: '#a1a1aa' }}>
        At Vastram, we want you to be happy with your purchase. Please read this policy before requesting a return.
      </p>

      <h2 style={headingStyle}>Return Window</h2>
      <p>
        Return requests must be raised within 7 days of delivery. Items sent back after this period may not be accepted.
      </p>

      <h2 style={headingStyle}>Eligibility for Returns</h2>
      <p>To be eligible, an item must be unused, unwashed, undamaged, and returned with its original tags, packaging, and invoice.</p>

      <h2 style={headingStyle}>Non-Returnable Items</h2>
      <p>
        Items marked as final sale, customised products, innerwear, accessories that cannot be returned for hygiene reasons, and products without original tags are not eligible for return.
      </p>

      <h2 style={headingStyle}>Damaged or Incorrect Items</h2>
      <p>
        If you receive a damaged, defective, or incorrect item, contact our support team within 48 hours of delivery and include clear photos or a video of the product and packaging.
      </p>

      <h2 style={headingStyle}>How to Request a Return</h2>
      <p>
        Contact Vastram support with your order number, the item you want to return, and the reason for the return. Once approved, we will share the return instructions.
      </p>

      <h2 style={headingStyle}>Refunds</h2>
      <p>
        After the returned item passes inspection, the refund will be processed to the original payment method. Depending on your bank or payment provider, it may take 5–10 business days for the amount to appear.
      </p>

      <h2 style={headingStyle}>Exchange</h2>
      <p>
        Exchanges are subject to stock availability. If the requested replacement is unavailable, we will offer a refund after the return is approved.
      </p>

      <h2 style={headingStyle}>Contact Us</h2>
      <p>For help with a return, please contact the Vastram support team with your order details.</p>

      <p style={{ color: '#a1a1aa', marginTop: '28px', fontSize: '0.9rem' }}>Last updated: September 25, 2026</p>
    </main>
  );
};

export default ReturnPolicy;
