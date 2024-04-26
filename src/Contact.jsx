import React from "react";

const Contact = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className="row">
                        <h2 className="headborder text-center my-4 p-3">Get in touch with us</h2>
                            <div className="col-md-8">
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your full name" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
                                </div>
                                <div className="float-end">
                                    <button className="btn btn-outline-primary">Submit</button>
                                </div>
                            </div>

                            <div className="col-md-4 mt-3">
                                <h3 className="contact">Contact Us</h3>
                                <ul class="contact-info">
                                    <li><label>Address :</label> F-75, Mangalam City, Kalwar Road, Jhotwara Jaipur (Rajasthan) - 302012 </li>
                                    <li><label>Phone :</label> +91 9461630681, 9079103545 <br /> +91 9461630681, 9079103545 </li>
                                    <li><label>Email : </label> sn.pksharma@gmail.com </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </>
    )
};

export default Contact;
