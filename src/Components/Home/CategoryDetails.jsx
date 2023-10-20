import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { useEffect, useState } from "react";
import ProductCard from "../Sections/Card";

const CategoryDetails = () => {
  const [data, setData] = useState([]);
  const {id}  = useParams();
//   console.log(id);
  const category = id;
  console.log(category);

  useEffect(() => {
    // Make a fetch request to get data from http://localhost:5000/details
    fetch("http://localhost:5000/details")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData);
        setData(responseData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const filteredData = data.filter((d) => d.category === category);
  console.log(filteredData);

  return (
    <div>
      <Carousel />
      {/* here will show some product cards */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {filteredData.map((card, index) => (
          <ProductCard key={card._id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
