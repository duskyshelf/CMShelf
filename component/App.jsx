import React, { Component, Fragment } from 'react'
import * as ReactDOM from 'react-dom'
import RichTextEditor from 'react-rte'
import RichEditor from './RichEditor'
import SubmitButton from './SubmitButton'
import Portal from 'react-portal'
// import Event from 'events'

const hideButtonStyle = {
  position: 'absolute',
  top: 0,
  right: 0
}

const containerStyle = {
  position: 'relative'
}

const stateChange = new Event('stateChange')
let state = { visible: true }
const toggleEditorView = () => {
  state = { visible: !state.visible }
  document.dispatchEvent(stateChange)
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: state.visible,
      content: RichTextEditor.createValueFromString(props.content, 'html'),
      id: props.id
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener('stateChange', () => {
      this.setState({ visible: state.visible })
    })
  }

  onChange(content) {
    this.setState({ content });
  }

  render() {
    const { content, id, visible } = this.state

    return (
      <div style={containerStyle}>
        <button className='cmshelf-hide-button' onClick={toggleEditorView} style={hideButtonStyle}>
          hide/show
        </button>
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

