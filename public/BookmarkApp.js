import React from 'react';
var InfoPanel = require('./InfoPanel');
var EntryPanel = require('./EntryPanel');

class BookmarkApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: ['hello kitty', 'sailor moon']
    };
  }

  addBookmark(name) {
    console.log("handler called");
    this.state.bookmarks.push(name);
    this.setState({ bookmarks: this.state.bookmarks });
  }
  
  render() {
    return (
      <div>
      <h1> This is the Bookmark App </h1>
      <InfoPanel numBookmarks={this.state.bookmarks.length} />
      <EntryPanel addHandler={this.addBookmark.bind(this)} />
      </div>
    );
  }
};

module.exports  = BookmarkApp;
