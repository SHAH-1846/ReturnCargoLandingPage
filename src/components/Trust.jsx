import React from 'react';

const Trust = () => {
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title">Built for drivers. Trusted by businesses.</h2>
        
        <div className="grid grid-2" style={{ marginBottom: '60px' }}>
          <div className="card">
            <div className="icon">🛡️</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
              Protected Leads
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Contacts shared only after mutual acceptance — your tokens are never wasted.
            </p>
          </div>
          
          <div className="card">
            <div className="icon">📍</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
              Live Tracking & OTP
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Pickup and delivery verification protect both parties and reduce fraud.
            </p>
          </div>
          
          <div className="card">
            <div className="icon">💎</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
              Transparent Token System
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Drivers buy tokens upfront; deductions are based on trip and lead distance ranges.
            </p>
          </div>
          
          <div className="card">
            <div className="icon">🎯</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
              One Active Trip Rule
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Drivers focus on one active trip at a time — better service, fewer errors.
            </p>
          </div>
          
          <div className="card">
            <div className="icon">⚙️</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
              Admin Controls & Route Data
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Pre-seeded routes, coordinate automation and admin management keep operations smooth.
            </p>
          </div>
          
          <div className="card">
            <div className="icon">🏆</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px' }}>
              24/7 Support
            </h3>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              Round-the-clock assistance ensures smooth operations and quick issue resolution.
            </p>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '40px', 
          flexWrap: 'wrap' 
        }}>
          <div className="trust-badge">
            <span style={{ fontSize: '1.2rem' }}>✅</span>
            <span style={{ fontWeight: '600' }}>Verified Drivers</span>
          </div>
          <div className="trust-badge">
            <span style={{ fontSize: '1.2rem' }}>🔒</span>
            <span style={{ fontWeight: '600' }}>Secure ConnectCount</span>
          </div>
          <div className="trust-badge">
            <span style={{ fontSize: '1.2rem' }}>🕒</span>
            <span style={{ fontWeight: '600' }}>24/7 Support</span>
          </div>
          <div className="trust-badge">
            <span style={{ fontSize: '1.2rem' }}>📍</span>
            <span style={{ fontWeight: '600' }}>Live Tracking Enabled</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;