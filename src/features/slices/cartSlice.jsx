import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        amount: 0,
        totalAmount: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart(state, action) {
            const cartProduct = action.payload;
            try {
                const exist = state.cart.find(product => 
                    product.id === cartProduct.id &&
                    product.size === cartProduct.size &&
                    product.color === cartProduct.color
                );
                if(exist) {
                    exist.amount++;
                    exist.totalPrice += cartProduct.price;
                    state.totalAmount++;
                    state.totalPrice += cartProduct.price;
                } else {
                    state.cart.push({
                        id: cartProduct.id,
                        price: cartProduct.price,
                        size: cartProduct.size,
                        img: cartProduct.img,
                        text: cartProduct.text,
                        amount: 1,
                        totalPrice: cartProduct.price,
                        name: cartProduct.name,
                        color: cartProduct.color
                    });
                    state.totalAmount++;
                    state.totalPrice += cartProduct.price;
                }
            } catch(err) {
                return err;
            }
        },
        removeFromCart(state, action) {

            const cartItem = action.payload;
            try {
                const exist = state.cart.find((item) =>
                    item.id === cartItem.id &&
                    item.size === cartItem.size &&
                    item.color === cartItem.color
                );
                if(exist.amount === 1) {
                    state.cart = state.cart.filter((item) => item.id !== cartItem.id || item.size !== cartItem.size || item.color !== cartItem.color);
                    state.totalAmount--;
                    state.totalPrice -= cartItem.price;
                } else {
                    exist.amount--;
                    exist.totalPrice -= cartItem.price
                    state.totalAmount--;
                    state.totalPrice -= cartItem.price
                }
            } catch(err) {
                return err;
            }
        }    
    }

})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;