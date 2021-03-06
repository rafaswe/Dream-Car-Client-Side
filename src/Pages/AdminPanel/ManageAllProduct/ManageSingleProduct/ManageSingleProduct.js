import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const ManageSingleProduct = (props) => {
    const { _id, name, img, description, price } = props.product;
    const [manageProduct, setManageProduct] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to Delete? ');
        if (proceed) {
            const url = `https://evening-shore-57198.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = manageProduct.filter(product => product._id !== id);
                        setManageProduct(remaining);
                        alert("data is deleted");
                    }
                })
        }
    }
    return (
        <Container className="shadow-lg my-5 px-4 rounded rounded-3">
            <div className="row g-3 align-items-center">
                <div className="col-sm-8">
                    <h6 className="text-danger">Product's Name : {name}</h6>
                    <p className="text-muted">{description}</p>
                    <p className="text-danger">Price : {price}</p>
                </div>
                <div className="col-sm-4">
                    <img src={img || 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} className="img-fluid rounded rounded-3 shadow-lg" alt="" />
                </div>
            </div>
            <div className="col-sm-12 text-center py-3">
                <button onClick={() => handleDelete(_id)} className="btn btn-outline-danger m-2">Delete</button>
            </div>
        </Container>
    );
};

export default ManageSingleProduct;