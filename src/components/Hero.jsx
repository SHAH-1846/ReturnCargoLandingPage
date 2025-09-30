import React from 'react';

const Hero = () => {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
      padding: '100px 0' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px', 
          alignItems: 'center' 
        }}>
          <div>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: '800', 
              lineHeight: '1.1', 
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Earn on Empty Trips — Fill the Return, Not the Road.
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
              color: '#4b5563', 
              marginBottom: '40px', 
              lineHeight: '1.6' 
            }}>
              ReturnCargo matches drivers with nearby delivery requests, protects your leads, 
              and ensures verified bookings so every trip earns.
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              marginBottom: '30px',
              flexWrap: 'wrap',
              justifyContent: 'flex-start'
            }}>
              <a href="#" className="btn btn-primary" style={{ 
                fontSize: 'clamp(14px, 2vw, 18px)',
                flex: '1 1 auto',
                minWidth: '200px',
                maxWidth: '280px'
              }}>
                Get Started — List a Trip
              </a>
              <a href="#" className="btn btn-secondary" style={{ 
                fontSize: 'clamp(14px, 2vw, 18px)',
                flex: '1 1 auto',
                minWidth: '200px',
                maxWidth: '280px'
              }}>
                Find Loads Near Me
              </a>
            </div>
            
            <p style={{ 
              fontSize: '14px', 
              color: '#6b7280', 
              fontStyle: 'italic' 
            }}>
              No hidden contacts. Connect only after mutual acceptance. OTP verification & live tracking included.
            </p>
          </div>
          
          <div style={{ 
            background: 'white', 
            borderRadius: '20px', 
            padding: '40px', 
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)' 
          }}>
            <div style={{ 
              background: '#f1f5f9', 
              borderRadius: '12px', 
              padding: '30px', 
              textAlign: 'center' 
            }}>
              <div style={{ 
                fontSize: '4rem', 
                marginBottom: '20px' 
              }}>🚛</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '15px' 
              }}>
                Smart Driver Matching
              </h3>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-around', 
                marginTop: '20px' 
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '5px' }}>🛡️</div>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>Secure</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '5px' }}>⚡</div>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>Fast</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '5px' }}>💰</div>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>Earn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Value Props */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px', 
          marginTop: '60px' 
        }}>
          <div className="trust-badge">
            <span style={{ fontSize: '1.5rem' }}>⚡</span>
            <div style={{ fontSize: 'clamp(13px, 2vw, 14px)' }}>
              <strong>Instant Matches:</strong> Smart recommendations match your trip to paying customers.
            </div>
          </div>
          <div className="trust-badge">
            <span style={{ fontSize: '1.5rem' }}>🛡️</span>
            <div style={{ fontSize: 'clamp(13px, 2vw, 14px)' }}>
              <strong>Lead Protection:</strong> Contacts revealed only after accepted ConnectRequest — tokens deducted only then.
            </div>
          </div>
          <div className="trust-badge">
            <span style={{ fontSize: '1.5rem' }}>✅</span>
            <div style={{ fontSize: 'clamp(13px, 2vw, 14px)' }}>
              <strong>Verified Deliveries:</strong> OTP & real-time tracking confirm pickups and deliveries before completion.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;