import { View, Text, Image, TouchableOpacity } from "react-native";
import { fontSize } from "../../contants";
function StotyItem(props) {
    const { name, image, onPress } = props;

    return <View style={{ width: '33.33%', marginBottom: 10 }}>
        <TouchableOpacity onPress={onPress}><Image style={{ width: 105, height: 150, borderRadius: 10 }} source={{ uri: 'https://tieuthuyet.vn/' + image }}></Image></TouchableOpacity>
        <Text style={{ marginTop: 5 }} numberOfLines={1}>{name}</Text>
    </View>
}
export default StotyItem;