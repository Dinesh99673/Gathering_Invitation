import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import captcha from "../assets/captcha.jpg";

function PasswordInterface(props) {
    const [password, setPassword] = useState("");
    const [ans, setAns] = useState(false);
    const [counter, setCounter] = useState(3);
    const [wrong, setWrong] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
        if (password === "qGphJD") {//qGphJD
            props.onParticle(true);
            setAns(true);
            setWrong(false);
        } else {
            setWrong(true);
            props.onParticle(false);
        }
    }

    useEffect(() => {
        if (ans && counter > 0) {
            const timer = setInterval(() => {
                setCounter((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer); // Cleanup to avoid memory leaks
        }

        if (counter === 0 && ans) {
            navigate("/Gathering_Invitation/invetation"); // Redirect when counter reaches 0
        }
    }, [ans, counter, navigate]);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center px-4">
            {wrong ? (
                <div className="font-bold font-sans text-orange-500 items-center flex justify-center flex-col w-full mb-5">
                    <h1 className="text-center text-3xl">Sir please Try again !!</h1>
                    <br />
                    <img
                        className="p-4 h-[50%] md:w-[40%] md:h-[40%]"
                        src={captcha}
                        alt="User Captcha"
                    />
                </div>
            ) : (
                !ans && (
                    <div className="font-bold font-sans text-orange-500 items-center flex justify-center flex-col w-full mb-5">
                        <h1 className="text-center text-2xl">
                            To continue, type the characters you see in the picture 🌝
                        </h1>
                        <br />
                        <img
                            className="p-4 h-[50%] md:w-[40%] md:h-[40%]"
                            src={captcha}
                            alt="User Captcha"
                        />
                        <br />
                    </div>
                )
            )}

            {ans ? (
                <div className="font-bold font-sans text-teal-400 w-full mb-9">
                    <h1 className="text-center text-6xl text-purple-600">Perfect</h1>
                    <br />
                    <h1 className="text-center text-3xl">
                        Now you will be redirected to our Invitation in <span className="text-4xl text-purple-400">{counter}</span> 😁
                    </h1>
                    <br />
                </div>
            ) : (
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
                        Click here to Submit
                    </button>
                </div>
            )}
        </div>
    );
}

export default PasswordInterface;
