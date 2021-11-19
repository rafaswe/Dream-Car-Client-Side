import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MySIngleOrder = (props) => {
    console.log(props.myorder)
    const { _id, customerName, email, phone, address, productImg, productName, productPrice, orderStatus } = props.myorder;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://haunted-eyeballs-16194.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to Delete? ');
        if (proceed) {
            const url = `https://evening-shore-57198.herokuapp.com//orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                        alert("data is deleted");
                    }
                })
        }
    }
    return (
        <Container>
            <div className="row gx-4 my-5 border border-3 p-4 rounded rounded-3 shadow-lg">
                <div className="col-lg-4 col-sm-12">
                    <h4>User's Information</h4>
                    <p>Name: {customerName}</p>
                    <p>Email: {email}</p>
                    <p>Address: {address}</p>
                    <p>Phone: {phone}</p>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <h4>Product Info</h4>
                    <div className="row">
                        <div className="col-sm-8">
                            <h6>Product's Name : {productName}</h6>
                            <p>Price : {productPrice}</p>
                            <p>Status: {orderStatus}</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={productImg || 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} className="img-fluid rounded rounded-3 shadow-lg" alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-sm-12 text-center">
                    <NavLink to="/myOrder">
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline-danger m-2">Delete</button>
                    </NavLink>
                </div>
            </div>
        </Container>
    );
};

export default MySIngleOrder;