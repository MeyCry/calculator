var Result = React.createClass({

    render: function () {
        try {
            return (
                <div className="result">
                {eval(this.props.expr) || 0}
                </div>);
        } catch (ex) {
            console.log(ex);
            return (
                <div className="result">
                    {(this.props.expr) || 0}
                </div>);
        }

    }
});

var Expression = React.createClass({

    render: function () {
        return (
            <div className="expression">
                {this.props.expr || 0}
            </div>
        );
    }
});


var Numbers = React.createClass({

    render: function () {
        var i,
            prop = this.props.number,
            arr = [];
        for (i = 0; i < prop.length; i += 3) {
            var addBtn = function (prop, i) {
                if (!(typeof prop[i] === "undefined")) {
                    return <span className="numbers__btn" onClick={this.props.handlerClick}>{prop[i]}</span>
                } else {
                    return ""
                }
            }.bind(this);
            arr.push(
                <div className="numbers__row">
                    {addBtn(prop, i)}
                    {addBtn(prop, i + 1)}
                    {addBtn(prop, i + 2)}
                </div>
            );
        }
        return (
            <div className="numbers">
                {arr}
            </div>
        )
    }
});

var Operation = React.createClass({

    render: function () {

        return (
            <div className="numbers">
                <div className="numbers__row">
                    <span className="numbers__btn" onClick={this.props.handlerClick}>+</span>
                    <span className="numbers__btn" onClick={this.props.handlerClick}>-</span>
                    <span className="numbers__btn" onClick={this.props.handlerClick}>*</span>
                    <span className="numbers__btn" onClick={this.props.handlerClick}>/</span>
                    <span className="numbers__btn" onClick={this.props.handlerClick}>clear</span>
                </div>
            </div>
        );
    }
});

var data = [];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var Calculator = React.createClass({
    getInitialState: function () {
        return ({
            expression: ""
        })
    },
    handlerClick: function (e) {
        if (e.target.innerText === "clear") return this.setState({expression: 0});
        this.setState({expression: this.state.expression + e.target.innerText});
        setTimeout(function () {
            console.log(this.state.expression);
        }.bind(this), 500)

    },

    render: function () {
        return (
            <div className="calculator">
                <Result expr={this.state.expression} />
                <Expression expr={this.state.expression} />
                <Numbers number={number} handlerClick={this.handlerClick} />
                <Operation handlerClick={this.handlerClick} />
            </div>
        );

    }
});

React.render(<Calculator />, document.getElementById("content"));
