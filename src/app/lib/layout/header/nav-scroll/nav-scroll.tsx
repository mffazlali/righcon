'use client'
import Button from '@/app/components/button/button'
import Logo from '@/app/components/logo/logo'
import MenuBar from '@/app/components/menu-bar/menu-bar'
import cls from 'classnames'
import download from '../../../../../../public/medias/images/download.svg'
import styles from './nav-scroll.module.css'
import LinkButton from '@/app/components/link/link-button'

export interface NavScrollProps {
}

const NavBarScroll = (props: NavScrollProps) => {
  const handleDownloadButton = () => {
  }

  return (
    <nav className={styles.navScroll}>
      <div className={styles.navScrollWrapper}>
        <div className={styles.logo}>
          <Logo logoWrapperClassName={'logoWrapperScroll'} />
        </div>

        <MenuBar showMode="scroll" toggleMenu={''} />
        <div className={styles.downloadButtonAction}>
          <LinkButton
            href={'/fonts/righcon/webfonts/Righcon-Ver1.0.rar'}
            label="دانلود آخرین نسخه"
            iconSrc={download}
            iconType="image"
            onClick={handleDownloadButton}
            class={cls(styles.downloadButton, 'link-primary material-link link-primary-active')}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBarScroll
