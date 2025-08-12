import { ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img 
          src={product.image} 
          alt={product.name}
          style={imageStyle}
        />
        <button style={favoriteButtonStyle}>
          <Heart size={18} />
        </button>
      </div>
      
      <div style={contentStyle}>
        <span style={categoryStyle}>{product.category}</span>
        <h3 style={titleStyle}>{product.name}</h3>
        <p style={descriptionStyle}>{product.description}</p>
        
        <div style={footerStyle}>
          <span style={priceStyle}>
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          
          <button 
            style={addToCartStyle}
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart size={16} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  border: '1px solid #e2e8f0'
};

const imageContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '200px',
  overflow: 'hidden'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease'
};

const favoriteButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'rgba(255, 255, 255, 0.9)',
  border: 'none',
  borderRadius: '50%',
  width: '36px',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const contentStyle = {
  padding: '16px'
};

const categoryStyle = {
  fontSize: '12px',
  color: '#64748b',
  textTransform: 'uppercase',
  fontWeight: '500',
  letterSpacing: '0.5px'
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: '600',
  margin: '8px 0',
  color: '#1e293b'
};

const descriptionStyle = {
  fontSize: '14px',
  color: '#64748b',
  lineHeight: '1.4',
  marginBottom: '16px'
};

const footerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const priceStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#059669'
};

const addToCartStyle = {
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  padding: '8px 12px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'background-color 0.2s'
};

export default ProductCard;