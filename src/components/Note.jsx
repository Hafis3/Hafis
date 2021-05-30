import React from 'react';

export default function Note({title,content}){
    return (
        <div className="container-content">            
            <div>
                <h1 className="content-header">{title}</h1>
            </div>
            <p className="content-note">{content}</p>            
        </div>

    )
}

