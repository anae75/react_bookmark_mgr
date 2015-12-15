import React from 'react';

let BookmarkList = React.createClass({
  handleDelete(i, e) {
    console.log("clicked delete on item", i, e.target);
    this.props.deleteHandler(i);
  },

  listContent() {
    var parent = this;
    return( this.props.bookmarks.map( 
      function (data, i) {
        return( 
          <li key={data.id}>
          <button onClick={parent.handleDelete.bind(parent, i)} >delete</button> {data.name} {data.id}
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
