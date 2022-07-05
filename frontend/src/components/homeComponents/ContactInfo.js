import React from "react";

const ContactInfo = () => {
    return (
        <div className="contactInfo container">
            <div className="row">
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h5> Call Us 24*7</h5>
                        <p>+91 9876543210</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h5> Headquarter</h5>
                        <p>Delhi</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 contact-Box">
                    <div className="box-info">
                        <div className="info-image">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h5> Email</h5>
                        <p>ShopForHome@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;