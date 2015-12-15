import React from 'react';

let BookmarkList = React.createClass({
  listContent() {
    return( this.props.bookmarks.map( 
      function (data, i) {
        return( 
          <li key={data.id}>
          <button>delete</button> {data.name} {data.id}
          </li>
        );
      }
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
