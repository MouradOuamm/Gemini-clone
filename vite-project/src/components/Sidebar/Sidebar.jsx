import React, { useState  } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {
  const [extended, setExtended] = useState(false)

  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={() =>setExtended(prev =>!prev)} className='menu' src={assets.menu} alt="menu" />
        <div  className="new-chat"> 
            <img src={assets.plus} alt="chat" />
          {extended?<p>New Chat </p> : null} 
        </div>
         {extended
         ? <div className="recent">
          <p className="recent-title">Recent</p>
               <div className="recent-entry">
                 <img src={assets.message} alt="Message" />
                  <p>What is react ...</p>
               </div>
        </div>
        
        : null 
        } 
       
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question} alt="Question" />
         {extended? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history} alt="history" />
          {extended? <p>Activity</p> : null}

        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting} alt="setting" />
          {extended? <p>Settings</p> : null}

        </div>
      </div>
    </div>
  )
}

export default Sidebar
