import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'

const submitContent = (contentId, value) => {
  const content = value.toString('html');
  const body = JSON.stringify({ id: contentId, content })

  console.log('body', body)
  fetch('http://localhost:3100/update', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body
  })
}

const SubmitButton = ({ value, contentId }) => {
  return (
  <button type="button" onClick={() => submitContent(contentId, value)}>
    submit
  </button>
  )
};

export default SubmitButton;
