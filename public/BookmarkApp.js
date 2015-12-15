import React from 'react';
var InfoPanel = require('./InfoPanel');
var EntryPanel = require('./EntryPanel');
var BookmarkList = require('./BookmarkList');

class BookmarkApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
    this.curIndex = 0;
  }

  nextIndex() {
    var i = this.curIndex;
    this.curIndex = this.curIndex + 1;
    return i;
  }

  addBookmark(name) {
    console.log("handler called");
    var item = { name: name, id: this.nextIndex() };
    this.state.bookmarks.push(item);
    this.setState({ bookmarks: this.state.bookmarks });
  }

  render() {
    return (
      <div>
      <h1> This is the Bookmark App </h1>
      <InfoPanel numBookmarks={this.state.bookmarks.length} />
      <EntryPanel addHandler={this.addBookmark.bind(this)} />
      <BookmarkList bookmarks={this.state.bookmarks} />
      </div>
    );
  }
};

module.exports  = BookmarkApp;
