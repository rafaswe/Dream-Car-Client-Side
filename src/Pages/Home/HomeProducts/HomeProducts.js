import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleHomeProduct from './SingleHomeProduct';

const HomeProducts = () => {
    const [homeProduct, setHomeProduct] = useState([]);
    useEffect(() => {
        fetch('https://evening-shore-57198.herokuapp.com//homeProduct')
            .then(res => res.json())
            .then(data => setHomeProduct(data))
    }, []);
    return (
        <Container className="my-5">
            <h2 className="text-center text-danger mb-3">Our Services</h2>
            <hr className="mb-4" />
            <div className="row row-cols-1 row-cols-md-3 g-4 px-3">
                {
                    homeProduct.map(singleHomeProduct => <SingleHomeProduct singleHomeProduct={singleHomeProduct} key={singleHomeProduct._id}></SingleHomeProduct>)
                }
            </div>

        </Container>
    );
};

export default HomeProducts;