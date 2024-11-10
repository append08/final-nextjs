import React, { useState, useEffect } from 'react';

export default function SearchBar() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Fetch products on component mount
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Filter products whenever the searchTerm changes
    useEffect(() => {
        const results = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(results);
    }, [searchTerm, products]);

    return (
        <div style={styles.container}>
            <h1>Fake Store</h1>
            <p>Welcome to the Fake Store!</p>
            <p>Here you'll find a variety of products from the fakestore API.</p>
            
            <input
                type="text"
                placeholder="Search for a product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchBar}
            />
            
            <div style={styles.productGrid}>
                {filteredProducts.map((product) => (
                    <div key={product.id} style={styles.productCard}>
                        <img src={product.image} alt={product.title} style={styles.productImage} />
                        <h2 style={styles.productPrice}>${product.price.toFixed(2)}</h2>
                        <p style={styles.productTitle}>{product.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    searchBar: {
        width: '100%',
        maxWidth: '400px',
        padding: '10px',
        margin: '20px 0',
        fontSize: '1rem',
        border: '1px solid #ddd',
        borderRadius: '5px',
    },
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginTop: '20px',
    },
    productCard: {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    productImage: {
        width: '100px',
        height: 'auto',
        marginBottom: '10px',
    },
    productPrice: {
        fontSize: '1.2rem',
        color: '#333',
        margin: '0',
    },
    productTitle: {
        fontSize: '0.9rem',
        color: '#777',
        margin: '5px 0 0',
    },
};
