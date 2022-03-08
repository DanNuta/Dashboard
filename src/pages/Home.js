import { useEffect, useState } from "react";
import useFirestore from "../hook/useFirestore";
import useAuthContext from "../hook/useAuthContext";
import useCollection from "../hook/useCollection";


const Home = () => {

    const [name, setName] = useState("");
    const [counter, setCounter] = useState("");
    const {user} = useAuthContext()

    const {data, error} = useCollection("transaction")

    


    const {addDoc, deleteDoc, response} = useFirestore("transaction");

    const submit = (e) =>{
        e.preventDefault();

        const obj = {
            name: name,
            counter: counter
        }
        addDoc({...obj, id: user.uid})   
    }

     useEffect(() =>{
        if(response.succes){
            setCounter("");
            setName("");
        }
    }, [response.succes])




    return ( 
        <div>
            <form onSubmit={submit}>
                <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="name transaction" value={name} />
                <input onChange={(e) => setCounter(e.target.value)} type="number" placeholder="counter transaction" value={counter} />
                {!response.isPending && <button>Add transaction</button>}
                {response.isPending && <button>Transaction...</button>}

            </form>

            {error && <p>Loading...</p>}

            {data ?
             <div>{data.map((item) =>(
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.counter}</p>
                </div>
             ))}</div> 
            : <p>Loading</p>}

            


           
        </div>
     );
}
 
export default Home;