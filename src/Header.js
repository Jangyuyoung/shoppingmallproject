import { React } from 'react';

function Header(){
    return(
        <>
            <div className="navbar">
                <div>Logo</div>
                <div>
                    <ul>
                        <li><a>LOGIN</a></li>
                        <li><a>MY PAGE</a></li>
                        <li><a>ORDER</a></li>
                        <li><a>CART</a></li>
                    </ul>
                </div>
                    <ul>
                        <li><a>ABOUT</a></li>
                        <li><a>OUTER</a></li>
                        <li><a>TOP</a></li>
                        <li><a>DRESS</a></li>
                        <li><a>BOTTOM</a></li>
                        <li><a>ACC</a></li>
                    </ul>
                
                <div>
                    <ul>
                        <li><a>NOTICE</a></li>
                        <li><a>REVIEW</a></li>
                        <li><a>Q&A</a></li>
                        <li><a>LOOKBOOK</a></li>
                    </ul>
                </div>
            </div>    
        </>
    );
}

export default Header;