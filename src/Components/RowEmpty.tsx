import React from 'react'
import Box from './Box'
import styles from './row.module.scss';

const RowEmpty = () => {
  return (
    <div className={styles.row}>
      {Array.from(Array(5)).map((_, i) => (
        <Box key={i} value="" status="empty" />
      ))}
    </div>
  )
}

export default RowEmpty;
