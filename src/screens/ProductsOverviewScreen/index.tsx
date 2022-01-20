import { RootState } from "@src/store";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ProductItem, CustomHeaderButton } from "@src/components";
import { addToCart } from "@src/store/actions/cartAction";
import { IProduct } from "@src/shared/interfaces";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";

type ProductsOverviewScreenProp = StackNavigationProp<RootStackParamList, 'CartScreen'>;

const ProductsOverviewScreen: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const navigation = useNavigation<ProductsOverviewScreenProp>();

  const onAddToCart = (product: IProduct) => {
    addToCart(dispatch, product);
  };
  

  React.useLayoutEffect(() => {
    navigation.setOptions({headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Cart"
          iconName="cart"
          onPress={() => navigation.navigate("CartScreen")}
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

export default ProductsOverviewScreen;
