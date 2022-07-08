import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import EditProductMain from "./../components/products/EditproductMain";
import products from "./../data/Products";
import { useParams } from "react-router-dom";

const ProductEditScreen = () => {
    const params=useParams();
    const productId = products.find((p) => p._id === params.id);
    return (
        <>
            <Sidebar />
            <main className="main-wrap">
                <Header />
                <EditProductMain productId={productId} />
            </main>
        </>
    );
};

export default ProductEditScreen;