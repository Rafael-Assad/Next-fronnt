import axios from "axios";
import { useEffect, useState } from "react";

import { ProductsContainer } from "./style"
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3010/products')
      .then( productList => setProducts(productList.data))
      .catch(error => console.error(error))
  
  }, [])
  

  return (
    <ProductsContainer>
      {products.map( product => {
        return (
          <ProductCard key={product.id}
            name={product.name}
            img={product.img}
            description={product.description}
          />
        )
      })}
    </ProductsContainer>
  )
}

export default Products