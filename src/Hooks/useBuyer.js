import { useEffect, useState } from "react"

const useBuyer = email =>{
    const [isBuyer,setIsBuyer] = useState(false);
    useEffect( () =>{
        if(email){
            fetch(`https://finnal-project-server.vercel.app/users/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsBuyer(data.isBuyer);
            })
        }
    }, [email])
    return[isBuyer]
}
export default useBuyer;