import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

// const title = <h2 className="title">Upload stats</h2>;

export const Statistics = ({ title, stats }) => {
  return (
      <section className={styles.statistics}>
      {title && <h2 className={styles.title}> {title} </h2>}
    
        <ul className={styles.stat__list}>
            {stats.map(stats => (
            <li key={stats.id} className={styles.item} style={{ background: getRandomHexColor() }}>
                <span className={styles.label}>{stats.label}</span>
                <span className={styles.percentage}>{stats.percentage}%</span>
            </li>
            ))}
        </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};


// import PropTypes from 'prop-types';

// function Statistics({ title, stats }) {
//     return (
//         <div>
//             {/* {title && <h2>{title}</h2>} */}
//             {stats.map(stat => (
//                 <Statistics
//                     key={stat.id}
//                     label={stat.label}
//                     percentage={stat.percentage}
//                 />
//             ))}
//         </div>
//     )
// };

// Statistics.propTypes = {
//     title: PropTypes.string,
// };

// export default Statistics;






