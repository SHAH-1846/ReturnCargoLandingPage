import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Smart Matching Engine',
      description: 'Matches by route, size, timing and distance.',
      icon: '🧠'
    },
    {
      title: 'ConnectCount Lead Protection',
      description: 'Prevents lead wastage and platform circumvention.',
      icon: '🛡️'
    },
    {
      title: 'Token Wallet System',
      description: 'Drivers purchase tokens and use them for leads; deductions depend on trip/lead distance.',
      icon: '💎'
    },
    {
      title: 'Real-time Tracking & ETA',
      description: 'Customers see live progress; drivers get smoother pickups.',
      icon: '📍'
    },
    {
      title: 'OTP Verification System',
      description: 'Pickup & delivery OTPs ensure completed transactions.',
      icon: '🔐'
    },
    {
      title: 'Admin Route Management',
      description: 'Pre-seeded coordinates, state/district grouping, and map integration.',
      icon: '⚙️'
    }
  ];

  return (
    <section id="features" className="section" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title">Everything drivers and shippers need — no fuss.</h2>
        
        <div className="grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {feature.icon}
              </div>
              
              <h3 style={{ 
                fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', 
                fontWeight: '600', 
                marginBottom: '15px',
                color: '#1a1a1a'
              }}>
                {feature.title}
              </h3>
              
              <p style={{ 
                color: '#6b7280', 
                lineHeight: '1.6',
                fontSize: 'clamp(13px, 2vw, 14px)'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;