import React from "react";
import { Text, View, Switch, TouchableOpacity } from "react-native-web";

const OrderSummary = ({ cart }) => {
    const [isInstallment, setIsInstallment] = usestate(false)

    let subtotal = 0
    cart.map(product => subtotal += product.price)

    const onToggleSwitch = setIsInstallment(!isInstallment)

    return (
        <View>
            <Text>Order Summary</Text>
            <Text>Subtotal: {subtotal}</Text>
            <Text>Shipping: 0</Text>
            <Text>Tax: Calculated at checkout</Text>
            <Text>Estimated total: {subtotal}</Text>
            <Text>Use installments?</Text>
            <Switch onValueChange={onToggleSwitch} value={isInstallment} />
        </View>
    )
}

export default OrderSummary;