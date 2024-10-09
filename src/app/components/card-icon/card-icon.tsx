'use client'
import cls from 'classnames'
import Link from 'next/link'
import styles from './card-icon.module.css'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

export interface CardIconProps {
  fontName: string
  fontFarsiName: string
  fontCode: string
  fontFamily: string
  mode: 'square' | 'rect'
  cardIconClass?: string
  noSkeleton?: boolean
}

const CardIcon = (props: CardIconProps) => {
  const router = useRouter()

  const iconClickHandler = (event: any, dataObject: any) => {
    event.preventDefault()
    router.push(`${dataObject.pathname}?f=${dataObject.query.f}&u=${dataObject.query.u}&a=${dataObject.query.a}`, { scroll: true })
  }
  const getFontIcon = useCallback(() => {
    let result = null
    if (props.noSkeleton) {
      if (props.mode === 'square') {
        result = (
          <Link
            onClick={(event) => {
              iconClickHandler(event, {
                pathname: `/icon/${props.fontName}`,
                query: {
                  f: props.fontFamily,
                  u: props.fontCode,
                  a: props.fontFarsiName,
                },
              })
            }}
            scroll={false}
            className={cls(styles.cardIcon, props.cardIconClass)}
            href={{
              pathname: `/icon/${props.fontName}`,
              query: {
                f: props.fontFamily,
                u: props.fontCode,
                a: props.fontFarsiName,
              },
            }}>
            <div className={styles.fontWrapper}>
              <i
                className={cls(
                  styles.fontIcon,
                  `${props.fontFamily}`,
                  'ri-' + props.fontName,
                )}></i>
              <span className={styles.fontName}>{props.fontName}</span>
              <span className={styles.fontFarsiName}>{props.fontFarsiName}</span>
              {/* <span className={styles.fontCode}>{props.fontCode}</span> */}
            </div>
          </Link>
        )
      } else {
        result = (
          <div className={cls(styles.cardIconRect, props.cardIconClass)}>
            <Link
              className={styles.fontWrapper}
              href={{
                pathname: `/icon/${props.fontName}`,
                query: {
                  f: props.fontFamily,
                  u: props.fontCode,
                  a: props.fontFarsiName,
                },
              }}>
              <i
                className={cls(
                  styles.fontIcon,
                  `${props.fontFamily}`,
                  'ri-' + props.fontName,
                )}></i>
              <div className={styles.fontInfo}>
                <span className={styles.fontName}>{props.fontName}</span>
                <span className={styles.fontFarsiName}>
                {props.fontFarsiName}
              </span>
                {/* <span className={styles.fontCode}>{props.fontCode}</span> */}
              </div>
            </Link>
          </div>
        )
      }
    } else {
      result = (
        <div className={cls(styles.fontWrapperSkeleton, 'animate-pulse')}>
          <i
            className={cls(
              styles.fontIcon,
              'rounded-full bg-gray-300 shadow h-10 w-10 !top-[20px]',
            )}></i>
          <div className="grid grid-cols-6 gap-4">
            <div className="h-2 bg-gray-300 rounded col-span-6"></div>
          </div>
          <div className="grid grid-cols-6 gap-4 mt-7">
            <div className="h-2 bg-gray-300 rounded col-span-6"></div>
          </div>
        </div>
      )
    }
    return result
  }, [props])

  return (
    <>
      {getFontIcon()}
    </>
  )
}

export default CardIcon
