import { useEffect, useReducer, useState } from "react";
import { firestoreDashboard } from "../firebase/config";


const useFirestore = (collection) =>{

    let initialState = {
        document: null,
        isPending: false,
        error: null,
        succes: null
    }


    const firestoreReducer = (state, action) =>{

        switch (action.type) {

            case "IS_PENDING":
                return {...state, isPending: true}

            case "SUCCES":
                return {document: action.peyload, succes: true, error: null, isPending: false}

            case "ERROR":
                return {...state, error: action.peyload}
                
                break;
        
            default:
               return state
        }

    }

    const [response, dispach] = useReducer(firestoreReducer, initialState);
    const [cancel, setCancel] = useState(false);

    //collection firestore
    const ref = firestoreDashboard.collection(collection);


    //add new document
    const addDoc = async (doc) =>{
        dispach({type: "IS_PENDING"})

        try{

            const addedDocument = await ref.add(doc)
            dispach({type: "SUCCES", peyload: addedDocument})

        }catch(e){
            dispach({type: "ERROR", peyload: e.message})
        }

    }

    //delete doc
    const deleteDoc = (id) =>{

    }

    useEffect(() =>{
        return () => setCancel(true)
    }, [])


    return {addDoc, deleteDoc, response}

}

export default useFirestore;