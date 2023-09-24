import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button ({text, chagneCount}){
    return <button className={styles.btn} onClick={chagneCount}>{text}</button>
}

Button.propTypes = {
    text : PropTypes.string.isRequired
}
export default Button;