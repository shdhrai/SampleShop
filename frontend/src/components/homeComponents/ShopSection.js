import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import CategorySection from "./CategorySection";
import Loading from "./../LoadingError/Loading";
import Message from "./../LoadingError/Error";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { listProduct } from "./../../Redux/Actions/ProductActions";
import Pagination from "./Pagination.js";

const ShopSection = () => {
  // const { keyword, pageNumber } = props;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            {/* <div className="sidebar col-lg-3 col-md-3">
              <CategorySection />
            </div> */}

            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <Loading />
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6 my-3"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3>${product.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Pagination */}
                    {/* <Pagination
                      pages={pages}
                      page={page}
                      keyword={keyword ? keyword : ""}
                    /> */}
                    <Pagination/>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
