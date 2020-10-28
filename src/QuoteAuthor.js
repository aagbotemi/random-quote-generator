import React from 'react';
import { FaQuoteRight, FaQuoteLeft, FaTwitter } from 'react-icons/fa';

const QuoteAuthor = ({ handleClick, quotes }) => {
    const { text, author } = quotes;
    
    return (
        <article className="quotebox">
            <blockquote
                className="fadeIn"
                key={Math.random()}
            >
                <h1 className='quote'>
                    <FaQuoteLeft style={{ fontSize: "14px" }} />
                    {text}
                    <FaQuoteRight style={{ fontSize: "14px" }} />
                </h1>
                <h5 className='author'>
                    ~{author ? author : "Unknown"}
                </h5>
            </blockquote>
            
            <div className='quoteButton'>
                <button
                    onClick={handleClick}
                    className='newQuote'
                >
                    New Quote
                </button>

                <button
                    className='tweetQuote'
                    onClick={() => {
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quotes.text + '~' + quotes.author))
                    }}
                    type="submit"
                    title="Tweet Quote">
                    <FaTwitter style={{ fontSize: '1.2rem', marginTop: "0px" }}
                    />
                </button>
            </div>
        </article>
    )
}

export default QuoteAuthor