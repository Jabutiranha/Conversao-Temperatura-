import { useState } from "react"

const AppHook = () => {
    const [temperature, setTemperature] = useState('')
    const [scale, setScale] = useState('F°')
    const [temperatureResult, setTemperatureResult] = useState('')
    const [scaleResult, setScaleResult] = useState('')

    const convert = () => {
        if (scale === 'F°') {
            setTemperatureResult (((temperature - 32) * 5) / 9)
            setScaleResult ('C°')
        } else {
            setTemperatureResult (((temperature * 9) / 5) + 32)
            setScaleResult ('F°')
        }
    }



    return (
        <div>
            <h1>Conversor de Temperatura</h1>

            Temperatura: <br />
            <input type="number" onChange={(event) => setTemperature(event.target.value)} />

            <label>
                <input type="radio" value="F°" 
                    checked={scale === 'F°'}
                    onChange={(event) => setScale(event.target.value)} /> Fahrenheit
            </label>
            <label>
                <input type="radio" value="C°" 
                    checked={scale === 'C°'}
                    onChange={(event) => setScale(event.target.value)} /> Celsius
            </label>

            <br />
            <input type="button" value="Converter" onClick={convert} />

            <br />
            <p>A temperatura é: {temperatureResult} {scaleResult}</p>
        </div>
    )
    

}

export default AppHook


