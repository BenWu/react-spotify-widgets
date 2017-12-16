import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PlayWidget extends Component {
  render() {
    const src = 'https://open.spotify.com/embed?uri=' +
      `${this.props.uri}${this.props.lightTheme ? '&theme=white' : ''}` +
      `${this.props.viewCoverArt ? '&view=coverart' : ''}`;
    return (
      <iframe
        title={this.props.title}
        src={src}
        width={this.props.width} height={this.props.height} />
    );
  }
}

PlayWidget.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  lightTheme: PropTypes.bool,
  viewCoverArt: PropTypes.bool,
};

export default PlayWidget;
