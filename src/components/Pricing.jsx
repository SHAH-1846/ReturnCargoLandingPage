import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="section" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title">Simple. Transparent. Token-powered.</h2>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center' 
        }}>
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            padding: '50px',
            marginBottom: '40px'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '30px' }}>💎</div>
            
            <h3 style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
              fontWeight: '600', 
              marginBottom: '20px',
              color: '#1a1a1a'
            }}>
              Pay-As-You-Go Token System
            </h3>
            
            <p style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#4b5563', 
              lineHeight: '1.6',
              marginBottom: '30px'
            }}>
              Drivers purchase tokens and load them into their wallet. When a ConnectRequest is accepted, tokens are deducted automatically based on:
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '15px',
              marginBottom: '30px'
            }}>
              <div className="trust-badge" style={{ 
                background: 'white',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📏</span>
                <span style={{ fontWeight: '600' }}>Trip distance range</span>
              </div>
              <div className="trust-badge" style={{ 
                background: 'white',
                justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📍</span>
                <span style={{ fontWeight: '600' }}>Lead/customer distance range</span>
              </div>
            </div>
            
            <div style={{ 
              background: '#dbeafe',
              padding: '20px',
              borderRadius: '12px',
              marginBottom: '30px'
            }}>
              <p style={{ 
                color: '#1e40af',
                fontWeight: '600',
                fontSize: '1.1rem'
              }}>
                No subscriptions. No hidden fees. Just fair, pay-as-you-go pricing.
              </p>
            </div>
            
            <a href="#" className="btn btn-primary" style={{ 
              fontSize: 'clamp(14px, 2vw, 18px)',
              padding: 'clamp(12px, 2vw, 16px) clamp(20px, 4vw, 32px)',
              maxWidth: '350px',
              margin: '0 auto'
            }}>
              👉 Buy Tokens & Start Earning
            </a>
          </div>
          
          {/* Pricing Benefits */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px' 
          }}>
            <div className="trust-badge">
              <span style={{ fontSize: '1.5rem' }}>💰</span>
              <div style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>
                <strong>Fair Pricing:</strong> Pay only when leads convert to actual connections
              </div>
            </div>
            <div className="trust-badge">
              <span style={{ fontSize: '1.5rem' }}>🔄</span>
              <div style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>
                <strong>No Expiry:</strong> Tokens remain in your wallet until used
              </div>
            </div>
            <div className="trust-badge">
              <span style={{ fontSize: '1.5rem' }}>📊</span>
              <div style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>
                <strong>Transparent:</strong> See exactly how tokens are calculated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;