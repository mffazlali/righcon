'use client'
import cls from 'classnames'
import styles from './card-specs.module.css'
import Image from 'next/image'

export interface CardSpecsProps {
  iconSrc: string
  iconClass: string
  description: string
}

const CardSpecs = (props: CardSpecsProps) => {

  return (
    <div className={styles.cardSpecs}>
      <div className={styles.cardSpecsContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src={props.iconSrc}
            alt=""
            fill={false}
            className={cls(styles.image, props.iconClass)}
          />
        </div>
        <div className={styles.descriptionWrapper}>
          <p className={cls(styles.description)}>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardSpecs
