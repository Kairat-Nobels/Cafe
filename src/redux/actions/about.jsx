import { GET_ABOUT } from "../reducer/type";

export const getAbout = () =>
{
    return async(dispatch) =>
    {
        const response = await fetch(`https://6421dd5286992901b2bdedd9.mockapi.io/items`)
        const resData = await response.json();
        dispatch({
            type: GET_ABOUT,
            payload: { data: resData, load: true}
        })
    }
}