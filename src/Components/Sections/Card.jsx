
import { Link } from "react-router-dom";

const ProductCard = ({ cardData }) => {
  console.log(cardData._id);
  
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={cardData.picture} alt={cardData.title} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{cardData.title}</h2>
        <p className="text-gray-500 text-base">{cardData.description}</p>
        <p className="context-lg font-bold mt-2">Price: ${cardData.price}</p>
      </div>
      <div className="px-6 py-4">
       <Link to={`/details/${cardData?._id}`}>
       
       <button
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full" >
          
          View Details
        </button>
       
       </Link>
      </div>
    </div>
  );
};

export default ProductCard;
