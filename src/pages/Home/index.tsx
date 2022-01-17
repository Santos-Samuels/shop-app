import { View } from 'react-native';
import { useApp } from '@src/hooks/useapp';
import Teste from '@components/Teste';

const Home: React.FC = () => {
  const {teste} = useApp()
  return (
  <View>
    <Teste />
  </View>
  );
};

export default Home;