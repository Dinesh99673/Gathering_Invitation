import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import {pass} from "../assets/material/material"

function PasswordInterface(props) {
    const [password, setPassword] = useState("");
    const [ans, setAns] = useState(false);
    const [wrong,setWrong] = useState(false);
    const navigate = useNavigate();

    function handleClick(){
        if(password === pass){
            props.onParticle(true);
            setAns(true);
            setWrong(false);
            setTimeout(() => {
                navigate("/somyaa");
              }, 7000);
        }else{
            setWrong(true);
            props.onParticle(false);
        }
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center px-4">

            {wrong ? (
                <div className="font-bold font-sans text-orange-500 w-full mb-9 ">
                    <h1 className="text-center text-3xl">Somyaaa kyaa yaar tu itnasa bhi galat btaa rhi he Fuddu, Try Try</h1>
                    <br />
                </div>
            ):
            (!ans &&
                <div className="font-bold font-sans text-orange-500 w-full mb-9 ">
                    <h1 className="text-center text-3xl">Iska PassWord kya he somyaaa ? 🧐 Soch and Code me Dhundh agar nhi mila too mujhe puch 🌝</h1>
                    <br />
                </div>
            )
            }

            {ans ? 
            (
                <div className="font-bold font-sans text-teal-400 w-full mb-9 ">
                    <h1 className="text-center text-6xl text-purple-600">Boom</h1><br />
                    <h1 className="text-center text-3xl">Yes Bebo Right Answer Diya he Tune</h1><br />
                    <h1 className="text-center text-3xl">Chale abb next page pe ?</h1>
                </div>
            )        
            :
            (
                <div className="flex flex-col">
                    <input 
                        className="text-black w-full max-w-sm text-center mb-5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Yhape Password Dall :)"
                    />
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        onClick={handleClick}    
                    >
                        Ispe click kar agar password daldiya he too
                    </button>
                </div>
                )

            }   
        </div>
    );
}

export default PasswordInterface;
