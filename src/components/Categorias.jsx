import React from 'react'
import {MdIcecream} from 'react-icons/md';
import {MdLocalPizza} from 'react-icons/md';



const Categorias = () => {
    
const [color,setColor]=React.useState('#f1f2f6');

const colorFondo=()=>{

    setColor('#45bfd0')
}
  return (
    <div>
         <MdIcecream size="2em" color={color} onClick={()=>colorFondo()}/>
         
    </div>
    

  )
}

export default Categorias