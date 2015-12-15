import React from 'react';

let BookmarkList = React.createClass({
  listContent() {
    return( this.props.bookmarks.map( 
      (name, i) => <li>{name}</li>
    ));
  },

  render: function() {
    return (
      <div>
        <h2> Bookmark List </h2>
        <ul>
          {this.listContent()}
        </ul>
      </div>
    );
  }
});

module.exports = BookmarkList;
