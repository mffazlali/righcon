'use client'
import { Suspense, useEffect } from 'react'
import Footer from './footer/footer'
import Header from './header/header'
import styles from './layout.module.css'
import Loading from '@/app/components/loading/loading'
import { checkDarkMode } from '@/app/lib/utilities/activeDarkMode'
import { useLayoutStore } from '@/app/lib/stores/layout.'

export interface LayoutProps {
  children?: React.ReactNode
}

const Layout = (props:LayoutProps) => {
  const setDarkMode=useLayoutStore(state=>state.setDarkMode)

  useEffect(() => {
    setDarkMode(checkDarkMode())
  }, [])

  return (
    <div className={styles.layout}>
      <Header />
      <Suspense fallback={<Loading/>}>
      {props.children}
      </Suspense>
      <Footer />
    </div>
  )
}

export default Layout
