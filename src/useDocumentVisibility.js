import { useEffect, useState } from "react";

const useDocumentVisibility=()=>{
    const [count, setCount]=useState(0)
    const [visible, setVisible]=useState(true)
    const onVisible=()=>{
            if (document.visibilityState === "visible") {
                setVisible(true)
            }
             else {
                setVisible(false)
                setCount(x=>x+1)
            }
    }

    const onVisibilityChange=(callback)=>{
       return callback(visible)
    }

    useEffect(()=>{
        document.addEventListener("visibilitychange", onVisible)
        return ()=>document.removeEventListener("visibilitychange", onVisible)
    },[])
    return {
        count, 
        visible,
        onVisibilityChange
    }
}
export default useDocumentVisibility
