import { RootState } from '@src/store';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { ProductItem } from '@src/components'

const HomeScreen: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <ProductItem product={itemData.item} />}
    />
  );
};

export default HomeScreen;