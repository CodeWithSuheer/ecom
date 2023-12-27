import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

const initialState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const ActionsSlice = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemsToAdd = Array.isArray(action.payload) ? action.payload : [action.payload];

            itemsToAdd.forEach(item => {
                const { id } = item;
                const existingItem = state.cart.findIndex(existingItem => existingItem.id === id);

                if (existingItem !== -1) {
                    state.cart[existingItem].quantity += 1;
                } else {
                    state.cart.push({
                        ...item,
                        quantity: 1,
                    });
                }
            });
        },

        getCartTotal: (state) => {
            const { totalPrice, totalQuantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );

            // Update the state directly within the reducer
            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
        },

        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const removedItem = state.cart.find(item => item.id === itemId);

            if (removedItem) {
                state.totalQuantity -= removedItem.quantity;
                state.totalPrice -= removedItem.price * removedItem.quantity;

                state.cart = state.cart.filter(item => item.id !== itemId);
            }
            // toast.error('Item removed from cart');
        },

        increaseQuantity: (state, action) => {
            const itemId = action.payload;
            const itemToIncrease = state.cart.find(item => item.id === itemId);

            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
                // Update totalQuantity and totalPrice directly
                state.totalQuantity += 1;
                state.totalPrice += itemToIncrease.price;
            }
        },

        decreaseQuantity: (state, action) => {
            const itemId = action.payload;
            const itemToDecrease = state.cart.find(item => item.id === itemId);

            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
                // Update totalQuantity and totalPrice directly
                state.totalQuantity -= 1;
                state.totalPrice -= itemToDecrease.price;
            }
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getCartTotal,
} = ActionsSlice.actions;

export default ActionsSlice.reducer;
