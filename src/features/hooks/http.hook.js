import { useCallback, useState } from "react";

const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const clearError = useCallback(() => setError(false), [])
    
    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        setLoading(true);
        
            try {
                const res = await fetch(url).then(data => data)

                if (!res.ok) {
                    throw new Error(`Could not fetch ${url}, status: ${res.status}`)
                }
                
                if (res.ok) {
                    clearError()

                    const data = await res.json();
                    setLoading(false);
                    return data;
                }
                

            } catch (e) {
                setLoading(false);
                setError(true);
                throw e;
            }

    }, [])
    
    return { 
        loading,
        error,
        request, 
        clearError
    }
}

export default useHttp;