import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles.module.css';

export function Spinner() {
  return (
    <div className={styles.spinner}>
      <CircularProgress />
    </div>
  );
}
