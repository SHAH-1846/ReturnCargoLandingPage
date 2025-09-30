import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      background: '#1a1a1a', 
      color: 'white', 
      padding: '60px 0 30px 0' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px',
              marginBottom: '20px'
            }}>
              <img 
                src="/logo/LogoBackgroundRemoved.png" 
                alt="ReturnCargo" 
                style={{ 
                  height: '80px', 
                  width: 'auto',
                  filter: 'brightness(1.2) contrast(1.1)',
                  borderRadius: '6px'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ 
                display: 'none', 
                fontSize: '24px', 
                fontWeight: '700', 
                color: 'white',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}>
                  🚛
                </div>
                ReturnCargo
              </div>
            </div>
            <p style={{ 
              color: '#9ca3af', 
              lineHeight: '1.6',
              marginBottom: '20px',
              fontSize: 'clamp(13px, 2vw, 14px)'
            }}>
              Turn empty return trips into profit with our secure, token-based platform.
            </p>
            <div style={{ 
              fontSize: 'clamp(12px, 2vw, 14px)', 
              color: '#6b7280' 
            }}>
              ReturnCargo converts empty return trips into revenue by matching drivers with nearby delivery requests.
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
              fontWeight: '600', 
              marginBottom: '20px' 
            }}>
              For Drivers
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0 
            }}>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}>
                  List a Trip
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}>
                  Buy Tokens
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}>
                  Driver Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
              fontWeight: '600', 
              marginBottom: '20px' 
            }}>
              For Shippers
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0 
            }}>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}>
                  Find Drivers
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}>
                  Track Shipments
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}>
                  Business Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
              fontWeight: '600', 
              marginBottom: '20px' 
            }}>
              Support
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0 
            }}>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}>
                  Help Center
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}>
                  Contact Us
                </a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#" style={{ 
                  color: '#9ca3af', 
                  textDecoration: 'none',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #374151', 
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <div style={{ 
            color: '#6b7280', 
            fontSize: 'clamp(12px, 2vw, 14px)' 
          }}>
            © 2024 ReturnCargo. All rights reserved.
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '20px' 
          }}>
            <a href="#" style={{ 
              color: '#6b7280', 
              textDecoration: 'none',
              fontSize: 'clamp(12px, 2vw, 14px)'
            }}>
              Terms of Service
            </a>
            <a href="#" style={{ 
              color: '#6b7280', 
              textDecoration: 'none',
              fontSize: 'clamp(12px, 2vw, 14px)'
            }}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;