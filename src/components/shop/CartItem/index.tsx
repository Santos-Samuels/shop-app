import { TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { ICartItem } from '@src/shared/interfaces';
import { CartItemContainer, CartItemContent, CartItemText } from './styles'

const CartItem: React.FC<{item: ICartItem, onRemoveItem: (id: number) => void}> = (props) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFF', borderRadius: 10, padding: 10, marginVertical: 5}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CartItemText>{props.item.quantity} </CartItemText>
        <CartItemText>{props.item.title}</CartItemText>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CartItemText style={{marginEnd: 10}}>${props.item.price.toFixed(2)}</CartItemText>
        <TouchableOpacity onPress={() => props.onRemoveItem(props.item.id)}>
          <Ionicons
            name='trash'
            size={23}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;