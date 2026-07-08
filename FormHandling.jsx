import React, {useState} from 'react';

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    //function to handle form submission

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Your form has been submitted")
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
        </form>
        </>
    )
}
export default Form;
