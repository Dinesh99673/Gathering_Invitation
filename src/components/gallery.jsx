import React,{useEffect} from "react";
import PhotoCard from "./sam";
import { obj } from "../assets/material/material";
import { useNavigate } from "react-router-dom";

function PhotoGallery(props) {

    const navigate = useNavigate();

    useEffect(()=>{
        if(!props.particle){
            navigate("/");
        }
    },[]);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-10 h-screen ">
            {obj.map((pic,index)=>{
                if(index%4 == 0){
                    return <PhotoCard imageUrl={pic.link} message={pic.msg} ind={index} val="fade-right"/>
                }else if(index%4 == 1 || index%4==2){
                    return <PhotoCard imageUrl={pic.link} message={pic.msg} ind={index} val="zoom-out"/>
                }else{
                    return <PhotoCard imageUrl={pic.link} message={pic.msg} ind={index}  val="fade-left"/>
                }
            })}
            <div className="font-bold text-orange-500 w-full mt-[35%] font-serif ">
                    <h1 className="text-center text-3xl">Aur bhi the somyaa mere pass like vo chinese vala and all but abb vo khape he kya pta nhi mill rhe he, but yhi dekhke khush hoja</h1>
                    <br />
            </div>
            <br />

        </div>
    );
}

export default PhotoGallery;
