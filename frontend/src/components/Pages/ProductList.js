import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../JS/actions/productActions';
import { getProductsByFilter } from '../../JS/actions/filterActions'
import { Button, Col, Container, Form, FormControl, Row, Spinner } from 'react-bootstrap';
import Product from './Product';
import '../../App.css'

const ProductList = () => {
    const [text, setText] = useState('');
    const [category, setCategory] = useState([]);
	const categories =["Smartphone", "Laptop", "Game", "Accessories"];

    const productReducer = useSelector(state => state.productReducer)
    const {loadProd, products, error } = productReducer
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts());
        //eslint-disable-next-line
    },[dispatch])

    
    //search by name
    const handleSearch = e => {
		resetState();

		setText(e.target.value);

		dispatch(getProductsByFilter({ type: 'text', query: e.target.value }));
	}
    //search by categories
    const handleCategory = e => {
        resetState();

		const currentCategoryChecked = e.target.value;
		const allCategoriesChecked = [...category];
		const indexFound = allCategoriesChecked.indexOf(currentCategoryChecked);

		let updatedCategoryIds;
		if (indexFound === -1) {
			// add
			updatedCategoryIds = [...category, currentCategoryChecked];
			setCategory(updatedCategoryIds);
		} else {
			// remove
			updatedCategoryIds = [...category];
			updatedCategoryIds.splice(indexFound, 1);
			setCategory(updatedCategoryIds);
		}

		dispatch(
			getProductsByFilter({ type: 'category', query: updatedCategoryIds })
		);
    } 

    const resetState = () => {
		setText('');
		setCategory([]);
	};

    return (
        <section>
        <Container>
        <Row>
            <div className='text-muted mb-2 mt-3'>
                    Filters <span className='fas fa-sliders-h'></span>
                </div>

            <Col md={9}>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            name='search'
                            value={text}
                            onChange={handleSearch}
                        />
                        <Button 
                            variant="outline-success"
                            type='submit'
                            disabled={true}
                        >
                            Search
                        </Button>
                    </Form>
                
                </Col>
                <Col md={3}>
                  Categories:  
                <div className='border-top border-bottom bg-light p-3'>
                {categories &&
							categories.map(c => (
                            <div key={categories.indexOf(c)} className='form-check'>
                                <input
                                    className='form-check-input'
                                    type='checkbox'
                                    name='category'
                                    value={c}
                                    id='flexCheckChecked'
                                    onChange={handleCategory}
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='flexCheckChecked'
                                >
                                    {c}
                                </label>
                            </div>
                        ))}
                </div>
            </Col>
            </Row>
            <Row>
            <Col>
            <div style={{display: "flex", alignContent: "center", justifyContent: "space-evenly" , flexWrap: "wrap", marginTop: 60, marginBottom: 40}}>
            {loadProd? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : products.length === 0?  (             
                 <h2> No Products in Database </h2>
            ) : error? (
                <h2> {error} </h2> 
            ) :  (
                //products
                    // .filter((prod) => 
                    // prod.nameProd.toLowerCase().trim().includes(filterName.toLowerCase().trim()))
                    products.map(product => 
                        <Product product={product} key={product._id} />
            ))}
            
      
            </div>
            </Col>
        </Row>
        </Container>
    </section>
    );
};

export default ProductList;