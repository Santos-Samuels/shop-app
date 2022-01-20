import { View, Text, ScrollView, Image, Button } from 'react-native';
import { RootStackParamList } from "@src/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { useRoute, RouteProp, useNavigation} from "@react-navigation/native";
import { useSelector } from 'react-redux';
import { RootState } from '@src/store';
import React, { useEffect } from 'react';
import { ProductDetails } from '@src/components/shop/ProductItem/style';
import colors from '@src/shared/GlobalStyles/colors';

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'ProductScreen'>;
type ProductScreenProp = StackNavigationProp<RootStackParamList, 'ProductScreen'>;

const ProductScreen: React.FC = (props) => {
  const navigation = useNavigation<ProductScreenProp>();
  const route = useRoute<ProductScreenRouteProp>();
  const productId = route.params.productId
  const selectedProduct = useSelector((state: RootState) => state.products.find(prod => prod.id === productId))!

 useEffect(() => {
  navigation.setOptions({title: selectedProduct?.title})
 }, [])

  return (
    <ScrollView style={{margin: 20}}>
      <Image style={{width: '100%', height: 300}} source={{ uri: selectedProduct.imageUrl }} />
      
      <View style={{marginVertical: 10}}>
        <Button title='Add to Cart' color={colors.primary} onPress={() =>  route.params.onAddToCart(selectedProduct)} />
      </View>
      
      <ProductDetails>
        <Text style={{fontSize: 20, marginBottom: 7}}>{selectedProduct?.price.toFixed(2)}</Text>
        <Text style={{fontSize: 17}}>{selectedProduct?.description}</Text>
      </ProductDetails>
    </ScrollView>
  );
};

export default ProductScreen;