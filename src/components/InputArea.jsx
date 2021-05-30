import React, { useState } from 'react';

export default function InputArea(props){
    const [inputItem,setInputItem] = useState({});

    function handleChange(props){
        const {name,value} = props.target;
        setInputItem(prevItem =>{
           return{ 
               ...prevItem,
            [name]:value
        };
        });
    }

  

    return (
        <div className="input-area">
            <input onChange={handleChange} name="title" type="text" placeholder="Title" value={inputItem.title}/>
            <input onChange={handleChange} name="content" type="text" placeholder="Content" value={inputItem.content}/>
            <button onClick={()=>props.onAddItem(inputItem)}>+</button>
        </div>
    )
}