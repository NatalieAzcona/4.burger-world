import { useEffect, useState } from "react"


//ejemplo para usar

const useCountdown = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        if(count >= 10) return;

        const interval = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 100);

    return () => {
        clearInterval(interval)
    }
    }, [count])

    return (
        <>
            <h2>{count}</h2>
        </>
    )
}

export default useCountdown