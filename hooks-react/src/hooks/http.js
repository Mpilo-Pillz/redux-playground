import { useCallback, useReducer } from "react";

const initialState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
};

const httpReducer = (currentHttpState, action) => {
    switch (action.type) {
        case "SEND":
            return { loading: true, error: null, data: null, extra: null, identifier: action.identifier };
        case "RESPONSE":
            return { ...currentHttpState, loading: false, data: action.responseData, extra: action.extra };
        case "ERROR":
            return { loading: false, error: action.errorMessage };
        // case "CLEAR":
        //     return { ...currentHttpState, error: null };
        case "CLEAR":
            return initialState;
        default:
            throw new Error("Should not be reached!");
    }
};

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

    const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), [])

    const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
        dispatchHttp({ type: "SEND", identifier: reqIdentifier });
        fetch(url, {
            method,
            body,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                return response.json();
            }).then(response => {
                // if (!response.ok) {
                //     dispatchHttp({
                //         type: "ERROR",
                //         errorMessage: "Something went wrong!",
                //     });
                // }
                dispatchHttp({ type: "RESPONSE", responseData: response, extra: reqExtra });
            })
            .catch((error) => {
                // setError(error.message);
                // setIsLoading(false);
                dispatchHttp({ type: "ERROR", errorMessage: error.message });
            });
    }, []);

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest,
        reqExtra: httpState.extra,
        reqIdentifier: httpState.identifier,
        clear
    }
};

export default useHttp;

// the idea is to share the logic not the data.
