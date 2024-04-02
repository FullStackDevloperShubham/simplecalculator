import style from '../components/Display.module.css'
const Display = ({ displayValue }) => {
    return (
        <input type="text" className={style.display} value={displayValue} readOnly />
    )
}

export default Display