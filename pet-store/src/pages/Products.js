import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient.js';
import { Link } from 'react-router-dom';
const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*')

            if (error) {
                console.error("Ошибка получения данных", error);
            }
            else {
                setProducts(data);
            }
        };

        fetchProducts();

    }, []);
    
    return(
        <div className="container">
            <ul style={{display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
                {products.map((product) => (
                    <li className="card" key={product.id} style={{display:'flex', alignItems:'center', flexDirection: 'column', boxShadow: '10px 5px  5px'}} >
                        <img src={product.image_Product} alt='product.name' style={{width: '275px', height:'160px',}}></img>
                        <div className="card-body">
                            <h2>{product.name}</h2>
                            <p style={{ fontStyle: 'italic'}}>{product.desc}</p>
                            <p>Цена: {product.price}</p>
                            <p>Количество: {product.quantity}</p>
                            <button  class='btn-new' style={{textAlign: 'center', width: '70px', height:'45px', padding: '3px', margin: '7px', marginTop: "0px", }}><Link style={{ textDecoration: 'none', color: 'white'}} to="/">Купить</Link></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>        
    );
};

export default Products;