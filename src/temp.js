import React from 'react';

const temp1 = (props)=>{
  return (
      <h1>hello {props.name}</h1>
  )
}

const temp = ()=>{
    const nm = "saroj";
  return(
    <div>
        <temp1 name= {nm}/>
    </div>
  )
}

export default temp;