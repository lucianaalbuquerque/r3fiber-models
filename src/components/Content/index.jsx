import React from 'react'
import styles from './content.module.scss'

const Content = () => {
  return (
    <section className={styles.content}>
      <h1>Daily news</h1>
      <div classname={styles.article}>
        <p>Scientists agree that the planet is warming up faster than ever because of the vast amount of greenhouse gases that humans are pumping into the atmosphere. This includes activities such as burning fossil fuels (coal, oil and gas), driving cars and cutting down forests.</p>
      </div>
    </section>
  )
}

export default Content