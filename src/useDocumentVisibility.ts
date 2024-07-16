import { useEffect, useState } from "react";
type Callback = (visible: boolean) => void;

interface VisibilityReturn {
    visible: boolean;
    count: number;
    onVisibilityChange: (callback: Callback) => void;
}

const useDocumentVisibility = () :VisibilityReturn => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);
    const onVisible = () => {
            if (document.visibilityState === "visible") {
                setVisible(true);
            }
             else {
                setVisible(false);
                setCount( x => x + 1);
            }
    }

    const onVisibilityChange = (callback: Callback) => {
       return callback(visible);
    }

    useEffect(() => {
        document.addEventListener("visibilitychange", onVisible);
        return () => document.removeEventListener("visibilitychange", onVisible);
    }, [])
    return {
        count, 
        visible,
        onVisibilityChange
    }
}
export default useDocumentVisibility;