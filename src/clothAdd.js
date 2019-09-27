import React,{useContext,useState} from 'react';
import './bootstrap.min.css';
import {ClothContext} from './contextstore';

const Addcloth=()=>{
  const [clothList,setcloth]=useContext(ClothContext);
  const [name,setname]=useState('');
  const [amount,setamount]=useState('');
  const [discount,setdiscount]=useState('');

  
  const updateName=e=>{
    setname(e.target.value)
  }
  const updateAmount=e=>{
    setamount(e.target.value)
  }
  const updateDiscount=e=>{
    setdiscount(e.target.value)
  }

  const addCloth=e=>{
    e.preventDefault();
    setcloth((prevClothes)=>[...prevClothes,{pic:name,name:name,amount:amount,discount:discount}])
  }
    return(
        <>
        <form className="form-inline" onSubmit={addCloth}>
          <select className='form-control' value={name} onChange={updateName}>
          <option value='unselected'>choose clothe</option>
            <optgroup label='vests'>
            <option value='Suite Vest'>Suite Vest</option>
            <option value='Summer Vest'>Summer Vest</option>
            </optgroup>
            <optgroup label='Shorts'>
            <option value='Day breaks' >Day breaks</option>
            <option  value='beach ware'> beach ware</option>
            <option  value='summer plots'>summer plots</option>
            <option  value='Spring short'>Spring short</option>
            </optgroup>
            <optgroup label='Shirts'>
            <option value='Vetom shirts'>Vetom shirts</option>
            <option value='Spring shirt'>Spring shirt</option>
            </optgroup>
          </select>
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            className="form-control"
            onChange={updateAmount}
          />

          <input
            type="text"
            placeholder="Enter discount"
            className="form-control"
            value={discount}
            onChange={updateDiscount}
          />
          <div className="input-group">
            <button className="btn btn-success">Save Clothe</button>
          </div>
        </form>
        </>
    );
}
export default Addcloth;