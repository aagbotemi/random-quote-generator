import React from 'react'

const QuoteAuthor = ({ displayColor, handleClick, quotes }) => {
    //const randomColor = displayColor();
    //const html = document.documentElement;
    //html.style.backgroundColor = randomColor;

    const { text, author } = quotes;
    
    return (
        <article style={{ backgroundColor: "white" }} className="quotebox">
            
            <blockquote
                //className="fadeIn"
                key={Math.random()}
                //style={{ color: randomColor }}
            >
                <h1>{text}</h1>
                <h5>
                    ~{author ? author : "Unknown"}~
                </h5>
            </blockquote>
            
            <button
                //style={{ backgroundColor: randomColor }}
                onClick={handleClick}
            >
                New quote
            </button>

            <button
                onClick={() => {
                    window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quotes.text + '~~' + quotes.author))
                }}
                type="submit"> Tweet Quote
            </button>
            
        </article>
    )
}

export default QuoteAuthor

// <a href={`https://twitter.com/intent/tweet?text= ${text} ~${author}`} target="_blank" title="Post this quote on twitter!" id='tweet-quote'>
//             <i className="fab fa-twitter twitter-icon" />Share Quote
//             </a>