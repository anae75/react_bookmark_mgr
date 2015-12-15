import React from 'react';

let InfoPanel = React.createClass({
  render: function() {
    return (
      <div>
        <h2> InfoPanel </h2>
        You have {this.props.numBookmarks} bookmarks.
      </div>
    );
  }
});

module.exports = InfoPanel;
