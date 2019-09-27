import React,{useContext} from 'react';
import {ClothContext} from './contextstore'
import Menswear from './menswear';
import './menswear.css';
import Addcloth from './clothAdd';
const Body=()=>{
        const [clothList,setcloth]=useContext(ClothContext);
    return(<>
        <div className='body-body'>
            <div className='body-logo'>
                <p>Men's wear like never before </p>
                </div>
                <div className='cloth'>
                <Addcloth/>
                </div>
                <div className='row'>
                    {clothList.map((cloth)=>{
                        return(
                            <Menswear pic={cloth.pic} name={cloth.name} amount={cloth.amount} discount={cloth.discount}/>
                        )
                    })}
                    </div>
            </div>
           
            </>
    );
}
export default Body;