import { X, Minus, Plus, Trash2 } from 'lucide-react';

const Cart = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <>
      <div style={overlayStyle} onClick={onClose}></div>
      <div style={cartStyle}>
        <div style={headerStyle}>
          <h2>Meu Carrinho</h2>
          <button style={closeButtonStyle} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div style={contentStyle}>
          {cart.length === 0 ? (
            <div style={emptyStyle}>
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <>
              <div style={itemsStyle}>
                {cart.map(item => (
                  <div key={item.id} style={itemStyle}>
                    <img src={item.image} alt={item.name} style={itemImageStyle} />
                    
                    <div style={itemInfoStyle}>
                      <h4 style={itemNameStyle}>{item.name}</h4>
                      <p style={itemPriceStyle}>R$ {item.price.toFixed(2).replace('.', ',')}</p>
                      
                      <div style={quantityControlStyle}>
                        <button 
                          style={quantityButtonStyle}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={16} />
                        </button>
                        <span style={quantityStyle}>{item.quantity}</span>
                        <button 
                          style={quantityButtonStyle}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <button 
                      style={removeButtonStyle}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
              
              <div style={footerStyle}>
                <div style={totalStyle}>
                  <strong>Total: R$ {total.toFixed(2).replace('.', ',')}</strong>
                </div>
                <button style={checkoutButtonStyle}>
                  Finalizar Compra
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

// Estilos
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000
};

const cartStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '400px',
  height: '100vh',
  backgroundColor: 'white',
  zIndex: 1001,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)'
};

const headerStyle = {
  padding: '20px',
  borderBottom: '1px solid #e2e8f0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const closeButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px'
};

const contentStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
};

const emptyStyle = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#64748b'
};

const itemsStyle = {
  flex: 1,
  overflowY: 'auto',
  padding: '20px'
};

const itemStyle = {
  display: 'flex',
  gap: '12px',
  padding: '16px 0',
  borderBottom: '1px solid #f1f5f9'
};

const itemImageStyle = {
  width: '60px',
  height: '60px',
  objectFit: 'cover',
  borderRadius: '6px'
};

const itemInfoStyle = {
  flex: 1
};

const itemNameStyle = {
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '4px'
};

const itemPriceStyle = {
  fontSize: '14px',
  color: '#059669',
  fontWeight: '500',
  marginBottom: '8px'
};

const quantityControlStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const quantityButtonStyle = {
  width: '24px',
  height: '24px',
  border: '1px solid #d1d5db',
  borderRadius: '4px',
  background: 'white',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const quantityStyle = {
  minWidth: '20px',
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: '500'
};

const removeButtonStyle = {
  background: 'none',
  border: 'none',
  color: '#ef4444',
  cursor: 'pointer',
  padding: '4px'
};

const footerStyle = {
  padding: '20px',
  borderTop: '1px solid #e2e8f0'
};

const totalStyle = {
  fontSize: '18px',
  marginBottom: '16px',
  textAlign: 'center'
};

const checkoutButtonStyle = {
  width: '100%',
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '12px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer'
};

export default Cart;