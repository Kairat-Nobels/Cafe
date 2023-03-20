import CartItem from '../../components/ClassItem';
import { ADD, CLEAR_CART, DECREASE_COUNT, INCREASE_COUNT, REMOVE} from './type'
const initialState = {
    items: [],
    totalAmount: 0
}

export default (state = initialState, action) =>
{
    switch (action.type) {
        case ADD:
            const addedProduct = action.product;
            const prodPrice = Number(addedProduct.price);
            const prodTitle = addedProduct.title;
            const prodImg = addedProduct.img
            let updatedOrNewCartItem;

            if (state.items[addedProduct.id]) {
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    prodImg,
                    state.items[addedProduct.id].sum + prodPrice
                );
            } else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodImg, prodPrice);
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice,
            };
        case INCREASE_COUNT:
            const selectedCartItemAppend = state.items[action.pid];
            console.log(selectedCartItemAppend);
            const updatedCartItemsAppend = new CartItem(
                selectedCartItemAppend.quantity + 1,
                selectedCartItemAppend.productPrice,
                selectedCartItemAppend.productTitle,
                selectedCartItemAppend.productImg,
                selectedCartItemAppend.sum + selectedCartItemAppend.productPrice
            );

            return {
                ...state,
                items: { ...state.items, [action.pid]: updatedCartItemsAppend },
                totalAmount: state.totalAmount + selectedCartItemAppend.productPrice,
            };
        case DECREASE_COUNT:
            const selectedCartItemReduce = state.items[action.pid];
            const currentQty = selectedCartItemReduce.quantity;
            let updatedCartItemsReduce;

            if (currentQty > 1) {
                const updatedCartItem = new CartItem(
                    selectedCartItemReduce.quantity - 1,
                    selectedCartItemReduce.productPrice,
                    selectedCartItemReduce.productTitle,
                    selectedCartItemReduce.productImg,
                    selectedCartItemReduce.sum - selectedCartItemReduce.productPrice
                );
                updatedCartItemsReduce = {
                    ...state.items,
                    [action.pid]: updatedCartItem,
                };
            } else {
                updatedCartItemsReduce = { ...state.items };
                delete updatedCartItemsReduce[action.pid];
            }
            return {
                ...state,
                items: updatedCartItemsReduce,
                totalAmount: state.totalAmount - selectedCartItemReduce.productPrice,
            };
        case REMOVE:
            const selectedCartItem = state.items[action.pid];
            const updatedCartItems = { ...state.items };
            const currentAmount = state.totalAmount;
            delete updatedCartItems[action.pid];
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: currentAmount - selectedCartItem.sum,
            };
        case CLEAR_CART:
            return {
                items: [],
                totalAmount: 0
            }
        
    }
    return state;
};