import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QuoteContainer, Text } from './QuoteStyles'

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    axios.get(url)
      .then(res => {
        let dataQuotes = res.data.quotes;
        console.log(dataQuotes);
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch(error => console.log(error));
  }

  return (
    <QuoteContainer>
      <Text><p>{quote}</p></Text>
      <Text><p>-{author}</p></Text>
    </QuoteContainer>
  )
}

export default Quote;
