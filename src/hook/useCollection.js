import { firestoreDashboard } from "../firebase/config";
import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const useCollection = (collection,) => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [data, setData] = useState(null);

    const {user} = useContext(AuthContext)


    


    useEffect(() =>{
        let ref = firestoreDashboard.collection(collection)
                                    .where(["uid", "==", user.uid]);

        // if(query){
        //     ref = ref.where(...query)
        // }


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