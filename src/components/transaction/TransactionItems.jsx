import PropTypes from 'prop-types';
import styles from './Transaction.module.css';


export const TransactionItems = ({ type, amount, currency }) => {
    return (
        <tr className={styles.table__body}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>      
    );
};

TransactionItems.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
}
