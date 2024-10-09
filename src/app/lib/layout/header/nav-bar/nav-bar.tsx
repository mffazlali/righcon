'use client'
import { useState } from 'react'
import styles from './nav-bar.module.css'
import Image from 'next/image'
import menuShow from '../../../../../../public/medias/images/menu-show.svg'
import menuClose from '../../../../../../public/medias/images/menu-close.svg'
import Logo from '@/app/components/logo/logo'
import MenuBar from '@/app/components/menu-bar/menu-bar'
import SwitchButton from '@/app/components/switch-button/switch-button'

export interface NavBarProps {}

const NavBar = (props: NavBarProps) => {
  const [showMenu, setShowMenu] = useState(true)
  const [result, setResult] = useState('menuWrapper')
  const [menuToggle, setMenuToggle] = useState(menuClose)
  const showMenuHandle = (small: boolean) => {
    setShowMenu(!showMenu)
    if (showMenu) {
      setMenuToggle(menuShow)
    } else {
      setMenuToggle(menuClose)
    }
    if (showMenu) {
      setResult('menuWrapperHidden')
    } else {
      setResult('menuWrapper')
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <div className={styles.menuListSmall}>
          <button>
            <Image
              src={menuToggle}
              fill={false}
              alt=""
              className={styles.menuItem}
              onClick={() => showMenuHandle(true)}></Image>
          </button>
        </div>

        <div className={styles.logo}>
          <Logo logoWrapperClassName={'logoWrapperSmall'} />
        </div>

        <MenuBar showMode="raw" toggleMenu={result} />
      </div>
      <div className={styles.switchWrapper}>
        {/* <SwitchButton disable={true}></SwitchButton> */}
      </div>
    </nav>
  )
}

export default NavBar
