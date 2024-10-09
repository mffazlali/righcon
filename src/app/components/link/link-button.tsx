'use client'
import cls from 'classnames'
import Image from 'next/image'
import styles from './link-button.module.css'
import Link from 'next/link'

export interface LinkProps {
  href: string
  onClick?: (event?: any) => any
  class?: string
  iconClass?: string
  label: string
  iconSrc: string
  iconType?: 'class' | 'image'
  nextjsLink?: boolean
}

const LinkButton = (props: LinkProps) => {
  const handleClick = (event: any) => {
    if (props.onClick)
      props.onClick(event)
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
    props.nextjsLink ?
      <Link href={props.href}
         onClick={(event) => handleClick(event)}
         className={cls(styles.linkButton, props.class)}>
        {iconElement != null && <span>{iconElement}</span>}
        {props.label != null && props.label != '' && <span>{props.label}</span>}
      </Link>
      :
      <a href={props.href}
         onClick={(event) => handleClick(event)}
         download
         className={cls(styles.linkButton, props.class)}>
        {iconElement != null && <span>{iconElement}</span>}
        {props.label != null && props.label != '' && <span>{props.label}</span>}
      </a>
  )
}
export default LinkButton
