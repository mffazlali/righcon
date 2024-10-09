'use client'
import { IconModel } from '@/app/lib/models/icon-model'
import cls from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import close from '../../../../public/medias/images/close.svg'
import styles from './modal-icon.module.css'
import { useEffect } from 'react'

export interface ModalIconsProps {
  icon: IconModel
  children?: React.ReactNode
}

export function ModalIcon(props: ModalIconsProps) {
  const { fontName, fontStyle, fontCode, fontFarsiName } = props.icon
  const router = useRouter()

  useEffect(() => {
    console.log('open modal')
  }, [])

  const backHandle = (event: any) => {
    if (event.target.id === 'iconsModalContainer') closeModal()
  }

  const closeModal = () => {
    router.back()
  }

  return (
    <div className={styles.modalIcon}>
      <div
        id="iconsModalContainer"
        className={styles.iconsModalContainer}
        onClick={(event) => backHandle(event)}>
        <div className={styles.iconsModalWrapper}>
          <div className={styles.iconsModal}>
            <div className={styles.iconHeaderWrapper}>
              <div className={styles.iconInfo}>
                <div className={styles.fontFarsiName}>
                  <span>{fontFarsiName}</span>
                </div>
                <div className={styles.iconCode}>
                  <span>Uni code: {fontCode}</span>
                </div>
                <div className={styles.iconName}>
                  <span>{fontName}</span>
                </div>
              </div>
              <div className={styles.iconClose}>
                <button
                  className={cls(styles.iconRight, 'btn-primary material')}
                  onClick={closeModal}>
                  <Image
                    src={close}
                    fill={false}
                    alt="خروج"
                    className={styles.closeTarget}></Image>
                </button>
              </div>
            </div>
            <div className={styles.iconsBody}>{props.children}</div>
          </div>
        </div>
      </div>
      <div className={styles.backdrop}></div>
    </div>
  )
}

export default ModalIcon
