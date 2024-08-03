import React , { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";

const Contact = ()=>{

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    const handleSendMessage = async(e)=>{
        e.preventDefault();
        await axios.post("/send",{name,email,subject,message},{withCredentials:true,headers:{"Content-Type":"application/json"}}).then(res=>{
            toast.success(res.data.message);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }).catch(error=>{
            toast.error(error.response.data.message);
        });
    }

    return(
        <>
            <div className="contact container">
                <div className="banner">
                    <div className="item">
                        <h4>Address</h4>
                        <p>Warangal,Telangana</p>
                    </div>
                    <div className="item">
                        <h4>Call Us</h4>
                        <p>Call Us: +91 63788 27728</p>
                    </div>
                    <div className="item">
                        <h4>Mail</h4>
                        <p>vaishnav.anubhav20@gmail.com</p>
                    </div>
                </div>
                <div className="banner">
                    <div className="item">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.897116874684!2d79.52826367494933!3d17.98352298300891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334fbb37aee6c3%3A0xf1b2c37fcb8fefce!2sNational%20Institute%20of%20Technology%2C%20Warangal%20(NIT%20Warangal)!5e0!3m2!1sen!2sin!4v1721564408073!5m2!1sen!2sin" style={{border: 0,width:"100%",height:"450px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
                    </div>
                    <div className="item">
                        <form onSubmit={handleSendMessage}>
                            <h2>CONTACT</h2>
                            <div>
                                <input type="text" placeholder="Name" value={name} onChange={
                                    (e)=> setName(e.target.value)
                                } />
                                <input type="email" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <input type="text" placeholder="Subject" value={subject} onChange={
                                    (e)=> setSubject(e.target.value)
                                } />
                                <textarea
                                rows={10} type="text" placeholder="Message" value={message} onChange={
                                    (e)=> setMessage(e.target.value)
                                } />

                                <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
