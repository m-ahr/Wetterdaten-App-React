import React from "react";
import "./statistic.css"

    // http://www.wetter24.de/vorhersage/klima/deutschland/n%C3%BCmbrecht/18220743/
   
    const Bar = ({label, value, scale}) => {
        const valueStyle = {height: scale * value + 'px'}
    

    return  <div className="bar">
                <div className="value" style={valueStyle}>{value}</div>
                <div className="label">{label}</div>
            </div>
}
///////////////////////////////////////////////////////
const Chart = ({ data, unit, title, scale }) => {
    return  <div className="chart-container">
                <h3 className="chart-title">{title}</h3>
                <h4 className="chart-title">Einheit: {unit}</h4>

                <div className="chart">
                    {Object.entries(data).map((pair) => <Bar key={pair} label={pair[0]} value={pair[1]} scale={scale} />)}
                </div>
            </div>
}
///////////////////////////////////////////////////////////
const ChartSelector = ({ data, title, unit, scale }) => {

    const [Jahr, setJahr] = useState(2020)

    const JahreMitDaten = Object.keys(data)

    const JahrHoch = () => {
        if(JahreMitDaten.includes(String(Jahr -1))) {
            setJahr(Jahr -1)
        } else {
            alert(`Keine Daten fuer das Jahr ${year - 1} vorhanden.`)
        }
    }

    const JahrRunter = () => {
        if(JahreMitDaten.includes(String(Jahr +1))) {
            setJahr(Jahr +1)
        } else {
            alert(`Keine Daten fuer das Jahr ${year + 1} vorhanden.`)
        }
    }

    // Logik um eine Komponentenhöhe rechts zu bekommen

    const totalMaximum = () => {
        const jaehrlicheMaxima = [];
        Object.values(data).forEach(yearData => {
            const jaehrlichesMaximum = Math.max(...Object.values(yearData))
            jaehrlicheMaxima.push(jaehrlichesMaximum)
        })
        return Math.max(...jaehrlicheMaxima)
    }

    // Die 350 sind ein Trick welche die Höhe der Titel und Label und Margins beinhalten
    const extraHoehe = 350
    const initialHoehe = (scale * totalMaximum() + extraHoehe)

    const [Hoehe,setHoehe] = useState(initialHoehe)

    // nicht robust implementiert
    const extractNummer = cssString => {
        return cssString.substring(0, cssString.length -2)
    }

    // Referenzen zu den realen HTML Elementen
    const charttSelectorRef = React.useRef();
    const chartRef = React.useRef();

    // Mach die folgende nach dem ersten Rendering der Komponente
    React.useEffect(() => {
        const chartHoehe = extractNummer(getComputedStyle(chartRef.current).getPropertyValue('height'))
    })

    const chartSelectorStyle = { height: height + 'px' }

    return (
        <div ref={chartSelectorRef} className="chart-selector" style={chartSelectorStyle}>
            <h2 className="chart-selector-title">{title}</h2>
            <div ref={chartRef}>
                <Chart data={data[Jahr]} title={Jahr} unit={unit} scale={scale} />
            </div>
            <div className="year-controls">
                <button onClick={JahrRunter}>-</button>
                {Jahr}
                <button onClick={JahrHoch}>+</button>
            </div>
        </div>
    )

}
export default Statistic();