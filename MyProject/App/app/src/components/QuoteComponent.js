import React from 'react'
import Quotes from '../JSON/Quotes.json'

export default function QuoteComponent() {
    
    //using random object from Quotes.json and display quote and author
    const rand = Math.floor(Math.random() * Math.floor(6));
    const quote = Quotes[rand].quote;
    const author = Quotes[rand].author;

    return (
        <div className="header-blockquote">
            <h1 className="header-quote">{quote}</h1>
            <div className="header-cite"> {author} </div>
        </div>
        )
}


