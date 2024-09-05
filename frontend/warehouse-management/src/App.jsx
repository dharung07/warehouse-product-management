import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductList } from "./components/ProductList";
import { AddProduct } from "./components/AddProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* http://localhost:3000 */}
          <Route path="/" element={<ProductList />}></Route>

          {/* http://localhost:3000/products */}
          <Route path="/products" element={<ProductList />}></Route>

          {/* http://localhost:3000/add-product */}
          <Route path="/add-product" element={<AddProduct />}></Route>

          {/* http://localhost:3000/edit-product/:id */}
          <Route path="/edit-product/:id" element={<AddProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
