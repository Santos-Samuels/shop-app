import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@src/screens';
import colors from '@src/shared/GlobalStyles/colors';

// type RootStackParamList = {
//   Home: undefined;
// }

const Stack = createNativeStackNavigator();

const RootStack: React.FC = () => {
  
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default RootStack