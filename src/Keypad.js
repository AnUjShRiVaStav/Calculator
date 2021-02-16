import React from "react";
import "./Keypad.css";
import {useState,useEffect,useRef} from "react";



function Keypad(){

const [result,setResult] = useState(" ")
const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus()
  },[])

function handleClick(e){
    setResult(result+ e.target.name)
}
function C(){
    setResult(result.slice(0,result.length-1));
}
function Clear(){
    setResult("");
}

      function Calculate(){
          try {
          setResult(eval(result)+ " " );
      } catch (error) {
          setResult("Error"); 
      }
    }



    return(
<div className="cal">
<div className="input"> 

<input type="Text" value = {result} ref = {inputRef}  />

</div>
<div className="Button">
      <button id = "Clear" onClick={Clear}>
      Clear
      </button>
      <button id ="C" onClick = {C}>
      C
      </button>
      <button name ="/" onClick={handleClick}>/</button>
      
      <button name ="+" onClick={handleClick} >+</button>
      <button name ="7" onClick={handleClick}>7</button>
      <button name ="8" onClick={handleClick}>8</button>
      <button name ="9" onClick={handleClick}>9</button>
      
      <button name ="-" onClick={handleClick}>-</button>
      <button name ="4" onClick={handleClick}>4</button>
      <button name ="5" onClick={handleClick}>5</button>
      <button name ="6" onClick={handleClick}>6</button>
      
      <button name = "*" onClick={handleClick}>*</button>
      <button name = "1" onClick={handleClick}>1</button>
      <button name = "2" onClick={handleClick}>2</button>
      <button name = "3" onClick={handleClick}>3</button>
      
      <button name = "." onClick={handleClick}>.</button>
      <br></br>
      
      <button name = "0" onClick={handleClick}>0</button>
      <button id = "Calculate" onClick={Calculate}>
      
          Result
      </button>
       
</div>


</div>

    );
}
export default Keypad;