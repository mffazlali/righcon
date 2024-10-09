import Button from '@/app/components/button/button'
import Logo from '@/app/components/logo/logo'
import cls from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import arrowUp from '../../../../../public/medias/images/arrow-up.svg'
import bale from '../../../../../public/medias/images/brands-bale.svg'
import instagram from '../../../../../public/medias/images/brands-instagram.svg'
import rubica from '../../../../../public/medias/images/brands-rubica.svg'
import telegram from '../../../../../public/medias/images/brands-telegram.svg'
import styles from './footer.module.css'

/* eslint-disable-next-line */
export interface FooterProps {
}

const Footer = () => {
  const upButtonHandler = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <div className={styles.footerCol}>
            <Logo logoWrapperClassName={'logoWrapperFooter'} />
          </div>
          <div className={styles.footerCol}>
            <div className={styles.aboutWrapper}>
              <p className={styles.about}>
                <span className={styles.highlight}>رایکن</span> اولین فونت آیکون ایرانی اسلامی است که توسط تیمی از متخصصان گرافیک طراحی و توسعه داده شده
                است. هدف ما ارائه ابزارهای تراز جهانی با نگاه بومی و بر محور زبان فارسی و فرهنگ ایران زمین است. هم اکنون
                و در ابتدای این مسیر هستیم و در ادامه این مسیر به یاری و نقدهای سازنده تمامی دوستداران فرهنگی فارسی و
                ایران زمین محتاج هستیم. برای ارتباط با ما می توانید از طریق لینک تماس با ما پیام خود را با ما در میان
                بگذارید.
              </p>
            </div>
          </div>
          <div className={styles.footerLinkCol}>
            <div className={styles.linksWrapper}>
              <div className={styles.links}>
                <div className={styles.linkWrapper}>
                  <Link href={'/'} className={styles.link}>
                    صفحه اصلی
                  </Link>
                </div>
                <div className={styles.linkWrapper}>
                  <Link href={'/download'} className={styles.link}>
                    دانلود
                  </Link>
                </div>
                <div className={styles.linkWrapper}>
                  <Link href={'/help'} className={styles.link}>
                    راهنما
                  </Link>
                </div>
                <div className={styles.linkWrapper}>
                  <Link href={'/search'} className={styles.link}>
                    جستجو
                  </Link>
                </div>
                <div className={styles.linkWrapper}>
                  <Link href={'/about'} className={styles.link}>
                    درباره ما
                  </Link>
                </div>
              </div>
              <div className={styles.links}>
                <div className={styles.linkWrapper}>
                  <Link href={'/raino'} className={styles.link}>
                    راینو
                  </Link>
                </div>
                <div className={styles.linkWrapper}>
                  <Link href={'/fontiran'} className={styles.link}>
                    فونت ایران
                  </Link>
                </div>
                <div className={styles.linkWrapper}>
                  <Link href={'/relatedlink'} className={styles.link}>
                    لینک‌های مرتبط
                  </Link>
                </div>
                <div className={styles.linkWrapper}>
                  <Link href={'/raino'} className={styles.link}>
                    راینو
                  </Link>
                </div>
                <div className={styles.linkWrapper}>
                  <Link href={'/fontiran'} className={styles.link}>
                    فونت ایران
                  </Link>
                </div>
                <div className={styles.linkWrapper}>
                  <Link href={'/relatedlink'} className={styles.link}>
                    لینک‌های مرتبط
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.upButtonAction}>
            <Button
              label={''}
              iconSrc={arrowUp}
              iconType="image"
              onClick={upButtonHandler}
              class={cls(styles.upButton, 'btn-primary material btn-primary-active material-active')}
              iconClass={styles.upButtonIcon}
            />
          </div>
          <div className={styles.footerEmptyCol}></div>
          <div className={styles.footerRow}>
            <div className={styles.footerTwoCol}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>info@Righcon.ir</div>
                <div className={styles.email}>Righno.ir</div>
              </div>
            </div>
            <div className={styles.footerTwoCol}>
              <div className={styles.socialNetworkWrapper}>
                <div className={styles.socialNetworkTitleWrapper}>
                  <div className={styles.socialNetworkTitle}>
                    ما را در شبکه‌های اجتماعی دنبال کنید
                  </div>
                </div>
                <div className={styles.socialNetworkIconWrapper}>
                  <div className={styles.socialNetworkIcon}>
                    <Link href={'/'}>
                      <Image
                        src={bale}
                        fill={false}
                        alt=""
                        className={styles.iconTarget}></Image>
                    </Link>
                  </div>
                  <div className={styles.socialNetworkIcon}>
                    <Link href={'/'}>
                      <Image
                        src={rubica}
                        fill={false}
                        alt=""
                        className={styles.iconTarget}></Image>
                    </Link>
                  </div>
                  <div className={styles.socialNetworkIcon}>
                    <Link href={'/'}>
                      <Image
                        src={telegram}
                        fill={false}
                        alt=""
                        className={styles.iconTarget}></Image>
                    </Link>
                  </div>
                  <div className={styles.socialNetworkIcon}>
                    <Link href={'/'}>
                      <Image
                        src={instagram}
                        fill={false}
                        alt=""
                        className={styles.iconTarget}></Image>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyRightWrapper}>
            <div className={styles.copyRight}>
              © تمامی حقوق مادی و معنوی سایت متعلق به راینو است
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
