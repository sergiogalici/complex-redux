import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { selectAllUsers } from './features/users/selector';
import { selectAllProducts } from './features/products/selector';
import { productsFiltersSelector, usersFiltersSelector } from './features/filters/selector';
import { userActions } from './features/users/reducer';
import { productActions } from './features/products/reducer';
import { UserType } from './features/users/model';
import { ProductType } from './features/products/model';
import { selectAreProductsLoading } from './features/loading/selector';

function App() {
  const [userCount, setUserCount] = useState(0)
  const [productCount, setProductCount] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productActions.fetchProducts())
  }, [dispatch])

  const isLoading = useSelector(selectAreProductsLoading)

  const allUsers = useSelector(selectAllUsers)
  const allProducts = useSelector(selectAllProducts)

  const usersFiltersSelected = useSelector(usersFiltersSelector.selectFilters)
  
  const productsFiltersSelected = useSelector(productsFiltersSelector.selectFilters)


  const handleAddUser = () => {
    dispatch(userActions.addUser({name: `User ${userCount}`}))
    setUserCount(userCount + 1)
  }

  const handleAddProduct = () => {
    dispatch(productActions.addProduct({title: `Product ${productCount}`}))
    setProductCount(productCount + 1)
  }

  const handleAddUserTofilters = (user: UserType) => {
    dispatch(userActions.addToFilters(user))
  }

  const handleAddProductTofilters = (product: ProductType) => {
    dispatch(productActions.addToFilters(product))
  }

  return (
    <div className="App">
      <p>{`Loading? ${isLoading}`}</p>
      <p>{`All Users: ${allUsers.map(user => user.name)}`}</p>
      <p>{`All Products: ${allProducts.map(product => product.title)}`}</p>
      <p>{`Filtered Users: ${usersFiltersSelected.length}`}</p>
      <p>{`Filtered Products: ${productsFiltersSelected.length}`}</p>

      <button onClick={handleAddUser}>Add a User</button>
      <button onClick={handleAddProduct}>Add a Product</button>

      {allUsers.map((user, i) => {
        return <div key={user.name + i}>
          <p>{user.name}</p>
          <button onClick={() => handleAddUserTofilters(user)}>Add User to Filters</button>
        </div>
      })}

      {allProducts.map((product, i) => {
        return <div key={product.title + i}>
          <p>{product.title}</p>
          <button onClick={() => handleAddProductTofilters(product)}>Add Product to Filters</button>
        </div>
      })}
    </div>
  );
}

export default App;
