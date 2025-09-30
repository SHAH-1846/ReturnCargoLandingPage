import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: 'How are leads protected?',
      answer: 'Contacts are hidden until a ConnectRequest is accepted. Tokens are deducted only at this stage.'
    },
    {
      question: 'What happens if a customer agrees outside the app?',
      answer: 'The platform requires booking confirmation and auto-cancels other pending requests to protect driver tokens.'
    },
    {
      question: 'Can I list multiple vehicles?',
      answer: 'Yes — but drivers are limited to one active trip at a time to avoid overcommitment.'
    },
    {
      question: 'How is pricing calculated?',
      answer: 'Tokens are deducted based on both the trip distance and the customer\'s lead distance.'
    },
    {
      question: 'Is there verification?',
      answer: 'Yes — OTPs for pickup/delivery and live location tracking ensure secure transactions.'
    },
    {
      question: 'Do tokens expire?',
      answer: 'No. Tokens remain in your wallet until used.'
    }
  ];

  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto' 
        }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ 
              marginBottom: '20px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '20px',
                  background: openIndex === index ? '#f8fafc' : 'white',
                  border: 'none',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {faq.question}
                <span style={{ 
                  fontSize: '1.5rem',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div style={{ 
                  padding: '0 20px 20px 20px',
                  background: '#f8fafc'
                }}>
                  <p style={{ 
                    color: '#4b5563',
                    lineHeight: '1.6'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;