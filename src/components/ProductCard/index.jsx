import { ProductCardContainer } from './style'

const ProductCard = ({name, img, description}) => {

  return (
    <ProductCardContainer>
    <figure>
        <img src={img} alt={name}/>
    </figure>

    <h2>
        {name}
    </h2>

    <p>
        {description}
    </p>
    </ProductCardContainer>
  )
}

export default ProductCard