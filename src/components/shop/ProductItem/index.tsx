import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductActions,
  ProductDetails,
} from "./style";
import { IProduct } from "@src/shared/interfaces";
import { Button, TouchableOpacity } from "react-native";
import colors from "@src/shared/GlobalStyles/colors";
import { RootStackParamList } from "@src/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type ProductScreenProp = StackNavigationProp<RootStackParamList, "ProductScreen">;

const ProductItem: React.FC<{ product: IProduct, onAddToCart: (product: IProduct) => void }> = (props) => {
  const navigation = useNavigation<ProductScreenProp>();

  const ProductNavigationHandler = () => {
    navigation.navigate("ProductScreen", { productId: props.product.id, onAddToCart: props.onAddToCart })
  }

  return (
    <TouchableOpacity onPress={ProductNavigationHandler}>
      <ProductContainer>
        <ProductImage source={{ uri: props.product.imageUrl }} />

        <ProductDetails>
          <ProductTitle>{props.product.title}</ProductTitle>
          <ProductPrice>{props.product.price.toFixed(2)}</ProductPrice>
        </ProductDetails>

        <ProductActions>
          <Button
            color={colors.primary}
            title="View Details"
            onPress={ProductNavigationHandler}
          />
          <Button color={colors.primary} title="To Cart" onPress={() => props.onAddToCart(props.product)} />
        </ProductActions>
      </ProductContainer>
    </TouchableOpacity>
  );
};

export default ProductItem;
