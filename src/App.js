import { useState } from 'react';
import './App.css';


function App() {

  let [popup, setPopup] = useState(false);

  return (

    <div className="App">
      <nav className='navBar'>
        <div className='logo'>Logo</div>
        <div className='mypage'>
          <ul>
            <li><a href='https://www.naver.com'>LOGIN</a></li>
            <li><a>MY PAGE</a></li>
            <li><a>ORDER</a></li>
            <li><a>CART</a></li>
          </ul>
        </div>
        <div className='category'>
          <ul>
            <li><a>ABOUT</a></li>
            <li><a>OUTER</a></li>
            <li><a>TOP</a></li>
            <li><a>DRESS</a></li>
            <li><a>BOTTOM</a></li>
            <li><a>ACC</a></li>
          </ul>
        </div>
        <div className='notice'>
          <ul>
            <li><a>NOTICE</a></li>
            <li><a>REVIEW</a></li>
            <li><a>Q&A</a></li>
            <li><a>LOOKBOOK</a></li>
          </ul>
        </div>
        <button onClick={ ()=>{setPopup(!popup)}}>팝업</button>
      </nav>
      <div className='main'>
        
      </div>
      <div className="flow-container">
                <div className="flow-text">
                    <div className="flow-wrap">Text that flows from right to left. </div>
                    <div className="flow-wrap">Text that flows from right to left. </div>
                    <div className="flow-wrap">Text that flows from right to left. </div>
                    <div classNameS="flow-wrap">Text that flows from right to left. </div>
                </div>
            </div>
      

      {
  popup == true ? <Popup></Popup> : null
}

    </div>

  );
}

function Popup(){
  return(
    
    <div className='popup'>
      <h4>팝업창입니다.</h4>
    </div>

  )
}


export default App;

