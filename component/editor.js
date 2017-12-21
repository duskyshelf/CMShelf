import React from 'react'
import * as ReactDOM from 'react-dom'

const RichEditor = ({content}) => {
  return (
    <h1>{content}</h1>
  )
}

const elements = document.querySelectorAll('p.App-intro');
elements.forEach(element => {
  ReactDOM.render(<RichEditor content={element.innerHTML}/>, element);
});
