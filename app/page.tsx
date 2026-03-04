export default function Home() {
  return (
    <div className="flex min-h-screen">
      {/* Columna izquierda - 70% */}
      <div className="flex items-center justify-center p-6 md:p-10" style={{ backgroundColor: '#f5f6f8', width: '70%' }}>
        <div className="w-full">
          <h1 className="text-2xl">Shopping Cart Content</h1>
          {/* Contenido del carrito irá aquí */}
        </div>
      </div>

      {/* Columna derecha - 30% - Sidebar fijo */}
      <div className="fixed right-0 top-0 flex items-center justify-center p-6 md:p-10" 
           style={{ 
             width: '30%', 
             minHeight: '100vh',
             background: 'linear-gradient(135deg, #4a4a4a 0%, #3d3530 100%)'
           }}>
        <div className="w-full">
          <h2 className="text-xl text-white">Card Details</h2>
          {/* Contenido del panel de pago irá aquí */}
        </div>
      </div>
    </div>
  );
}
