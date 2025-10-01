import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <header style={{ 
      background: 'white', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000,
      transition: 'box-shadow 0.2s ease'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: isMobile ? 'flex-start' : 'space-between', 
        alignItems: 'center', 
        padding: isMobile ? '15px 20px' : '20px 20px',
        width: '100%',
        position: 'relative'
      }}>
        {/* Logo - Always on Left */}
        <img 
          src="/logo/LogoBackgroundRemoved.png" 
          alt="ReturnCargo" 
          style={{ 
            height: isMobile ? '70px' : '100px', 
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
        
        {/* Desktop Navigation - Right Side */}
        {!isMobile && (
          <nav style={{ 
            display: 'flex', 
            gap: '20px', 
            alignItems: 'center',
            justifyContent: 'flex-end'
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
            <a href="#" className="btn btn-primary" style={{
              padding: '10px 20px',
              fontSize: '14px'
            }}>
              Get Started
            </a>
          </nav>
        )}
        
        {/* Mobile Hamburger - Always on Right */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '8px',
              transition: 'transform 0.2s ease',
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>
      
      {/* Mobile Menu */}
      {isMobile && (
        <div style={{
          background: 'white',
          borderTop: '1px solid #e5e7eb',
          padding: '20px',
          maxHeight: isMenuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, padding 0.3s ease',
          paddingTop: isMenuOpen ? '20px' : '0',
          paddingBottom: isMenuOpen ? '20px' : '0'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <a href="#how-it-works" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              fontSize: '16px',
              padding: '12px 0',
              width: '100%',
              textAlign: 'center',
              transition: 'color 0.2s ease'
            }}>
              How It Works
            </a>
            <a href="#features" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              fontSize: '16px',
              padding: '12px 0',
              width: '100%',
              textAlign: 'center',
              transition: 'color 0.2s ease'
            }}>
              Features
            </a>
            <a href="#pricing" style={{ 
              textDecoration: 'none', 
              color: '#4b5563', 
              fontWeight: '500',
              fontSize: '16px',
              padding: '12px 0',
              width: '100%',
              textAlign: 'center',
              transition: 'color 0.2s ease'
            }}>
              Pricing
            </a>
            <a href="#" className="btn btn-primary" style={{
              padding: '12px 24px',
              fontSize: '16px',
              textAlign: 'center',
              marginTop: '8px',
              width: '200px',
              transition: 'all 0.2s ease'
            }}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;