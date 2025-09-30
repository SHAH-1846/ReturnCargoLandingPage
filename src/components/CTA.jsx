import React from 'react';

const CTA = () => {
  return (
    <section className="section" style={{ 
      background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
      color: 'white'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          fontWeight: '700', 
          marginBottom: '20px' 
        }}>
          Ready to turn empty kilometers into cash?
        </h2>
        
        <p style={{ 
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
          marginBottom: '40px',
          opacity: 0.9
        }}>
          Join thousands of drivers already earning extra income on return trips
        </p>
        
        <div style={{ 
          display: 'flex', 
          gap: '15px', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(12px, 2vw, 16px) clamp(20px, 4vw, 32px)',
            background: 'white',
            color: '#2563eb',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: 'clamp(14px, 2vw, 18px)',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 14px rgba(255,255,255,0.2)',
            minWidth: '200px',
            textAlign: 'center'
          }}>
            List Your Trip — It takes 2 minutes
          </a>
          
          <a href="#" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(12px, 2vw, 16px) clamp(20px, 4vw, 32px)',
            background: 'transparent',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: 'clamp(14px, 2vw, 18px)',
            border: '2px solid white',
            transition: 'all 0.3s ease',
            minWidth: '200px',
            textAlign: 'center'
          }}>
            I'm a Shipper — Find a Driver
          </a>
        </div>
        
        <p style={{ 
          fontSize: '14px', 
          marginTop: '30px',
          opacity: 0.8
        }}>
          No credit card required • Start earning immediately • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;