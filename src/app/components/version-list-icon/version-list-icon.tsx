import styles from './version-list-icon.module.css'
import cls from 'classnames'
import pageDownload from '../../../../public/medias/images/page-download.svg'
import download from '../../../../public/medias/images/download.svg'
import Image from 'next/image'
import Button from '../button/button'
import LinkButton from '@/app/components/link/link-button'

/* eslint-disable-next-line */
export interface VersionListIconProps {}

const VersionListIcon = (props: VersionListIconProps) => {
  const versionList = [
    { name: 'a1', version: 'Ver 1.0.0', click: () => {} },
    { name: 'a1', version: 'Ver 0.0.8', click: () => {} },
    { name: 'a1', version: 'Ver 0.0.5', click: () => {} },
    { name: 'a1', version: 'Ver 0.0.3', click: () => {} },
    { name: 'a1', version: 'Ver 0.0.1', click: () => {} },
  ]

  const getVersionEl = () => {
    return versionList.map((item, index) => {
      return (
          <div key={index} className={styles.otherVersionItems}>
            <div className={styles.imageItemWrapper}>
              <Image
                src={pageDownload}
                alt=""
                fill={false}
                className={styles.imageItem}></Image>
            </div>
            <div className={styles.textItemWrapper}>
              <span className={styles.textItem}>{item.version}</span>
            </div>
            <div className={styles.buttonItemWrapper}>
              <LinkButton
                href={'/fonts/righcon/webfonts/Righcon-Ver1.0.rar'}
                label="دانلود آخرین نسخه"
                iconSrc={download}
                iconType="image"
                onClick={item.click}
                class={cls(
                  styles.buttonItem,
                  'link-primary material-link link-primary-active'
                )}
              />
            </div>
          </div>
      )
    })
  }

  return (
    <div className={styles.versionListIcon}>
      <div className={styles.versionListIconContainer}>
        <div className={styles.otherVersionWrapper}>
          <div className={styles.otherVersion}>
            <div className={styles.otherVersionTitleWrapper}>
              <h3 className={styles.otherVersionTitle}>نسخه‌های دیگر</h3>
            </div>
            <div className={styles.otherVersionContentWrapper}>
              <div className={styles.otherVersionContent}>{getVersionEl()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VersionListIcon
