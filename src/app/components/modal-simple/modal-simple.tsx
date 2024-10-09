'use client'
import { IconModel } from '@/app/lib/models/icon-model'
import cls from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import close from '../../../../public/medias/images/close.svg'
import styles from './modal-simple.module.css'
import { useEffect } from 'react'

export interface ModalSimpleProps {
  title: String,
  children?: React.ReactNode
}

export function ModalSimple(props: ModalSimpleProps) {
  const router = useRouter()

  useEffect(() => {
    console.log('open modal')
  }, [])

  const backHandle = (event: any) => {
    // if (event.target.id === 'iconsModalContainer') closeModal()
  }

  const closeModal = () => {
    router.back()
  }

  return (
    <div className={styles.modalSimple}>
      <div
        className={styles.modalContainer}
        onClick={(event) => backHandle(event)}>
        <div className={styles.modalWrapper} id="iconsModalContainer">
          <div className={styles.modal}>
            <div className={styles.modalHeaderWrapper}>
              <div className={styles.modalHeader}>
                <span>{props.title}</span>
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
            <div className={styles.modalBody}>{props.children}</div>
          </div>
        </div>
      </div>
      <div className={styles.backdrop}></div>
    </div>
  )
}

export default ModalSimple
