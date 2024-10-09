'use client'
import cls from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './link-icon.module.css'

export interface LinkProps {
  class?: string
  iconClass?: string
  href: string
  iconSrc: string
}

const LinkIcon = (props: LinkProps) => {

  return (
      <Link className={cls(styles.linkIconWrapper,props.class)} href={props.href}>
        <Image
          src={props.iconSrc}
          fill={false}
          alt=""
          className={props.iconClass}></Image>
      </Link>
  )
}
export default LinkIcon
