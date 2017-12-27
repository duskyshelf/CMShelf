import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import RichTextEditor from 'react-rte';
import RichEditor from './RichEditor'
import SubmitButton from './SubmitButton'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: RichTextEditor.createValueFromString(props.content, 'html'),
      id: props.id
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(content) {
    this.setState({ content });
  }

  render() {
    return (
      <div>
        <RichEditor value={this.state.content} onChange={this.onChange} />
        <SubmitButton value={this.state.content} contentId={this.state.id} />
      </div>
    )
  }
}

const elements = document.querySelectorAll('p.App-intro');
elements.forEach(element => {
  const content = element.innerHTML;
  const id = element.getAttribute('cmsid');
  ReactDOM.render(<App content={content} id={id}/>, element);
});
