import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'List a Trip',
      description: 'Enter route, schedule, capacity.',
      microcopy: 'Takes <2 minutes.',
      icon: '📝'
    },
    {
      number: '2', 
      title: 'Get Matched',
      description: 'System recommends nearby customer requests; browse or get auto-suggestions.',
      microcopy: 'Smart AI matching',
      icon: '🎯'
    },
    {
      number: '3',
      title: 'Accept ConnectRequest', 
      description: 'Contact details are revealed only after both parties agree. Tokens are deducted at this stage.',
      microcopy: 'Protected leads',
      icon: '🤝'
    },
    {
      number: '4',
      title: 'Verify & Earn',
      description: 'Use OTP & live tracking for pickup/delivery verification; payment released after successful delivery.',
      microcopy: 'Secure & verified',
      icon: '💰'
    }
  ];

  return (
    <section id="how-it-works" className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <h2 className="section-title">How It Works — Simple 4-Step Flow</h2>
        <p className="section-subtitle">
          Start earning from your empty return trips in minutes
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px',
          marginBottom: '50px'
        }}>
          {steps.map((step, index) => (
            <div key={index} className="card" style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                position: 'absolute',
                top: '-15px',
                left: '20px',
                background: '#2563eb',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '14px'
              }}>
                {step.number}
              </div>
              
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
                {step.icon}
              </div>
              
              <h3 style={{ 
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
                fontWeight: '600', 
                marginBottom: '15px',
                color: '#1a1a1a'
              }}>
                {step.title}
              </h3>
              
              <p style={{ 
                color: '#6b7280', 
                lineHeight: '1.6',
                marginBottom: '10px',
                fontSize: 'clamp(13px, 2vw, 14px)'
              }}>
                {step.description}
              </p>
              
              <p style={{ 
                fontSize: 'clamp(12px, 2vw, 14px)',
                color: '#2563eb',
                fontWeight: '500',
                fontStyle: 'italic'
              }}>
                {step.microcopy}
              </p>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <a href="#" className="btn btn-primary" style={{ 
            fontSize: 'clamp(14px, 2vw, 18px)',
            maxWidth: '300px',
            margin: '0 auto'
          }}>
            Start Earning Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;