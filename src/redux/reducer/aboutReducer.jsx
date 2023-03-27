import { GET_ABOUT } from './type'
const initialState = {
    products: [],
    load: false
}

export default (state = initialState, action) =>
{
    const {type, payload} = action
    switch (type) {
        case GET_ABOUT:
            return payload
    }
    return state;
};