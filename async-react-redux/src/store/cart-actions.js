import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:1337/carts');

            if (!response.ok) {
                throw new Error("Could not fetch cart data");
            }
            const data = await response.json()

            return data
        }

        try {
            const cartData = await fetchData();
            console.log("Cart-->", cartData);
            dispatch(cartActions.replaceCart(cartData[0]))
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed',
                }));
        }


    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data',
            }));

        const sendRequest = async () => {
            const response = await fetch('http://localhost:1337/items/1',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                }
            );
            if (!response.ok) {

                throw new Error('Sending cart data failed');
            }
        }

        try {
            await sendRequest()

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Sent cart data successfully',
                }));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed',
                }));
        }



        // const responseData = await response.json();
    }
}