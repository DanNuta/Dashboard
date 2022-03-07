import { firestoreDashboard } from "../firebase/config";
import { useState, useEffect } from "react";

const useCollection = (collection) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState(null)


    useEffect(() =>{
        let ref = firestoreDashboard.collection(collection);

        const unsubscribe = ref.onSnapshot((snapshot) =>{
            let result = [];
            snapshot.docs.forEach(item =>{
                result.push({...item.data()})
            })

            setData(result)
            setError(null)

        }, (error) =>{
            setError(error)
        })

        return () => unsubscribe()
    }, [collection])

    return {data, error}
    
}
 
export default useCollection;