import { RootState } from '@src/store';
import { CartState } from '@src/store/types/CartTypes';
import { Button, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TotalAmountCart, TotalAmountText } from '@src/screens/CartScreen/style'
import colors from '@src/shared/GlobalStyles/colors';
import { CartItem } from '@src/components';
import { clearCart, removeFromCart } from '@src/store/actions/cartAction';

const CartScreen: React.FC = () => {
  const cart: CartState = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch();
  console.log(cart)

  const removeCartItem = (id: number) => {
    removeFromCart(dispatch, id, cart)
  }

  return (
    <View style={{margin: 20}}>
      <TotalAmountCart>
        <TotalAmountText>Total: <Text>{cart.totalAmount.toFixed(2)}</Text></TotalAmountText>
        <Button title='Order Now' color={colors.primary} onPress={() => clearCart(dispatch)}/>
      </TotalAmountCart>

      <Text>Cart Items</Text>
      <FlatList data={cart.items} keyExtractor={item => item.id.toString()} renderItem={itemData => (
        <CartItem item={itemData.item} onRemoveItem={removeCartItem} />
      )}>
        
      </FlatList>
    </View>
  );
};

export default CartScreen;