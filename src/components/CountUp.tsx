import { useProgressiveNumber } from "../hooks/useProgressiveNumbers";
import { useEffect } from "preact/hooks";

export const CountUp = (
            { initial, final, decimals, duration }: 
            { initial: number, final: number, duration?: number, decimals?: number}   
) => {

 // useProgressiveNumber(initial, final, duration);   
 const [ count, setCount ] = useProgressiveNumber(initial, final, decimals);

 // cuando carge la página se hara el conteo hasta el final
 useEffect( ()=>{
    setCount(final);
 },[]);



    return (
        <span>{count}</span> 
        
        )
        
}
