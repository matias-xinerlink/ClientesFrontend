import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url, { method: 'GET', headers: { "Content-Type": "application/json", "x-access-token": localStorage.getItem('sessionToken') } })
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    error: false,
                    data
                })

            })
            .catch(err => {
                console.log(err);
                setState({
                    loading: false,
                    error: true,
                    data: null
                })

            });

    }, [url]);

    return state;

}
