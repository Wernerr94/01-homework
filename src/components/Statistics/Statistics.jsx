import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const getColor = () => {
    const randomColor = `rgb(
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)},
      ${Math.floor(Math.random() * 255)})`;
    return randomColor;
  };
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(el => (
          <li
            key={el.id}
            className={css.item}
            style={{ backgroundColor: `${getColor()}` }}
          >
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
