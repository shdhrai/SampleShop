import React from "react";

const SalesStatistics = () => {
    return (
        <div className="col-xl-6 col-lg-12">
            <div className="card mb-4 shadow-sm">
                <article className="card-body">
                    <h5 className="card-title">Sale Statistics</h5>
                    <img 
                        style = {{ width: "100%", height: "350px", objectFit: "contain"}}
                        src = "/images/SaleStats.jpg"
                        alt ="Sale Stats"
                    />
                </article>
            </div>
        </div>
    );
};

export default SalesStatistics;