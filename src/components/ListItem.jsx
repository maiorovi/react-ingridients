var React = require('react')

var ListItem = React.createClass({
  render: function() {
    return (
      /*
      so inside curly braces is javascript
      while <li><h4> is html tags
      So JSX format stands for mixture of JS and HTML
      */

      <li><h4>{this.props.text}</h4></li>
    );
  }

})

module.exports = ListItem;
