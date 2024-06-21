import styles from "./ErrorMessage.module.css";

let ErrorMessage = ({ items }) => {
    return (
        <>
            {
                items.length === 0 ? <h1 className={styles.errorMessage}>I Don't have food!😥</h1> : null
            }
        </>
    );
}

export default ErrorMessage;