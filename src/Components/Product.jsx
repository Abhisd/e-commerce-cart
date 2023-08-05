
import axios from "axios"
import { useEffect, useState } from "react";
export default function Product(){
    let [products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
        //console.log(res.data);
        setProducts(res.data);
    })
    },[])
    return(
        <div className="productsWrapper">
        {
            products.map((product)=>{
                return(
                    <div key={product.id} className="card">
                    <img src={product.image} alt="" />
                    <h6>{product.title}</h6>
                    <h5>{product.price*78} ₹</h5>
                    <button className="btn">Add to Cart</button>
                    </div>
                )
            })
        }
        </div>
    )
}