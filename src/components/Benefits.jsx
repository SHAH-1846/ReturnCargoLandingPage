import React from 'react';

const Benefits = () => {
  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <h2 className="section-title">What drivers feel — and what businesses gain.</h2>
        
        <div className="grid grid-3">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            border: '2px solid #2563eb'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚛</div>
            <h3 style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
              fontWeight: '600', 
              marginBottom: '15px',
              color: '#1e40af'
            }}>
              Drivers
            </h3>
            <p style={{ 
              color: '#1e40af', 
              lineHeight: '1.6',
              fontWeight: '500',
              fontSize: 'clamp(13px, 2vw, 14px)'
            }}>
              Earn extra income on trips that used to cost you money. Feel secure — tokens are only used when you truly connect.
            </p>
          </div>
          
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
            border: '2px solid #16a34a'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📦</div>
            <h3 style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
              fontWeight: '600', 
              marginBottom: '15px',
              color: '#15803d'
            }}>
              Shippers
            </h3>
            <p style={{ 
              color: '#15803d', 
              lineHeight: '1.6',
              fontWeight: '500',
              fontSize: 'clamp(13px, 2vw, 14px)'
            }}>
              Save on delivery fees and find trusted drivers who are already heading your way. Track shipments with confidence.
            </p>
          </div>
          
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            border: '2px solid #d97706'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏢</div>
            <h3 style={{ 
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', 
              fontWeight: '600', 
              marginBottom: '15px',
              color: '#c2410c'
            }}>
              Business Owners
            </h3>
            <p style={{ 
              color: '#c2410c', 
              lineHeight: '1.6',
              fontWeight: '500',
              fontSize: 'clamp(13px, 2vw, 14px)'
            }}>
              Reduce logistics friction, improve capacity utilization, and cut return-trip waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;