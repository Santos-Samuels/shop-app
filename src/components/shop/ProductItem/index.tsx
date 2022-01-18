import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductActions,
  ProductDetails,
} from "./style";
import { IProduct } from "@src/shared/interfaces";
import { Button } from "react-native";
import colors from "@src/shared/GlobalStyles/colors";

const ProductItem: React.FC<{ product: IProduct }> = (props) => {
  return (
    <ProductContainer>
      <ProductImage source={{ uri: props.product.imageUrl }} />

      <ProductDetails>
        <ProductTitle>{props.product.title}</ProductTitle>
        <ProductPrice>Price</ProductPrice>
      </ProductDetails>

      <ProductActions>
        <Button color={colors.primary} title="View Details" onPress={() => {}} />
        <Button color={colors.primary} title="To Cart" onPress={() => {}} />
      </ProductActions>
    </ProductContainer>
  );
};

export default ProductItem;
