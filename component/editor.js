import React from 'react'
import * as ReactDOM from 'react-dom'

const RichEditor = () => {
  return (
    <h1>Hello World!</h1>
  )
}

console.log('editor hmm')

const elements = document.querySelectorAll('p.App-intro');
elements.forEach(element => {
  console.log('INJECT TIME')
  ReactDOM.render(<RichEditor />, element);
});
