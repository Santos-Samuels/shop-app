import { RootState } from "@src/store";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem, CustomHeaderButton } from "@src/components";
import { addToCart } from "@src/store/actions/cartAction";
import { IProduct } from "@src/shared/interfaces";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

type ProductScreenProp = StackNavigationProp<RootStackParamList, 'Cart'>;

const ProductsOverview: React.FC = () => {
  const { products, cart } = useSelector((states: RootState) => states);
  const dispatch = useDispatch();
  const navigation = useNavigation<ProductScreenProp>();

  const onAddToCart = (product: IProduct) => {
    addToCart(dispatch, product);
  };
  

  React.useLayoutEffect(() => {
    navigation.setOptions({headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName="cart"
          onPress={() => navigation.navigate("Cart")}
        />
    </HeaderButtons> 
    )})
  }, [navigation])

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem product={itemData.item} onAddToCart={onAddToCart} />
      )}
    />
  );
};

export default ProductsOverview;
