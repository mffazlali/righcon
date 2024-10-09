'use client'
import Button from '@/app/components/button/button'
import Logo from '@/app/components/logo/logo'
import cls from 'classnames'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import download from '../../../../../public/medias/images/download.svg'
import styles from './header.module.css'
import NavBar from './nav-bar/nav-bar'
import NavBarScroll from './nav-scroll/nav-scroll'
import LinkButton from '@/app/components/link/link-button'

/* eslint-disable-next-line */
export interface HeaderProps {
}

const Header = () => {
  const pathname = usePathname()
  const [show, setShow] = useState(true)

  const controlNavbar = () => {
    const scrollY = window.scrollY || 0
    setShow(scrollY < 305)
  }

  const handleDownloadButton = () => {
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
  }, [setShow])

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div
          className={cls(
            pathname !== '/' ? styles.navSection : styles.navSectionHome,
          )}>
          <NavBar />
          <div className={styles.logo}>
            {pathname !== '/' && (
              <Logo logoWrapperClassName={'logoWrapperLarge'} />
            )}
            {pathname === '/' && (
              <Logo logoWrapperClassName={'logoWrapperHome'} />
            )}
            {pathname === '/' && (
              <div className={styles.descriptionWrapper}>
                <div className={styles.description}>
                  <p>
                    رایکن اولین <b>فونت آیکون</b> ایرانی اسلامی است که توسط تیمی از متخصصان گرافیک طراحی و توسعه داده
                    شده
                    است. هدف ما ارائه ابزارهای تراز جهانی با نگاه بومی و بر محور زبان فارسی و فرهنگ ایران زمین است.
                  </p>
                  <br />
                  <p> این شما و این اولین نسخه رسمی ما؛ برای دانلود بر روی دکمه زیر کلیک کنید.</p>
                </div>
                <div className={styles.downloadButtonAction}>
                  <LinkButton
                    nextjsLink={true}
                    href={'/send'}
                    label="دانلود آخرین نسخه"
                    iconSrc={download}
                    iconType="image"
                    onClick={handleDownloadButton}
                    class={cls(styles.downloadButton, 'btn-primary material btn-primary-active material-active')}
                  />
                  {/*<LinkButton href={'/fonts/righcon/webfonts/Righcon-Ver1.0.rar'}*/}
                  {/*            label="دانلود آخرین نسخه"*/}
                  {/*            iconSrc={download}*/}
                  {/*            iconType="image"*/}
                  {/*            onClick={handleDownloadButton}*/}
                  {/*            class={cls(*/}
                  {/*    styles.downloadButton,*/}
                  {/*    'link-primary material-link link-primary-active',*/}
                  {/*  )}*/}
                  {/*/>*/}
                </div>
                <div className={styles.versionWrapper}>
                  <span className={styles.version}>Ver 1.0.1 </span>
                </div>
              </div>
            )}

          </div>
        </div>
        <div
          className={cls(
            styles.navSectionScroll,
            show ? 'h-[0px] opacity-0' : 'h-[80px] opacity-100',
          )}>
          <NavBarScroll />
        </div>
      </div>
    </header>
  )
}

export default Header
