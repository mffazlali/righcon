'use client'
import cls from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import navHome from '../../../../public/medias/images/nav-home.svg'
import navSearch from '../../../../public/medias/images/nav-search.svg'
import navDownload from '../../../../public/medias/images/nav-download.svg'
import navHelp from '../../../../public/medias/images/nav-help.svg'
import styles from './menu-bar.module.css'
import { useIconStore } from '@/app/lib/stores/icons'
import {useRouter} from 'next/navigation'

export interface MenuBarProps {
  showMode: 'raw' | 'scroll'
  toggleMenu: string
}

const MenuBar = (props: MenuBarProps) => {
  const pathname = usePathname()
  const changeCategoryType = useIconStore(state => state.changeCategoryType)
  const router=useRouter()

  return (
    <div
      id="menuWrapper"
      className={cls(
        props.showMode === 'raw' ? styles[props.toggleMenu] : styles.menuWrapperScroll,
      )}>
      <div className={styles.textItemWrapper}>
        <Link href={'/'} className={`${pathname === '/' ? styles.active : ''}`}>
          {pathname === '/' && (
            <Image
              src={navHome}
              fill={false}
              alt=""
              className={styles.linkIcon}></Image>
          )}
          صفحه اصلی
        </Link>
      </div>
      <div className={styles.textItemWrapper}>
        <Link
          href={'/download'}
          className={`${pathname === '/download' ? styles.active : ''}`}>
          {pathname === '/download' && (
            <Image
              src={navDownload}
              fill={false}
              alt=""
              className={styles.linkIcon}></Image>
          )}
          دانلود
        </Link>
      </div>
      <div className={styles.textItemWrapper}>
        <Link
          href={'/help'}
          className={`${pathname === '/help' ? styles.active : ''}`}>
          {pathname === '/help' && (
            <Image
              src={navHelp}
              fill={false}
              alt=""
              className={styles.linkIcon}></Image>
          )}
          <span>راهنما</span>
        </Link>
      </div>
      <div className={styles.textItemWrapper}>
        <Link
          href={'/search'}
          onClick={(event) => {
            event.preventDefault()
            changeCategoryType(null)
            router.push('search')
          }}
          className={`${pathname === '/search' ? styles.active : ''}`}>
          {pathname === '/search' && (
            <Image
              src={navSearch}
              fill={false}
              alt=""
              className={styles.linkIcon}></Image>
          )}
          جستجو
        </Link>
      </div>
      <div className={styles.textItemWrapper}>
        <Link
          href={'https://righno.com/'}
          className={`${pathname === '/about' ? styles.active : ''}`}>
          <span>درباره ما</span>
        </Link>
      </div>
    </div>
  )
}

export default MenuBar
