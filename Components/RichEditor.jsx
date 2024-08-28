import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import RichTextEditor from 'react-rte';

const RichEditor = ({ value, onChange }) => (
  <RichTextEditor
    value={value}
    onChange={onChange}
  />
);

export default RichEditor;