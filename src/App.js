import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";
import { useEffect, useState } from "react";
import {Button} from "react-bootstrap";
import LayoutWebsite from './layout/LayoutWebsite';
import Products from './pages/products';
import { create, list, remove, update } from './api/productAPI';
import ProductDetail from './pages/products/ProductDetail';
import LayoutAdmin from './layout/LayoutAdmin';
import AminProducts from './pages/admin/products';
import AddProduct from './pages/admin/products/AddProduct';
import UpdateProduct from './pages/admin/products/UpdateProduct';
import AdminCategory from './pages/admin/categories';
import { listCategory, removeCategory } from './api/categoriesAPI';
import PrivateAdmin from './components/PrivateAdmin';
import Signup from './pages/products/Signup';
import Signin from './pages/products/Signin';
function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const {data} = await list();
    setProducts(data);
    
  }
  useEffect( () => {
    getProducts()
   
  }, []);
  

  const [category,setCategory]= useState([]);

  const getCategory = async () =>{
    const categoryData = await listCategory();
    setCategory(categoryData.data);
   

  }
  useEffect( () =>{
    getCategory()
  },[]);
///* Product*//////
  const handleRemoveProduct = async (id) => {
    const confirm = window.confirm("Are you sure to remove this product.")
    if(confirm){
      const {data} = await remove(id);
      const newProducts = products.filter(item => item.id !== id);
      setProducts(newProducts)
    }
  }
  const handleAddPoduct = (data) => {
    create(data).then((response)=>{
      setProducts([...products, response.data])
    })
    
  };
  const handleUpdateProduct = (data) => {
    const newProductUpdate = products.filter( item => item.id !== data.id);
    console.log(products.filter( item => item.id !== data.id))
   
    update(data).then((response)=>{
      setProducts([...newProductUpdate,response.data])
    })
    
  }
  ///*End Product*/////




  ///*Category*/////
  const handleRemoveCategory = async (id) => {
    const confirm = window.confirm("Are you sure to remove this category.")
    if(confirm){
      const {data} = await removeCategory(id);
      const newCategory = category.filter(item => item.id !== id);
      setCategory(newCategory)
    }
  }
  const handleAddCategory = (data) => {
    setCategory([...category, data])
  };
  const handleUpdateCategory = (data) => {
    const newData = category.filter( item => item.id !== data.id);
    setCategory([...newData, data])
  }
  ///* End Category*/////


  return (
    <div className="App">
      
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutWebsite/>} >
          <Route index element={<div><h1>Home</h1></div>} />
          <Route path="/product" element={<Products products={products}/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category" element={<div>Danh muc</div>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
        </Route>

        <Route path="/admin" element={
         <PrivateAdmin abc="123">
           <LayoutAdmin/>
         </PrivateAdmin>

        } >

          <Route index element={<div>Dashboard</div>} />
          <Route path="/admin/categories" element={<AdminCategory category={category} handleRemoveCategory={handleRemoveCategory} />} />
          <Route path="/admin/product/:id/update" element={<UpdateProduct products={products} handleUpdateProduct={handleUpdateProduct} />} />
          <Route path="/admin/product/add" element={<AddProduct handleAddPoduct={handleAddPoduct} />} />
          <Route path="/admin/products" element={<AminProducts products={products} handleRemoveProduct={handleRemoveProduct} />} />
        </Route>
      </Routes>
    </BrowserRouter>
     
    
    </div>
      
  );
}

export default App;
