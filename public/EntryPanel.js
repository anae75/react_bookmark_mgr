import React from 'react';

let EntryPanel = React.createClass({
  handleClick: function() {
    if(this.refs.name.value) {
      var name = this.refs.name.value;
      console.log('adding a bookmark: ' + name); 
      this.props.addHandler(name);
    }
    this.refs.name.value = '';
  },

  render: function() {
    return (
      <div>
        <h2> EntryPanel </h2>
        <div className='input'>
          <input ref="name" placeholder='Add A Bookmark' required />
          <button onClick={this.handleClick}>Add</button>
        </div>
      </div>
    );
  }
});

module.exports = EntryPanel;
