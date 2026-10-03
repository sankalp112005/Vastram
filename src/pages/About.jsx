import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={containerStyle}>
      <img
        src="/dp.jpg"
        alt="@sankalp_11"
        style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #f97316', marginBottom: '20px', boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)' }}
      />
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#fff' }}>About Me</h2>
      <h3 style={{ fontSize: '1.5rem', color: '#f97316', marginBottom: '15px' }}>Sankalp Jain (@sankalp_11)</h3>

      <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto 30px auto' }}>
        Hi, I&apos;m Sankalp Jain, the creator of Vastram. I&apos;m passionate about making fashion shopping simple, reliable, and enjoyable. Vastram brings together thoughtfully selected clothing and a smooth online shopping experience in one place.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        <span style={socialBtnStyle}>Founder of Vastram</span>
        <span style={{ ...socialBtnStyle, background: 'rgba(249, 115, 22, 0.15)', borderColor: '#f97316', color: '#f97316' }}>Fashion • Quality • Trust</span>
      </div>
    </div>
  );
};

export default About;