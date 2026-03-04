"use client";

// Datos de productos del carrito
const cartItems = [
  {
    id: 1,
    name: "Denim T-Shirt",
    sku: "007197456",
    color: "Blue",
    quantity: 2,
    price: 7500.00,
    image: "/public/file.svg"
  },
  {
    id: 2,
    name: "Denim Pants",
    sku: "011015223",
    color: "Blue",
    quantity: 3,
    price: 9000.00,
    image: "/public/file.svg"
  },
  {
    id: 3,
    name: "Sony Smartwat...",
    sku: "004822981",
    color: "Black",
    quantity: 1,
    price: 24500.00,
    image: "/public/file.svg"
  },
  {
    id: 4,
    name: "Cognac Oxford",
    sku: "035777962",
    color: "Brown",
    quantity: 1,
    price: 4500.00,
    image: "/public/file.svg"
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Columna izquierda - 70% */}
      <div className="p-6 md:p-10" style={{ backgroundColor: 'var(--color-bg-main)', width: '70%' }}>
        <div className="w-full">
          {/* Header con logo y título */}
          <div className="flex items-center gap-6 mb-12">
            {/* Logo circular */}
            <div className="flex items-center justify-center" 
                 style={{ 
                   width: '56px', 
                   height: '56px', 
                   border: '2px solid var(--color-text-primary)',
                   borderRadius: '50%'
                 }}>
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600',
                color: 'var(--color-text-primary)'
              }}>O</span>
            </div>
            
            {/* Título */}
            <h1 className="text-title-large">Your Shopping Cart</h1>
          </div>
          
          {/* Lista de productos */}
          <div style={{ marginBottom: '3rem' }}>
            {cartItems.map((item) => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  backgroundColor: '#ffffff',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Imagen circular del producto */}
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  flexShrink: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '60%',
                    height: '60%',
                    backgroundColor: '#d0d0d0'
                  }}></div>
                </div>
                
                {/* Información del producto */}
                <div style={{ flex: '1', minWidth: '0' }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.25rem'
                  }}>{item.name}</h3>
                  <p className="text-secondary" style={{ fontSize: '0.75rem' }}>
                    Ref: {item.sku}
                  </p>
                </div>
                
                {/* Color */}
                <div style={{ 
                  minWidth: '60px',
                  textAlign: 'center'
                }}>
                  <span style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-primary)'
                  }}>{item.color}</span>
                </div>
                
                {/* Selector de cantidad */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <button style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#8c8f94',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600'
                  }}>+</button>
                  
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)'
                  }}>{item.quantity}</span>
                  
                  <button style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: '#8c8f94',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    lineHeight: '1'
                  }}>−</button>
                </div>
                
                {/* Precio */}
                <div style={{ 
                  minWidth: '120px',
                  textAlign: 'right'
                }}>
                  <span className="text-amount">
                    {item.price.toFixed(2)} NGN
                  </span>
                </div>
                
                {/* Botón eliminar */}
                <button style={{
                  width: '24px',
                  height: '24px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#8c8f94',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>×</button>
              </div>
            ))}
          </div>
          
          {/* Navegación inferior y subtotal */}
          <div className="flex items-center justify-between" style={{ marginTop: '3rem' }}>
            {/* Back to Shop */}
            <a href="#" className="flex items-center gap-2 text-secondary" style={{ textDecoration: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Back to Shop</span>
            </a>
            
            {/* Subtotal */}
            <div className="flex items-center gap-3">
              <span className="text-secondary">Subtotal:</span>
              <span className="text-amount">45500.00 NGN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Columna derecha - 30% - Sidebar fijo */}
      <div className="fixed right-0 top-0 p-6 md:p-10" 
           style={{ 
             width: '30%', 
             minHeight: '100vh',
             background: 'linear-gradient(135deg, var(--color-panel-dark-from) 0%, var(--color-panel-dark-to) 100%)',
             position: 'relative'
           }}>
        
        {/* Pestaña vertical con indicadores de pasos */}
        <div style={{
          position: 'absolute',
          left: '-20px',
          top: '50px',
          width: '40px',
          height: '180px',
          backgroundColor: '#1a1a1a',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          padding: '20px 0'
        }}>
          {/* Círculo amarillo - paso activo */}
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-accent)'
          }}></div>
          
          {/* Círculo gris - paso inactivo */}
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#6b6b6b'
          }}></div>
          
          {/* Círculo gris - paso inactivo */}
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#6b6b6b'
          }}></div>
        </div>
        
        {/* Contenido del panel */}
        <div className="w-full">
          <h2 className="text-subtitle" style={{ color: 'var(--color-accent)', marginBottom: '3rem' }}>Card Details</h2>
          
          {/* Select Card Type */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ 
              display: 'block',
              fontSize: '0.95rem',
              color: '#b8b8b8',
              marginBottom: '1rem',
              fontWeight: '400'
            }}>Select Card Type</label>
            
            {/* Logos de tarjetas */}
            <div style={{ 
              display: 'flex', 
              gap: '2rem',
              alignItems: 'center'
            }}>
              {/* Mastercard - seleccionado */}
              <div style={{
                display: 'flex',
                gap: '4px',
                opacity: '1',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff'
                }}></div>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  marginLeft: '-12px'
                }}></div>
              </div>
              
              {/* VISA - no seleccionado */}
              <span style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#6b6b6b',
                opacity: '0.5',
                cursor: 'pointer'
              }}>VISA</span>
              
              {/* Verve - no seleccionado */}
              <span style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#6b6b6b',
                opacity: '0.5',
                cursor: 'pointer'
              }}>Verve</span>
            </div>
          </div>
          
          {/* Contenido del panel de pago irá aquí */}
          
          {/* Formulario de tarjeta */}
          <div style={{ marginTop: '2.5rem' }}>
            {/* Card Number */}
            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ 
                display: 'block',
                fontSize: '0.9rem',
                color: '#b8b8b8',
                marginBottom: '1rem',
                fontWeight: '400'
              }}>Card Number</label>
              <input 
                type="text"
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #6b6b6b',
                  color: '#ffffff',
                  fontSize: '1rem',
                  padding: '0.5rem 0',
                  outline: 'none'
                }}
              />
            </div>
            
            {/* Expiry Date y CVV */}
            <div style={{ 
              display: 'flex', 
              gap: '3rem',
              marginBottom: '2.5rem'
            }}>
              {/* Expiry Date */}
              <div style={{ flex: '1' }}>
                <label style={{ 
                  display: 'block',
                  fontSize: '0.9rem',
                  color: '#b8b8b8',
                  marginBottom: '1rem',
                  fontWeight: '400'
                }}>Expiry Date</label>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <input 
                    type="text"
                    placeholder=""
                    maxLength={2}
                    style={{
                      width: '40px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #6b6b6b',
                      color: '#ffffff',
                      fontSize: '1rem',
                      padding: '0.5rem 0',
                      outline: 'none',
                      textAlign: 'center'
                    }}
                  />
                  <span style={{ color: '#6b6b6b' }}>/</span>
                  <input 
                    type="text"
                    placeholder=""
                    maxLength={2}
                    style={{
                      width: '40px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #6b6b6b',
                      color: '#ffffff',
                      fontSize: '1rem',
                      padding: '0.5rem 0',
                      outline: 'none',
                      textAlign: 'center'
                    }}
                  />
                  <span style={{ color: '#6b6b6b' }}>/</span>
                  <input 
                    type="text"
                    placeholder=""
                    maxLength={4}
                    style={{
                      width: '60px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #6b6b6b',
                      color: '#ffffff',
                      fontSize: '1rem',
                      padding: '0.5rem 0',
                      outline: 'none',
                      textAlign: 'center'
                    }}
                  />
                </div>
              </div>
              
              {/* CVV */}
              <div style={{ flex: '0 0 auto' }}>
                <label style={{ 
                  display: 'block',
                  fontSize: '0.9rem',
                  color: '#b8b8b8',
                  marginBottom: '1rem',
                  fontWeight: '400'
                }}>CVV</label>
                <input 
                  type="text"
                  maxLength={3}
                  style={{
                    width: '60px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #6b6b6b',
                    color: '#ffffff',
                    fontSize: '1rem',
                    padding: '0.5rem 0',
                    outline: 'none',
                    textAlign: 'center'
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Botón Checkout */}
          <div style={{ marginTop: '4rem' }}>
            <button style={{
              width: '100%',
              backgroundColor: 'var(--color-accent)',
              color: '#2f3437',
              border: 'none',
              borderRadius: '8px',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
