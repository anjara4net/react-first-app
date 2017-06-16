var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredient = [{"id":1,"text":"Hitesh"},{"id":2,"text":"Pavan"},{"id":3,"text":"Kantesh"}];

var List = React.createClass({
    render: function(){
        var listItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
