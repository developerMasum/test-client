import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    
    return (
        <div className="product-details">
            <div className="product-image">
                <img src={loadedData.image} alt={loadedData.name} />
            </div>
            <div className="product-info">
                <h2>{loadedData.name}</h2>
                <p><strong>Brand:</strong> {loadedData.brandName}</p>
                <p><strong>Type:</strong> {loadedData.type}</p>
                <p><strong>Price:</strong> ${loadedData.price}</p>
                <p><strong>Category:</strong> {loadedData.category}</p>
                <p><strong>Rating:</strong> {loadedData.rating}/5</p>
            </div>
        </div>
    );
};

export default ProductDetails;
