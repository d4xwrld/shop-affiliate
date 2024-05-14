import React from "react";
import Nav from "../components/Nav";
import ProductCard from "../components/Card";
import { BrowserRouter as Router } from "react-router-dom";

const Home = () => {
    return (
        <Router basename="/">
            <div className="h-screen">
                <Nav />
                <div className="flex flex-col md:flex-row md:justify-center items-center gap-4 pt-16 md:pt-0">
                    <ProductCard
                        product={{
                            name: "Laptop Asus TUF Gaming DASH F15",
                            image: "https://dlcdnwebimgs.asus.com/gain/3a36a12f-9a0d-488c-bef3-05431f041b96/",
                            description: "pengen ini...",
                            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.asus.com%2Fid%2Flaptops%2Ffor-gaming%2Ftuf-gaming%2Fasus-tuf-gaming-f15-2023%2F&psig=AOvVaw1tVmaQh0k14IX8-lcOrcQq&ust=1715170983644000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCLCWxtzD-4UDFQAAAAAdAAAAABAE",
                        }}
                    />
                    <ProductCard
                        product={{
                            name: "Laptop Asus TUF Gaming DASH F15",
                            image: "https://dlcdnwebimgs.asus.com/gain/3a36a12f-9a0d-488c-bef3-05431f041b96/",
                            description: "pengen ini...",
                            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.asus.com%2Fid%2Flaptops%2Ffor-gaming%2Ftuf-gaming%2Fasus-tuf-gaming-f15-2023%2F&psig=AOvVaw1tVmaQh0k14IX8-lcOrcQq&ust=1715170983644000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCLCWxtzD-4UDFQAAAAAdAAAAABAE",
                        }}
                    />
                    <ProductCard
                        product={{
                            name: "Laptop Asus TUF Gaming DASH F15",
                            image: "https://dlcdnwebimgs.asus.com/gain/3a36a12f-9a0d-488c-bef3-05431f041b96/",
                            description: "pengen ini...",
                            url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.asus.com%2Fid%2Flaptops%2Ffor-gaming%2Ftuf-gaming%2Fasus-tuf-gaming-f15-2023%2F&psig=AOvVaw1tVmaQh0k14IX8-lcOrcQq&ust=1715170983644000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCLCWxtzD-4UDFQAAAAAdAAAAABAE",
                        }}
                    />
                </div>
            </div>
        </Router>
    );
};

export default Home;
