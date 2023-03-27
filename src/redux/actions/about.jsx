import { GET_ABOUT } from "../reducer/type";

export const getAbout = () =>
{
    return async(dispatch) =>
    {
        const response = await fetch(`https://63d78ffe5c4274b136f6a651.mockapi.io/items`)
        const resData = await response.json();
        dispatch({
            type: GET_ABOUT,
            payload: resData
        })
    }
}