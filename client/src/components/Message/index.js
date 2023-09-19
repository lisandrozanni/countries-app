import { Paper, Typography } from '@material-ui/core';

import styles from './styles.module.css';

export function Message({ text }) {
  return (
    <Paper elevation={3} className={styles.container}>
      <Typography variant='body1' className={styles.text}>
        {text}
      </Typography>
    </Paper>
  );
}
