import { createContext  } from "react";
import run from "../config/gemini";

export const Context= createContext();

    const ContextProvider = (props) => {



   
        const onSent = async (prompt) =>{
           await run(prompt)
        }

        
        onSent("What is react ")
    const contexteValue = {
      
    }
 
    return(

        <Context.Provider value={contexteValue} >
       {props.children}
        </Context.Provider> 
    )
}

export default ContextProvider