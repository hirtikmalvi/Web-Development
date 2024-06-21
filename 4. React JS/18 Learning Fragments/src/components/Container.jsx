import styles from "./Container.module.css"

let Container = ({ children }) => {

    return (
        <div className={styles.containerStyle}>
            {children}
        </div>
    )

}

export default Container;