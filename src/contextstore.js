import React,{createContext,useState} from 'react'

export const ClothContext=createContext();
export const ClothProvider=props=>{
    const [clothList,setcloth]=useState([
        {
            pic:'Spring shirt',
            name:'Spring shirt',
            amount:20,
            discount:15
        },
        {
            pic:'Vetom shirts',
            name:'Vetom shirts',
            amount:20,
            discount:12
        },
        {
            pic:'beach ware',
            name:'beach ware',
            amount:5,
            discount:18
        }


]);
return(
    <ClothContext.Provider value={[clothList,setcloth]}>
        {props.children}
    </ClothContext.Provider>
)
}