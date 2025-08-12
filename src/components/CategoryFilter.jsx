const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Categorias</h3>
      <div style={filtersStyle}>
        {categories.map(category => (
          <button
            key={category.id}
            style={{
              ...filterButtonStyle,
              ...(selectedCategory === category.id ? activeFilterStyle : {})
            }}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  marginBottom: '40px'
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '16px',
  color: '#1e293b'
};

const filtersStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px'
};

const filterButtonStyle = {
  padding: '8px 16px',
  border: '2px solid #e2e8f0',
  borderRadius: '20px',
  backgroundColor: 'white',
  color: '#64748b',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const activeFilterStyle = {
  backgroundColor: '#3b82f6',
  color: 'white',
  borderColor: '#3b82f6'
};

export default CategoryFilter;