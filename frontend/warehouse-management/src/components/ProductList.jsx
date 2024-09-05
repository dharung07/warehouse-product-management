import React, { useEffect, useState } from "react"
import { deleteProduct, listProduct } from "../ProductService";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate, useParams } from "react-router-dom";

export const ProductList = () => {
    const navigator = useNavigate();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = () => {
        listProduct().then((response) => {
            setProductList(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }

    const handleAddProductButton = () => navigator('/add-product');

    const handleUpdateButton = (productId) => navigator(`/edit-product/${productId}`);
    
    const handleDeleteButton = (productId) => {
        deleteProduct(productId).then((response) => {
            getAllProducts();
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <div className="my-4 d-flex justify-content-between align-items-center">
                <h2 className="text-primary">Product List</h2>
                <button className="btn btn-primary px-4" onClick={handleAddProductButton}>
                    <span className="bi bi-database-add"></span>
                    &nbsp; Add product
                </button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Added Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map(product =>
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.addedDate}</td>
                                <td>
                                    <div className="d-flex flex-row justify-content-around">
                                        <button className="btn btn-secondary" onClick={() => handleUpdateButton(product.id)}>
                                            Update
                                        </button>
                                        <button className="btn btn-danger" onClick={() => handleDeleteButton(product.id)}>
                                            <i class="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
