import Image from 'next/image'
import logo from '../../../../public/medias/images/logo.svg'
import styles from './logo.module.css'

/* eslint-disable-next-line */
export interface logoProps {
  logoWrapperClassName: string
  children?: React.ReactNode
}

const Logo = (props: logoProps) => {

  return (
    <div className={styles.logo}>
      <div className={styles[props.logoWrapperClassName]}>
        <Image
          src={logo}
          fill={true}
          alt=""
          className={styles.logoTarget}></Image>
      </div>
    </div>
  )
}

export default Logo
