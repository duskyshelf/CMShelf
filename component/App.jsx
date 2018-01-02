import React, { Component } from 'react'
import * as ReactDOM from 'react-dom'
import RichTextEditor from 'react-rte'
import RichEditor from './RichEditor'
import SubmitButton from './SubmitButton'

const hideButtonStyle = {
  position: 'absolute',
  top: 0,
  right: 0
}

const containerStyle = {
  position: 'relative'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      content: RichTextEditor.createValueFromString(props.content, 'html'),
      id: props.id
    };

    this.onChange = this.onChange.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  onChange(content) {
    this.setState({ content });
  }

  toggleView() {
    this.setState({ visible: !this.state.visible })
  }



  render() {
    const { content, id, visible } = this.state

    return (
      <div style={containerStyle}>
        <button className='cmshelf-hide-button' onClick={this.toggleView} style={hideButtonStyle}>hide/show</button>
        { visible &&
          <div>
            <RichEditor value={content} onChange={this.onChange} />
            <SubmitButton value={content} contentId={id} />
          </div>
        }
        { !visible &&
          <div dangerouslySetInnerHTML={{ __html: content.toString('html') }} />
        }
      </div>
    )
  }
}

const elements = document.querySelectorAll('.App-intro');
elements.forEach(element => {
  const content = element.innerHTML;
  const id = element.getAttribute('cmsid');
  ReactDOM.render(<App content={content} id={id}/>, element);
});
