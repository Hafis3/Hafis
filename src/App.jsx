import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';


export default function App(){
    return(
       <div className="content-body">
           <Header />
            <Note />
            <Footer />
       </div>
    )
}

