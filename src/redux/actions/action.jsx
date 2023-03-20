import { ADD, CLEAR_CART, DECREASE_COUNT, INCREASE_COUNT, REMOVE } from "../reducer/type";

export const addToCart = (product) =>
{
    return { type: ADD, product: product };
}
export const removeCart = (product) =>
{
    return { type: REMOVE, pid: product };
}
export const increaseCart = (product) =>
{
    return { type: INCREASE_COUNT, pid: product };
}
export const decrementCart = (product) =>
{
    return { type: DECREASE_COUNT, pid: product };
}
export const clearCart = () =>
{
    return { type: CLEAR_CART };
}