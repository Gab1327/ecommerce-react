import { ShoppingCart, Search, User } from 'lucide-react';

const Header = ({ cartCount = 0, onCartClick, searchTerm, onSearchChange }) => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <h1>TechStore</h1>
        </div>
        
        <div style={searchStyle}>
          <Search size={20} style={{ color: '#64748b' }} />
          <input 
            type="text" 
            placeholder="Buscar produtos..." 
            style={searchInputStyle}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <div style={actionsStyle}>
          <button style={buttonStyle}>
            <User size={20} />
          </button>
          
          <button style={cartButtonStyle} onClick={onCartClick}>
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span style={badgeStyle}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

// Estilos permanecem iguais
const headerStyle = {
  backgroundColor: '#1e293b',
  color: 'white',
  padding: '1rem 0',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem'
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#3b82f6'
};

const searchStyle = {
  flex: 1,
  maxWidth: '400px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '0 12px'
};

const searchInputStyle = {
  width: '100%',
  padding: '12px 12px 12px 8px',
  border: 'none',
  outline: 'none',
  fontSize: '14px'
};

const actionsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
};

const buttonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  padding: '8px',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  transition: 'background-color 0.2s'
};

const cartButtonStyle = {
  ...buttonStyle,
  position: 'relative'
};

const badgeStyle = {
  position: 'absolute',
  top: '-5px',
  right: '-5px',
  backgroundColor: '#ef4444',
  color: 'white',
  borderRadius: '50%',
  width: '20px',
  height: '20px',
  fontSize: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default Header;