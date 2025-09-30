import React from 'react';

const SocialProof = () => {
  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <h2 className="section-title">Trusted by drivers, chosen by businesses.</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px',
          marginBottom: '50px'
        }}>
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="stars" style={{ 
              fontSize: '2rem', 
              marginBottom: '20px' 
            }}>
              ★★★★☆
            </div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '15px' 
            }}>
              4.2/5 Average Driver Rating
            </h3>
            <p style={{ color: '#6b7280' }}>
              Based on 1,200+ verified driver reviews
            </p>
          </div>
          
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '3rem', 
              marginBottom: '20px' 
            }}>📈</div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '15px',
              color: '#1e40af'
            }}>
              28% Extra Income
            </h3>
            <p style={{ color: '#1e40af', fontWeight: '500' }}>
              Average driver earnings increase on return trips in 30 days
            </p>
            <a href="#" style={{ 
              color: '#2563eb', 
              textDecoration: 'none', 
              fontWeight: '600',
              fontSize: '14px'
            }}>
              Read Case Study →
            </a>
          </div>
          
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ 
              fontSize: '3rem', 
              marginBottom: '20px' 
            }}>🤝</div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              marginBottom: '15px' 
            }}>
              Trusted Partners
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '20px' }}>
              Working with leading logistics companies
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '15px',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                background: '#f1f5f9', 
                padding: '8px 16px', 
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#4b5563'
              }}>
                LogiCorp
              </div>
              <div style={{ 
                background: '#f1f5f9', 
                padding: '8px 16px', 
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#4b5563'
              }}>
                FreightFlow
              </div>
              <div style={{ 
                background: '#f1f5f9', 
                padding: '8px 16px', 
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#4b5563'
              }}>
                CargoLink
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;