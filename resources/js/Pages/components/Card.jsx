import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ product, onViewProduct }) => {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg bg-white border border-gray-200 p-2 my-0 md:my-3 z-10">
      <img src={product.image} alt={product.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4">
        <Link
          to={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onViewProduct(product)}
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
