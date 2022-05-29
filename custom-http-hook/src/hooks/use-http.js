import { useState, useCallback } from "react";

const useHttp = (applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const sendRequest = useCallback(async (requestConfig) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [applyData])
    // requestCongig and Apply data resulted in an infinite rerender as they too are objects
    // To fix we wrapped transfored taskes in a useCallback
    // we then removed requestConfig from the dependency array and also no longer passed it as an argument to useHttp
    // we pass it as an argument to sendRequest thus it is no longer necesarry as a dependency

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;

/**
 * State configured in the custom hook is used by the component
 *  state in custom hook is attached and implicityly used by the component calling the custom hook
 * this will trigger app component to rerender / re evaluated. Calling the custom hook again
 *  re creating the send Request function  returing a new function object (creating a new object in memory)
 * Use Effect running again enerting a loop
 * Go wrap sendRequest in a use call back
 * 
 * 
 * When app js rerenders fetch tasks is recreated
 *  functions are objects in javascript
 *  everytime a functionn is recreated in javascript
 *  even if it creates the same logic it is treated as a brand new value/ it is a brand new object in memory
 * thus uuseEffect will re execute it
 * 
 * So go wrap the functions created inside components in useCallback
 */








