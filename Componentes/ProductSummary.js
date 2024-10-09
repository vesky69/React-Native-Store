import { useState} from "react";
import { Image, Text, View, TouchableOpacity } from "react-native-web";

const ProductSummary = ({ source, description, price }) => {
    const [quantity, setQuantity] = useState(0)

    return (
        <View>
            <Image source={source} />
            <Text>{description}</Text>
            <TouchableOpacity onPress={setQuantity(quantity - 1)}><Text>-</Text></TouchableOpacity>
            <Text>Qty: {quantity}</Text>
            <TouchableOpacity onPress={setQuantity(quantity + 1)}><Text>+</Text></TouchableOpacity>
            <Text>{price * quantity}</Text>
        </View>
    )
}

export default ProductSummary