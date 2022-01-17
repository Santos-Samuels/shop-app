import { View } from 'react-native';
import { useApp } from '@src/hooks/useapp';

const Teste: React.FC = () => {
  const {teste} = useApp()
  return (
    <View>
      {teste}
    </View>
  );
};

export default Teste;