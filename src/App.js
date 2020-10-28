import React, { useState, useEffect } from 'react';
import QuoteAuthor from "./QuoteAuthor";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false);
  const [allQuote, setAllQuote] = useState([]);

  const API_URL = "https://type.fit/api/quotes";
  
  useEffect(() => {
    const fetchQuote = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAllQuote(data)
        console.log(data);
      } catch (error) {
        setIsError(true);
        console.log(error)
      }
      setIsLoading(false);

    }
    fetchQuote();
  }, [])

  const randomQuote = () => {
    //get random numbers
    const randomNumber = Math.floor(Math.random() * allQuote.length);
    return allQuote[randomNumber];
  }

  // const shuffleQuotes = (array) => {
  //   return array.sort(() => Math.random()-0.5)
  // }

  const handleClick = () => {
    //generate different quote function
    const generateRandomQuote = randomQuote();
    setAllQuote({
      text: generateRandomQuote.text,
      author: generateRandomQuote.author
    });
    //shuffleQuotes(quotes)
  };

  // const randomColor = () => {
  //   const color = `rgb(
  //     ${Math.floor(Math.random() * 255)},
  //     ${Math.floor(Math.random() * 255)},
  //     ${Math.floor(Math.random() * 255)})`;
  //   return color;
  // }
  
  if (isLoading) {
    return (
      <section>
        <header>
          <h1>Quote App</h1>
        </header>

        <main>
          {isLoading && <div className="loader"></div>}
        </main>
      </section>
    )
  }
  if (isError) {
    return (
      <section>
        <header>
          <h1>Quote App</h1>
        </header>

        <main>

          {isError && <div className="error">Something went wrong...</div>}
          
        </main>
      </section>
    )
  }

  
  return (
    <React.Fragment>
      <section className="App">
        <header>
          <h1>Quote App</h1>
        </header>

        <main>
            
          <QuoteAuthor
            //displayColor={randomColor}
            handleClick={handleClick}
            {...allQuote}
            allQuote={ allQuote }
          />

        </main>
      </section>
    </React.Fragment>
  );
}

export default App;