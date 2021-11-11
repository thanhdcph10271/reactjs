import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

const LayoutAdmin = () => {
    return (
       <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home Page</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/product">Sản phẩm</Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
            */}
                    <li className="nav-item">
                    <Link to="/admin" className="nav-link">Trang Admin</Link>
                    </li> 
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div>
                    
                </div>
                </div>
            </div>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <div id="list-example" className="list-group">
                            <Link className="list-group-item list-group-item-action" to="/admin/categories">Categories</Link>
                            <Link className="list-group-item list-group-item-action" to="/admin/products">Products</Link>
                        </div>
                    </div>

                    <div className="col-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutAdmin
