import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      background: 'white', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000 
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 20px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img 
            src="/logo/LogoBackgroundRemoved.png" 
            alt="ReturnCargo" 
            style={{ 
              height: '100px', 
              width: 'auto',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ 
            display: 'none', 
            fontSize: '28px', 
            fontWeight: '700', 
            color: '#2563eb',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '800',
              fontSize: '20px',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
            }}>
              🚛
            </div>
            ReturnCargo
          </div>
        </div>
        
        <nav style={{ 
          display: 'flex', 
          gap: '20px', 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="#how-it-works" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              fontSize: '14px'
            }}>
              How It Works
            </a>
            <a href="#features" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              fontSize: '14px'
            }}>
              Features
            </a>
            <a href="#pricing" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              fontSize: '14px'
            }}>
              Pricing
            </a>

          </div>
          <a href="#" className="btn btn-primary" style={{
            padding: '10px 20px',
            fontSize: '14px'
          }}>
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;