import './line.css'


const Line = ({color}) => {

    const style =  {
        backgroundColor: color
    }

    return (<div className="line" style={style}></div>)
}

export default Line;