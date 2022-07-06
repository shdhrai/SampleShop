import React from 'react';
import Header from '../components/Header';
import Rating from '../components/homeComponents/Rating';
import { Link } from 'react-router-dom';
import Message from '../components/LoadingError/Error';
import products from '../data/Products';

export default function SingleProduct() {
    const product=products.find((p)=>p._id===matchMedia.params.id);
  return (
    <>
      <Header/>
      <div className="container single-product">
        <div className="row">
            <div className="col-md-6">
                <div className="single-image">
                    <img src={product.image} alt={product.name} srcset="" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="product-dtl">
                    <div className="product-info">
                        <div className="product-name">
                            {product.name}
                        </div>
                        <p>{product.description}</p>
                        <div className="product-count col-lg-7">
                            <div className="flex-box d-flex justify-content-between align-items-center">
                                <h6>Price</h6>
                                <span>${product.price}</span>
                            </div>
                            <div className="flex-box d-flex justify-content-between align-items-center">
                                <h6>Status</h6>
                                {product.countInStock>0?(
                                    <span>In Stock</span>
                                ):(
                                    <span>Unavailable</span>
                                )}
                            </div>
                            <div className="flex-box d-flex justify-content-between align-items-center">
                                <h6>Reviews</h6>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                            </div>
                            {product.countInStock>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
