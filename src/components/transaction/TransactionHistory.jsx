import PropTypes from 'prop-types';
import { TransactionItems } from './TransactionItems';
import styles from './Transaction.module.css';

export const TransactionHistory = ({ items }) => {
  // console.log(items); 
  return (
    <table className={styles.transaction__history}>
      <thead className={styles.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <TransactionItems
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          )
        })}
      </tbody>
    </table>
  )
}


export default TransactionHistory;

TransactionHistory.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

