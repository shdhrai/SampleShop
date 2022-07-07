import React from "react";

const Login = () => {
    return (
        <>
        <div
            className="card shadow mx-auto"
            style={{maxWidth: "380px", marginTop: "100px"}}
        >
            <div className="card-body">
                <h4 className="card-title mb-4 text-center">Sign In</h4>
                <form>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="Email"
                            type = "email"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="Password"
                            type = "password"
                        />
                    </div>
                    <div className="mb-3">
                    <button className="btn btn-success" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;