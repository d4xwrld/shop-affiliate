import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import "../../css/output.css";
import ProductCard from "../components/Card";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const setSearchTermWithLog = (newSearchTerm) => {
        console.log("Updating search term to:", newSearchTerm);
        setSearchTerm(newSearchTerm);
    };

    useEffect(() => {
        axios
            .get("/api/products")
            .then((response) => {
                console.log("Data produk diterima:", response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    useEffect(() => {
        console.log("Current Search Term:", searchTerm); // Debugging
    }, [searchTerm]);

    const filteredProducts = searchTerm
        ? products.filter(
              (product) =>
                  product.title &&
                  product.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : products;

    console.log("Filtered Products:", filteredProducts); // Debugging

    return (
        <Router basename="/">
            <div className="h-screen">
                <Nav
                    onSearchChange={setSearchTermWithLog}
                    searchTerm={searchTerm}
                />
                <Sidebar />
                <div
                    className="flex flex-wrap justify-start items-center gap-4 pt-16 md:pt-0 ml-0 md:ml-72"
                    style={{ maxWidth: "4xl" }}
                >
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </Router>
    );
};

export default Home;
