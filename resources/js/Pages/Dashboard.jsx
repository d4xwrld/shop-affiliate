import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ProductDashboard() {
    const [products, setProducts] = useState([]);
    const [productForm, setProductForm] = useState({
        id: "",
        title: "",
        url_image: "",
        description: "",
        url: "",
    });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get("/products");
        setProducts(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (editingId) {
                response = await axios.put(
                    `/products/${editingId}`,
                    productForm
                );
            } else {
                response = await axios.post("/products", productForm);
            }

            if (response.status === 200 || response.status === 201) {
                Swal.fire(
                    "Sukses!",
                    "Produk berhasil ditambahkan/diperbarui",
                    "success"
                );
                setProductForm({
                    id: "",
                    title: "",
                    url_image: "",
                    description: "",
                    url: "",
                });
                setEditingId(null);
                fetchProducts();
            }
        } catch (error) {
            if (error.response) {
                Swal.fire(
                    "Gagal!",
                    `Error: ${error.response.status} ${error.response.data.message}`,
                    "error"
                );
            } else if (error.request) {
                Swal.fire("Gagal!", "Tidak ada respons dari server", "error");
            } else {
                Swal.fire(
                    "Gagal!",
                    "Terjadi kesalahan dalam pengaturan request",
                    "error"
                );
            }
        }
    };

    const handleEdit = (product) => {
        setProductForm({
            id: product.id,
            title: product.title,
            url_image: product.url_image,
            description: product.description,
            url: product.url,
        });
        setEditingId(product.id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/products/${id}`);
            Swal.fire("Dihapus!", "Produk berhasil dihapus.", "success");
            fetchProducts();
        } catch (error) {
            Swal.fire("Gagal!", "Produk gagal dihapus.", "error");
        }
    };

    const handleReset = () => {
        setProductForm({
            id: "",
            title: "",
            url_image: "",
            description: "",
            url: "",
        });
        setEditingId(null);
    };

    return (
        <div className="container mx-auto mt-10">
            <form
                onSubmit={handleSubmit}
                className="mb-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="id"
                    >
                        ID
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="id"
                        value={productForm.id}
                        onChange={handleInputChange}
                        placeholder="ID"
                        disabled
                    />
                    <span className="text-red-500">ID is auto-added</span>
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="title"
                        value={productForm.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="url_image"
                    >
                        Image URL
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="url_image"
                        value={productForm.url_image}
                        onChange={handleInputChange}
                        placeholder="Image URL"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="description"
                        value={productForm.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="url"
                    >
                        Product URL
                    </label>
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="url"
                        value={productForm.url}
                        onChange={handleInputChange}
                        placeholder="Product URL"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    {editingId ? "Perbarui" : "Tambah"}
                </button>
                <button
                    type="button"
                    onClick={handleReset}
                    className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Reset
                </button>
            </form>
            <div className="shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    URL
                                </th>
                                <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs">
                                        {product.id}
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 whitespace-normal text-xs">
                                        {product.title}
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs">
                                        <img
                                            src={product.url_image}
                                            alt="Product"
                                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                                        />
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs">
                                        {product.description}
                                    </td>
                                    <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-xs">
                                        <a
                                            href={product.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Link Produk
                                        </a>
                                    </td>
                                    <td className="flex px-2 sm:px-4 py-2 whitespace-nowrap text-xs">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => handleEdit(product)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() =>
                                                handleDelete(product.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductDashboard;
