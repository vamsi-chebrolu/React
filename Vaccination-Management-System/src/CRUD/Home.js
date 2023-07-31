import { Navigate, useNavigate } from "react-router-dom"

export default()=>
{
    const nav=useNavigate();
    return(
        <div style={{margin:"10%"}}>
            <h1>Welcome to home page</h1>
            <button onClick={()=>nav('/insertUsers')}>InsertData</button>
        </div>
    )
}