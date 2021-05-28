import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes';


export default function App(){
    return(
       <div className="content-body">
           <Header />
           <main>
            {notes.map(x=>{
              return  <Note key={x.id} title={x.title} content={x.content.substring(0,101) + " ..."}/>
            })
            }  
            </main>          
            <Footer />
       </div>
    )
}

