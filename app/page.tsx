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
          
          {/* Contenido del carrito irá aquí */}
          
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
      <div className="fixed right-0 top-0 flex items-center justify-center p-6 md:p-10" 
           style={{ 
             width: '30%', 
             minHeight: '100vh',
             background: 'linear-gradient(135deg, var(--color-panel-dark-from) 0%, var(--color-panel-dark-to) 100%)'
           }}>
        <div className="w-full">
          <h2 className="text-subtitle" style={{ color: 'var(--color-accent)' }}>Card Details</h2>
          {/* Contenido del panel de pago irá aquí */}
        </div>
      </div>
    </div>
  );
}
