import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import CategoryFilter from './components/CategoryFilter';
import { products, categories } from './data/products';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Filtrar por categoria e busca
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App">
      <Header 
        cartCount={cartItemsCount} 
        onCartClick={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      
      <main style={mainStyle}>
        <section style={heroStyle}>
          <h1 style={heroTitleStyle}>Encontre os Melhores Produtos</h1>
          <p style={heroSubtitleStyle}>Tecnologia, moda e muito mais com os melhores preços</p>
        </section>
        
        <section style={productsSection}>
          <h2 style={sectionTitleStyle}>Nosso Catálogo</h2>
          
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          {filteredProducts.length === 0 ? (
            <div style={noResultsStyle}>
              <p>Nenhum produto encontrado</p>
            </div>
          ) : (
            <div style={productsGridStyle}>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

const mainStyle = {
  minHeight: '100vh'
};

const heroStyle = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: '80px 20px',
  textAlign: 'center'
};

const heroTitleStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  marginBottom: '1rem'
};

const heroSubtitleStyle = {
  fontSize: '1.2rem',
  opacity: 0.9
};

const productsSection = {
  maxWidth: '1200px',
  margin: '60px auto',
  padding: '0 20px'
};

const sectionTitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#1e293b',
  marginBottom: '40px',
  textAlign: 'center'
};

const productsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '24px'
};

const noResultsStyle = {
  textAlign: 'center',
  padding: '40px',
  color: '#64748b',
  fontSize: '18px'
};

export default App;