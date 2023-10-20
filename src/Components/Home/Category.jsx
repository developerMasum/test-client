import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

 

const Collection = () => {
    const [collectionData,setCollectionData] = useState([])
useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:5000/allcar")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Store the fetched data in the state
        setCollectionData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

    return (
      <div className=" mt-8  mb-4 px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {collectionData?.map((collection, index) => (
          <div key={index} className=" rounded shadow-md  group overflow-hidden">
            <Link to={`/category/${collection.category}`} className="relative group-hover:scale-105 cursor-pointer transform transition-transform">
              <div className="relative">
                <img
                  src={collection.picture}
                  alt={collection.title}
                  className="w-full h-48 object-cover rounded hover:bg-slate-700 group-hover:bg-opacity-50 transition-background"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-slate-700 opacity-0 group-hover:opacity-50 transition-opacity rounded"></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  
  

export default Collection;
