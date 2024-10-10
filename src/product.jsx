import React from "react";
import "./productCard.css";
function Product({title, price}) {
    return (
        <>
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
        </div>
            {/* <div>
                <h1>Product Title</h1>
                <h3>Production Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsum minus, aperiam ex, pariatur ratione sunt modi iusto provident sit, at necessitatibus hic! Nam reprehenderit officiis, vitae facilis corporis accusantium.</p>
                <h4>Price: </h4>
            </div> */}
        </>
    );
}

export default Product;