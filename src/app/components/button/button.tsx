'use client'
import cls from 'classnames'
import Image from 'next/image'
import styles from './button.module.css'

export interface ButtonProps {
  onClick: () => any
  class?: string
  iconClass?: string
  label: string
  iconSrc: string
  iconType?: 'class' | 'image'
}

const Button = (props: ButtonProps) => {
  const handleClick = () => {
    props.onClick()
  }

  const getIconElement = () => {
    let element = null
    switch (props.iconType) {
      case 'class':
        element = <span className={props.iconSrc}></span>
        break
      case 'image':
        element = (
          <Image
            src={props.iconSrc}
            fill={false}
            alt=""
            style={{width:'auto',height:'auto'}}
            className={props.iconClass}></Image>
        )
        break
      default:
        break
    }
    return element
  }

  const iconElement = getIconElement()

  return (
    <div className={styles.button}>
      <button
        onClick={() => handleClick()}
        className={cls(styles.buttonTarget, props.class)}>
        {iconElement != null && <span>{iconElement}</span>}
        {props.label != null && props.label != '' && <span>{props.label}</span>}
      </button>
    </div>
  )
}
export default Button
