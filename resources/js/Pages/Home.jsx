import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import ProductCard from "../components/Card";
import { BrowserRouter as Router } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("/api/products")
            .then((response) => {
                console.log(response.data); // Tambahkan ini untuk melihat data yang diterima
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <Router basename="/">
            <div className="h-screen">
                <Nav />
                <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 pt-16 md:pt-0">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </Router>
    );
};

export default Home;
