import { ScrollView, View } from "react-native-web";
import CartHeader from "./Componentes/CartHeader";
import OrderSummary from "./Componentes/OrderSummary";
import ProductSummary from "./Componentes/ProductSummary";

const Cart = (props) => {
    const [quantity, setQuantity] = {}

    return (
        <View>
            <CartHeader cart={props.cart} />
            <View>
                <ScrollView>
                    {
                        props.cart.map((product) => 
                            <ProductSummary 
                                source={product.source} 
                                description={product.description} 
                                price={product.price} 
                            />
                    )}
                </ScrollView>
            </View>
            <OrderSummary cart={props.cart} />
        </View>
    )
}