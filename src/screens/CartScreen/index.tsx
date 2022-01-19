import { RootState } from '@src/store';
import { CartState } from '@src/store/types/CartTypes';
import { Button, FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { TotalAmountCart, TotalAmountText } from '@src/screens/CartScreen/style'
import colors from '@src/shared/GlobalStyles/colors';

const CartScreen: React.FC = () => {
  const cart: CartState = useSelector((state: RootState) => state.cart)

  return (
    <View style={{margin: 20}}>
      <TotalAmountCart>
        <TotalAmountText>Total: <Text>{cart.totalAmount.toFixed(2)}</Text></TotalAmountText>
        <Button title='Order Now' color={colors.primary} onPress={() => {}}/>
      </TotalAmountCart>

      <Text>Cart Items</Text>
      <FlatList data={cart.items} keyExtractor={item => item.id.toString()} renderItem={itemData => (
        <TotalAmountCart>
          <TotalAmountText>{itemData.item.title}</TotalAmountText>
          <TotalAmountText>{itemData.item.quantity}</TotalAmountText>
          <TotalAmountText>{itemData.item.price}</TotalAmountText>
        </TotalAmountCart>
      )}>
        
      </FlatList>
    </View>
  );
};

export default CartScreen;