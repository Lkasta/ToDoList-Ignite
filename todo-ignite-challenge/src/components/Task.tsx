import styles from './Task.module.css'

import { Circle, Trash } from '@phosphor-icons/react'


export function Task() {
  return (
    <div className={styles.task}>
      <strong className={styles.circle}></strong>
      <p>Integer urna interdum libero auctor neque turpis turpis semper. Duis vel sed fames integer urna interdum.</p>
      <span className={styles.trash}>
        <Trash size={20} />
      </span>
    </div>
  )
}