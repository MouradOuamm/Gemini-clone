import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {
 
const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} =useContext(Context) 
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.boy } alt="user" />
      </div>
      <div className="main-container">

        {!showResult
        ?<>
        <div className="greet">
            <p><span>Hello , Mourad .  </span>  </p>
            <p>How I Can Help you today ?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p> Suggest Beautiful Places to see on an upcoming road trip </p>
                <img src={assets.compass} alt="compass" />
            </div>
            <div className="card">
                <p> Briefly summarize this concept : urban planning </p>
                <img src={assets.bulb} alt="compass" />
            </div>
            <div className="card">
                <p> Brainstorm team bonding activities for our work retreat </p>
                <img src={assets.message} alt="compass" />
            </div>
            <div className="card">
                <p> Improve the readability of the following code  </p>
                <img src={assets.coding} alt="compass" />
            </div>
        </div>
        <div className="result">
            <div className="result-title">
                <img src={assets.boy} alt="user" />
                <p></p>      
             </div>
             <div className="result-data">
                <img src={assets.gemini} alt="" />

             </div>
        </div>
    
        
        </>
        : <div className='result'> 

        </div>
        }
    
        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here ' />
                <div>
                    <img src={assets.galerie} alt="galerie" />
                    <img src={assets.microphone} alt="microphone" />
                   <img onClick={() =>onSent()}  src={assets.send} alt="send" />
                </div>
            </div>
            <p className="bottom-info">
                Gemini may display inaccurate info , including about  people , so  double-check its  responses. Your privacy and Gemini Apps </p>
            </div>
        </div>
      </div> 
  )
}
export default Main
