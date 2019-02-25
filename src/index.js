import React, { Component } from "react";
import { render } from "react-dom";

class Saludo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Hola {this.props.name}</h1>
    }
}

render(<Saludo name='Alexander'/>, document.getElementById('root'));
