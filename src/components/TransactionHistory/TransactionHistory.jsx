import classNames from 'classnames';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={classNames(styles.transactionHistory)}>
      <thead className={classNames(styles.tableHead)}>
        <tr>
          <th className={classNames(styles.tableHeadings)}>Type</th>
          <th className={classNames(styles.tableHeadings)}>Amount</th>
          <th className={classNames(styles.tableHeadings)}>Currency</th>
        </tr>
      </thead>
      <tbody className={classNames(styles.tableBody)}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={classNames(styles.tableRow)} key={id}>
              <td className={classNames(styles.tableData)}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
