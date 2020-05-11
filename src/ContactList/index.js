import React from 'react'

export default function ContactList(props){
    return(
        <div>
            {
                props.contact.map((person, index)=>{
                    return(
                    <div key={index} className="contact-list"> 
                        <div className="img">
                            <img src={person.imgSrc} />
                        </div>
                        <div className="info">
                            <h2 >{person.name}</h2> 
                            <div >{person.phone}</div>
                            <div >{person.address}</div>
                        </div>                        
                    </div>
                    )
                })
            }
        </div>
    )
}