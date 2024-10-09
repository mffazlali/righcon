import EmailInput from '../email-input/email-input'
import styles from './newsletters.module.css'
import cls from 'classnames'

/* eslint-disable-next-line */
export interface NewslettersProps {
  onClickMemberShip: () => any
  onInputEmail: (value: string) => any
}

const Newsletters = (props: NewslettersProps) => {
  const handleMemberShip = () => {
    if (props.onClickMemberShip) {
      props.onClickMemberShip()
    }
  }
  const handleInputEmail = (value: string) => {
    if (props.onInputEmail) {
      props.onInputEmail(value)
    }
  }

  return (
    <div className={styles.newsletters}>
      <div className={styles.newslettersContainer}>
        <div className={styles.newslettersTitlesWrapper}>
          <div className="">
            <span className={styles.newslettersTitle}>عضویت در خبرنامه</span>
          </div>
          <div className="">
            <span className={styles.newslettersSubTitle}>
              از همه بروز‌رسانی‌ها و اخبار رایکن با خبر باش
            </span>
          </div>
        </div>
        <div className={styles.newslettersFormWrapper}>
          <div className={styles.form}>
            <div className={styles.inputWrapper}>
              <EmailInput
                disable={false}
                class={styles.input}
                onInput={(event) => handleInputEmail(event)}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <button
                type="button"
                className={cls(styles.button,'btn-warning material btn-warning-active material-active')}
                onClick={handleMemberShip}>
                عضویت
              </button>
            </div>
          </div>
          <div className="">
            <span className={styles.info}>
              ما به
              <span className="text-warning"> حریم خصوصی </span>
              شما اهمیت می‌دهیم
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletters
