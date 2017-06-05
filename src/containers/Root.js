import React from 'react'
import styles from './Root.scss'

function getMessage() {
  return 'Hello World'
}

export default () => (
  <div>
    <h1 className={styles.hello}>{getMessage()}</h1>
    <div>Hello React Hot Loader!</div>
  </div>
)