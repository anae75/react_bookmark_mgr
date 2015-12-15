import React from 'react';
var InfoPanel = require('./InfoPanel');

class BookmarkApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: ['hello kitty', 'sailor moon']
    };
  }
  
  render() {
    return (
      <div>
      <h1> This is the Bookmark App </h1>
      <InfoPanel numBookmarks={this.state.bookmarks.length} />
      </div>
    );
  }
};

module.exports  = BookmarkApp;
