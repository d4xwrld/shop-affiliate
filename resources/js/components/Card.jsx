import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-sm w-full md:w-1/4 rounded-md overflow-hidden shadow-lg bg-white border border-gray-200 p-2 my-0 md:my-3">
            <img src={product.url_image} alt={product.img} className="w-full h-64 object-cover rounded-md" />{" "}
            {/* Pastikan properti ini sesuai */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-1">{product.title}</div>{" "}
                {/* Pastikan properti ini sesuai */}
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
