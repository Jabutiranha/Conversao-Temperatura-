import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            temperature: '',
            scale: 'F',
            temperatureResult: null,
            scaleResult: null,
        }
    }

    onInputChanged(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    convert() {
        let result;
        let resultScale;
        if (this.state.scale === 'F') {
            result = ((this.state.temperature - 32) * 5) / 9
            resultScale = 'C'
        } else {
            result = ((this.state.temperature * 9) / 5) + 32
            resultScale = 'F'
        }

        this.setState({
            temperatureResult: result,
            scaleResult: resultScale
        })
    }

    showResult() {
        if (this.state.temperatureResult) {
            return <b>A temperatura é: {this.state.temperatureResult}{this.state.scaleResult}</b>
        }

        return null
    }

    render() {
        return (
            <div>
                <h1>Conversor de Temperatura</h1>

                Temperatura: <br />
                <input type="number" name="temperature" onChange={event => this.onInputChanged(event)} />

                <label>
                    <input type="radio" name="scale" value="F" 
                        checked={this.state.scale === 'F'}
                        onChange={event => this.onInputChanged(event)} /> Fahrenheit
                </label>
                <label>
                    <input type="radio" name="scale" value="C" 
                        checked={this.state.scale === 'C'}
                        onChange={event => this.onInputChanged(event)} /> Celsius
                </label>

                <br />
                <input type="button" value="Converter" onClick={() => this.convert()} />

                <br />
                {this.showResult()}
            </div>
        )
    }
}

export default App