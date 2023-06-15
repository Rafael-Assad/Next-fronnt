import axios from "axios";
import { useEffect, useState } from "react";

import { HomeContainer } from "./style"
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3010/products')
      .then( productList => setProducts(productList.data))
      .catch(error => console.error(error))
  
  }, [])
  

  return (
    <HomeContainer>
      {products.map( product => {
        return (
          <ProductCard key={product.id}
            name={product.name}
            img={product.img}
            description={product.description}
          />
        )
      })}
    </HomeContainer>
  )
}

export default Home