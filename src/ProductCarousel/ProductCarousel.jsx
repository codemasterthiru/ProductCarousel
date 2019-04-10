import React from "react";
import { products } from "./fixture";
import { Container, Product, Image, Title, Price } from "./styles";

class ProductCarousel extends React.Component {
  render() {
    const renderProducts = data => {
      return (
        <Product>
          <Image src={data.imgUrl} alt={"product"} />
          <Title>{data.name}</Title>
          <Price>${data.price}</Price>
        </Product>
      );
    };
    return <Container>{products.map(renderProducts)}</Container>;
  }
}

export { ProductCarousel };
export default { ProductCarousel };
