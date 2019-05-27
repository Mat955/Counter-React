var Counter = React.createClass({
    propTypes: {
        leftButton: React.PropTypes.string.isRequired,
        rightButton: React.PropTypes.string.isRequired,
        amount: React.PropTypes.number.isRequired
    },

    getInitialState: function () {
        return {
            counter: 0
        };
    },

    getDefaultProps: function () {
        return {
            leftButton: 'decrease',
            rightButton: 'increase',
            amount: 0
        }
    },

    componentWillMount: function () {
        console.log('Before rendering component the value of counter');
        this.setState({
            counter: 10
        })
    },

    componentDidMount: function () {
        console.log('After rendering component the value of counter, shows components on page');
        this.setState({
            counter: this.props.amount
        })
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        })
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    render: function () {
        return React.createElement('div', {
                className: 'container'
            },
            React.createElement('button', {
                onClick: this.decrement
            }, this.props.leftButton),
            React.createElement('h1', {}, 'Counter: ' + this.state.counter),
            React.createElement('button', {
                onClick: this.increment
            }, this.props.rightButton)
        );
    }
});

var element = React.createElement('ul', {},
    React.createElement(Counter, {}),
    React.createElement(Counter, {
        leftButton: '<<',
        rightButton: '>>',
        amount: 50
    }),
    React.createElement(Counter, {
        leftButton: 'down',
        rightButton: 'up',
        amount: 100
    })
);

ReactDOM.render(element, document.getElementById('app'));