import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = () => {
  const { handleSubmit, control, errors } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    fetch("http://localhost:5000/car", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast('added successfully');
          navigate("/");
        }
      });
  
    console.log(data);
    // You can perform any action with the form data here
  };
  

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h1 className="text-xl font-semibold mb-4">Add a Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <Controller
            name="image"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="border border-black rounded w-full p-2"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="border border-black rounded w-full p-2"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Category
          </label>
          <Controller
            name="category"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="border border-black rounded w-full p-2"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
            Brand Name
          </label>
          <Controller
            name="brandName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="border border-black rounded w-full p-2"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <Controller
            name="type"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select
                {...field}
                className="border border-black rounded w-full p-2"
              >
                <option value="">Select Type</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="headphone">Headphone</option>
                {/* Add more options as needed */}
              </select>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <Controller
            name="price"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                className="border border-black rounded w-full p-2"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shortDescription">
            Short Description
          </label>
          <Controller
            name="shortDescription"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                rows="4"
                className="border border-black rounded w-full p-2"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <Controller
            name="rating"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.1"
                className="border border-black rounded w-full p-2"
              />
            )}
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
        <ToastContainer />
    </div>
  );
};

export default AddProduct;
