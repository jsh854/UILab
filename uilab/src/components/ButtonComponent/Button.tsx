import React from 'react'
import './button.scss'
const Button=({className,children}:{className:string,children:JSX.Element})=>{
  return <button className={className}>{children}</button>  
}


export default Button;




