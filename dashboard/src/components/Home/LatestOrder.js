import React from "react";
import { Link } from "react-router-dom";

const LatestOrder = () => {
    return (
        <div className="card-body">
            <h5 className="card-title">Latest Orders</h5>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <b>User</b>
                            </td>
                            <td>user@shopforhome.com</td>
                            <td>₹300</td>
                            <td>
                                <span className="badge rounded-pill alert-success">
                                    Paid at today at 10:00 AM
                                </span>
                            </td>
                            <td>Today at 10:00</td>
                            <td className="d-flex justify-content-end align-item-center">
                                <Link to={`/order`} className="text-success">
                                    <i className="fas fa-eye"></i>
                                </Link>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                <b>User</b>
                            </td>
                            <td>user2@shopforhome.com</td>
                            <td>₹200</td>
                            <td>
                                <span className="badge rounded-pill alert-danger">
                                    Created today at 11:00 AM
                                </span>
                            </td>
                            <td>Today at 11:00</td>
                            <td className="d-flex justify-content-end align-item-center">
                                <Link to={`/order`} className="text-success">
                                    <i className="fas fa-eye"></i>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LatestOrder;