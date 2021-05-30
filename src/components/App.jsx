import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import InputArea from './InputArea';


export default function App(){

  const [items,setItems] = useState([{title:"", content:""}])

  function addItem(item){
    setItems((prevItem)=>{
      return [...prevItem,item];
    });
  }
    return(
       <div className="content-body">
           <Header />
            <InputArea onAddItem={addItem}/>
           <main>
            {items.map((item,index)=>{
              return  <Note key={item.index} title={item.title} content={item.content}/>
            })
            }  
            </main>          
            <Footer />
       </div>
    )
}

