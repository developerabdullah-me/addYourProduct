import React from 'react';
import ProductList from '../../Componet/ProductList/ProductList';

const Home = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Add your favarite Product</h1>
            <ProductList/>
        </div>
    );
};

export default Home;