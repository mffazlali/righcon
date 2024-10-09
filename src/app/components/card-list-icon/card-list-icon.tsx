'use client'
import cls from 'classnames'
import styles from './card-list-icon.module.css'
import CardIcon, { CardIconProps } from '../card-icon/card-icon'

export interface CardListIconProps {
  title: string
  list: CardIconProps[]
  cardContentClass: string
}

const CardListIcon = (props: CardListIconProps) => {
  const raicons = props.list.map((item, index) => (
    <CardIcon
      mode={item.mode}
      fontName={item.fontName}
      fontCode={item.fontCode}
      fontFamily={item.fontFamily}
      fontFarsiName={item.fontFarsiName}
      key={index}
      cardIconClass={item.cardIconClass}
      noSkeleton={true}
    />
  ))

  return (
    <div className={styles.cardListIcon}>
      <div className={styles.cardListIconContainer}>
        <div className={styles.cardTitleWrapper}>
          <div className={styles.cardTitle}>{props.title}</div>
        </div>
        <div className={styles.cardContentWrapper}>
          <div className={cls(styles.cardContent, props.cardContentClass)}>
            {raicons}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardListIcon
