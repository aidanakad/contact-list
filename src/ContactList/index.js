import React from 'react'

export default function ContactList(props){
    return(
        <div>
            {
                props.contact.map((person, index)=>{
                    return(
                    <div key={index}> 
                        <div className="first-contact">{person.name}</div> 
                        <div className="second-contact">{person.phone}</div>
                        <div className="third-contact">{person.address}</div>
                    </div>
                    )
                })
            }
        </div>
    )
}