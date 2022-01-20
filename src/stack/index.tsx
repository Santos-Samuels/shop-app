import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsOverview, ProductScreen, CartScreen } from '@src/screens';
import colors from '@src/shared/GlobalStyles/colors';
import { IProduct } from '@src/shared/interfaces';

export type RootStackParamList = {
  ProductsOverview: undefined;
  Product: {productId: string, onAddToCart: (product: IProduct) => void};
  Cart: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <Stack.Screen name="ProductsOverview" options={{title: 'All Products'}} component={ProductsOverview} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default RootStack