import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createProduct, getProduct, updateProduct } from '../ProductService';

export const AddProduct = () => {
    const navigator = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [addedDate, setAddedDate] = useState('');

    function saveProduct(event) {
        event.preventDefault();

        if (validateForm()) {
            const product = { name, category, description, price, quantity, addedDate };

            if (id) {
                updateProduct(id, product).then((response) => {
                    console.log(response.data);
                    navigator('/products')
                }).catch((error) => {
                    console.error(error);
                })
            } else {
                createProduct(product).then((response) => {
                    console.log(response.data);
                    navigator('/products');
                }).catch((error) => {
                    console.error(error);
                })
            }
        } else {
            console.log(errors);
        }
    }

    useEffect(() => {
        if (id) {
            getProduct(id).then((response) => {
                setName(String(response.data.name));
                setCategory(String(response.data.category));
                setDescription(String(response.data.description));
                setPrice(String(response.data.price));
                setQuantity(String(response.data.quantity));
                setAddedDate(String(response.data.addedDate));
            }).catch((error) => {
                console.error(error);
            })
        }
    }, [id])

    const [errors, setErrors] = useState({
        name: '',
        category: '',
        description: '',
        price: '',
        quantity: '',
        addedDate: ''
    })

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

        if (name.trim()) {
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Name is required';
            valid = false;
        }

        if (category.trim()) {
            errorsCopy.category = '';
        } else {
            errorsCopy.category = "Category is required";
            valid = false;
        }

        if (description.trim()) {
            errorsCopy.description = '';
        } else {
            errorsCopy.description = 'Description is required';
            valid = false;
        }

        if (price.trim()) {
            errorsCopy.price = '';
        } else {
            errorsCopy.price = 'Price is required';
            valid = false;
        }

        if (quantity.trim()) {
            errorsCopy.quantity = '';
        } else {
            errorsCopy.quantity = 'Quantity is required';
            valid = false;
        }

        if (addedDate.trim()) {
            errorsCopy.addedDate = '';
        } else {
            errorsCopy.addedDate = 'Date is required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid;
    }

    function PageTitle() {
        if (id) {
            return <h2 className='text-center text-primary'>Update Product</h2>
        } else {
            return <h2 className='text-center text-primary'>Add Product</h2>
        }
    }

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div className='card w-50 p-3 m-3'>
                {PageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-1'>
                            <label className='form-label'>Name : </label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Enter name of product'
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                        </div>
                        <div className='form-group mb-1'>
                            <label className='form-label'>Category : </label>
                            <input
                                type='text'
                                name='category'
                                placeholder='Enter category of product'
                                className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            {errors.category && <div className='invalid-feedback'>{errors.category}</div>}
                        </div>
                        <div className='form-group mb-1'>
                            <label className='form-label'>Description: </label>
                            <textarea
                                name='description'
                                placeholder='Enter description of product'
                                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                        </div>
                        <div className='form-group mb-1'>
                            <label className='form-label'>Price: </label>
                            <input
                                type='number'
                                name='price'
                                placeholder='Enter price of product'
                                className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            {errors.price && <div className='invalid-feedback'>{errors.price}</div>}
                        </div>
                        <div className='form-group mb-1'>
                            <label className='form-label'>Quantity: </label>
                            <input
                                type='number'
                                name='quantity'
                                placeholder='Enter quantity of product'
                                className={`form-control ${errors.quantity ? 'is-invalid' : ''}`}
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                            {errors.quantity && <div className='invalid-feedback'>{errors.quantity}</div>}
                        </div>
                        <div className='form-group mb-4'>
                            <label className='form-label'>Added Date: </label>
                            <input
                                type='date'
                                name='addedDate'
                                className={`form-control ${errors.addedDate ? 'is-invalid' : ''}`}
                                value={addedDate}
                                onChange={(e) => setAddedDate(e.target.value)}
                            />
                            {errors.addedDate && <div className='invalid-feedback'>{errors.addedDate}</div>}
                        </div>
                        <button className="btn btn-primary px-4" onClick={saveProduct}>Save Product</button>
                    </form>
                </div>
            </div>
        </div>

    )
}
