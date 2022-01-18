import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductsOverview, Product } from '@src/screens';
import colors from '@src/shared/GlobalStyles/colors';

export type RootStackParamList = {
  ProductsOverview: undefined;
  Product: {productId: string};
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
        fontWeight: 'bold',
        fontFamily: 'PT Sans'
      },
    }}>
      <Stack.Screen name="ProductsOverview" options={{title: 'All Products'}} component={ProductsOverview} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  )
}

export default RootStack