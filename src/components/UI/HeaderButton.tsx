import { HeaderButton, Item } from "react-navigation-header-buttons";
import Ionicons from "@expo/vector-icons/Ionicons";


const CustomHeaderButton: React.FC = (props) => {
  return (
    <HeaderButton {...props} title="Cart" IconComponent={Ionicons} iconSize={23} color="#FFF" />
  );
};

export default CustomHeaderButton;