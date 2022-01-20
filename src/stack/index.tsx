// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProductsOverviewScreen, ProductScreen, CartScreen } from '@src/screens';
import colors from '@src/shared/GlobalStyles/colors';
import { IProduct } from '@src/shared/interfaces';

export type RootStackParamList = {
  ProductsOverviewScreen: undefined;
  ProductScreen: {productId: string, onAddToCart: (product: IProduct) => void};
  CartScreen: undefined
}

const Drawer = createDrawerNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <Drawer.Screen name="ProductsOverviewScreen" options={{title: 'All Products'}} component={ProductsOverviewScreen} />
      <Drawer.Screen name="ProductScreen" component={ProductScreen} options={{drawerItemStyle: {display: 'none'}}} />
      <Drawer.Screen name="CartScreen" options={{title: 'Cart'}} component={CartScreen} />
    </Drawer.Navigator>
  )
}

export default RootStack