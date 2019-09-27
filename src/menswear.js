import React from 'react';
import './menswear.css'
const Menswear=({pic,name,amount,discount})=>{
    const afterdiscount=((100-discount)/100)*amount;
    return(
<div className='card'>
    <img className='card-img' src={require(`./img/${pic}.jpeg`)}/>
    <div className='card-title'>
        <span>{name}</span>
    </div>
    <div className='card-item'>
        <div className='card-list'>
        <li>Price :</li>
        <li >${afterdiscount}</li>
        <li className='after'>${amount}</li>
        <li className='discount'><b>{discount}% off</b></li>
        </div>
        
    

</div>
</div>
    );
}
export default Menswear;