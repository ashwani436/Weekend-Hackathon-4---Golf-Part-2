import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';

const App=()=> {
    const [renderBall,setRenderBall]=useState(false);
    const [posi,setPosi]=useState(0);
    const [ballPosition,setBallposition]=useState({left:0,top:0});
    
    let buttonClickHandler=() =>{
   setRenderBall(true);

   };
    let renderBallOrButton=()=> {
		if (renderBall) {
		    return (<div className="ball" style={{
               
                left: ballPosition.left+"px",
                top: ballPosition.top+"px",
                position: "absolute",

            }}></div>)
		} else {
		    return <button onClick={buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    useEffect( ()=>{
      document.addEventListener("keydown",handleKeydown);
    
    
    },[])
    const handleKeydown=(event)=>{

         console.log("keydown");
        // console.log(ballPosition.left,ballPosition.top);
        switch(event.keyCode)
        {
            case 39:{
                setBallposition((ballPosition)=> {
            
                    return{
                    left:ballPosition.left+5,
                    top:ballPosition.top
                    }
                }
                );
                break;
            }
            case 37:{
                setBallposition( (ballPosition)=>({
                    left:ballPosition.left-5,
                    top:ballPosition.top
                    
                }));
                break;
            
            }
            case 40:{
                setBallposition((ballPosition)=>({
                    top:ballPosition.top+5,
                    left:ballPosition.left
                }));
                break;
            
            }
            case 38:{
                setBallposition((ballPosition)=>({
                    top:ballPosition.top-5,
                    left:ballPosition.left
                }));
                break;
            
            }
            default:
                {
                    console.log("invalid");
                }
            
        }
    }

        return (
            <div className="playground">
                {renderBallOrButton()}
            </div>
        )
    
}


export default App;