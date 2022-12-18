import classNames from 'classnames';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomColor() {
  const backgroundColors = {
    0: '#4ec4fa',
    1: '#a43cf3',
    2: '#e54c67',
    3: '#20b8c6',
    4: '#ff968a',
  };
  return backgroundColors[Math.floor(Math.random() * 5)];
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={classNames(styles.statistics)}>
      {title && <h2 className={classNames(styles.title)}>{title}</h2>}

      <ul className={classNames(styles.statList)}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              style={{
                backgroundColor: getRandomColor(),
              }}
              className={classNames(styles.item)}
              key={id}
            >
              <span className={classNames(styles.label)}>{label}</span>
              <span className={classNames(styles.percentage)}>
                {percentage + '%'}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
