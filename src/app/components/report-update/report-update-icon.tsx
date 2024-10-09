import styles from './report-update.module.css'
import cls from 'classnames'
import pageDownload from '../../../../public/medias/images/page-download.svg'
import download from '../../../../public/medias/images/download.svg'
import Image from 'next/image'
import Button from '../button/button'
import LinkButton from '@/app/components/link/link-button'

export interface ReportUpdateProps {
}

const ReportUpdate = (props: ReportUpdateProps) => {
  const handleDownloadButton = () => {
  }
  return (
    <div className={styles.reportUpdate}>
      <div className={styles.reportUpdateContainer}>
        <div className={styles.updateWrapper}>
          <div className={styles.update}>
            <div className={styles.lastUpdateImageWrapper}>
              <Image
                src={pageDownload}
                alt=""
                fill={false}
                className={styles.lastUpdateImage}></Image>
            </div>
            <div className={styles.lastUpdateSectionWrapper}>
              <div className={styles.lastUpdateSection}>
                <div className={styles.lastUpdateTitleWrapper}>
                  <div className={styles.lastUpdateTitle}>
                    <span className={styles.titleTarget}>
                      آخرین‌ تغییرات نسخه
                    </span>
                    <span className={styles.versionTarget}>Ver 1.0</span>
                  </div>
                </div>
                <div className={styles.lastUpdateItemsWrapper}>
                  <ul className={styles.lastUpdateItems}>
                    <li className={styles.lastUpdateItemWrapper}>
                      <p className={styles.lastUpdateItem}>
محصول نسخه یک رایکن، محصول صدها ساعت تحقیق و بررسی انواع المان ها و مشاهده و بررسی انواع محصولات مشابه خارجی است. ادعا نداریم که بهترین هستیم لیکن در توسعه نسخه اولین تمامی تلاش خود را کرده ایم که استانداردهای موجود برای طراحی در فونت آیکون ها را رعایت کرده باشیم لیکن در این مسیر از توصیه های دلسوزانه و نقد های شما استقبال می کنیم.                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.lastUpdateButtonWrapper}>
                <LinkButton
                  href={'/fonts/righcon/webfonts/Righcon-Ver1.0.rar'}
                  label="دانلود آخرین نسخه"
                  iconSrc={download}
                  iconType="image"
                  onClick={handleDownloadButton}
                  class={cls(
                    styles.lastUpdateButton,
                    'link-primary material-link link-primary-active',
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportUpdate
