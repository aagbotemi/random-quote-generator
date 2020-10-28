import React, { useState, useEffect } from 'react';
import QuoteAuthor from "./QuoteAuthor";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [allQuote, setAllQuotes] = useState([]);
  const [quotes, setQuotes] = useState({
    text: '',
    author: ''
  });

  const API_URL = "https://type.fit/api/quotes";
  
  useEffect(() => {
    const fetchQuote = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAllQuotes(data);
        console.log(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    }
    fetchQuote();
  }, []);

  const randomQuote = () => {
    //get random numbers
    const randomNumber = Math.floor(Math.random() * allQuote.length)
    return allQuote[randomNumber]
  };

  const handleClick = () => {
    //generate different quote function
    const generateRandomQuote = randomQuote();
    setQuotes({
      text: generateRandomQuote.text,
      author: generateRandomQuote.author
    });
  };
  
  if (isLoading) {
    return (
      <section>
        <header>
          <h1>Random Quote App</h1>
        </header>

        <main>
          {isLoading && <div className="loader"></div>}
        </main>
      </section>
    );
  }
  if (isError) {
    return (
      <section>
        <header>
          <h1>Random Quote App</h1>
        </header>

        <main>
          {isError && <div className="error">Something went wrong...</div>}
        </main>
      </section>
    );
  }
  return (
    <React.Fragment>
      <section className="App">
        <header>
          <h1>Random Quote App</h1>
        </header>

        <main>
          <QuoteAuthor
            handleClick={handleClick}
            {...quotes}
            quotes={ quotes }
          />
        </main>
      </section>
    </React.Fragment>
  );
}

export default App;