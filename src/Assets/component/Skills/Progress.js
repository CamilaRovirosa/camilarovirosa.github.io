import React  from "react";
import "./Progress.scss"

const Progress = ({done}) =>{
 
    const[style, setStyle] = React.useState({});
    setTimeout(()=>{
        const newStyle ={
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);

    }, 200);
        return(
           
                <div className="sk-progress-done " 
                style={
                    style
                }> 
                
                </div>
           
        );

}
export default Progress;