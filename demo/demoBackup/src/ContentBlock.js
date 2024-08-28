import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'

class ContentBlock extends Component {
  constructor(props) {
    super(props);

    this.state = { data: "loading" };
    this.id = this.props.contentId;
  }

  componentDidMount() {
    fetch(`http://localhost:3100/id/${this.id}`)
      .then(response => response.json())
      .then(json => this.setState( { data: json[0].content }))
  }

  render() {
    return (
      <div className={'App-intro'} cmsId={this.id} dangerouslySetInnerHTML={{ __html: this.state.data }} />
    );
  }
}

export default ContentBlock;
