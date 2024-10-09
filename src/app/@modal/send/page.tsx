'use client'
import ModalSimple from '@/app/components/modal-simple/modal-simple'
import styles from './styles.module.css'
import cls from 'classnames'
import TextInput from '@/app/components/text-input/text-input'
import user from '../../../../public/medias/images/user.svg'
import mobile from '../../../../public/medias/images/mobile.svg'
import email from '../../../../public/medias/images/email.svg'
import useForm from '@/app/lib/utilities/useForm'
import NumberInput from '@/app/components/number-input/number-input'
import { FormikHelpers } from 'formik'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import axios from 'axios'
import { data } from 'autoprefixer'
import Spinner from '@/app/components/spinner/Spinner'

export default function IconModal() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const linkRef = useRef<HTMLAnchorElement>(null)


  const handleSend = async (values: any, actions: FormikHelpers<any>) => {
    setIsLoading(true)
    try {
      const res = await axios.post('/api/send', { ...values })
      if (res.status === 200) {
        if (linkRef.current) {
          linkRef.current.click()
          setTimeout(() => {
            router.back()
          }, 100)
        }
      }else{
        setIsLoading(false)
      }
    } catch (e) {
      setIsLoading(false)
    }
  }

  const { form } = useForm({
    formGroup: {
      'name': {
        value: '', validations: [{
          'required': 'وارد کردن نام و نام خانوادگی الزامی است',
        }],
      },
      'mobile': {
        value: '', validations: [{
          'required': 'وارد کردن شماره همراه الزامی است',
          'mobile': 'شماره همراه معتبر نمی باشد',
        }],
      },
      'email': {
        value: '', validations: [{
          'required': 'وارد کردن ایمیل الزامی است',
          'email': 'ایمیل معتبر نمی باشد',
        }],
      },
    },
    handleSubmit: handleSend,
  })

  return (
    <ModalSimple title={'ارسال مشخصات'}>
      <div className={styles.send}>
        <div className={styles.sendContainer}>
          <div className={styles.sendFormWrapper}>
            <form onSubmit={form.handleSubmit}>
              <div className={styles.form}>
                <div className={styles.inputWrapper}>
                  <TextInput
                    name={'name'}
                    disable={isLoading}
                    class={styles.input}
                    placeholder={'نام و نام خانوادگی خود را وارد کنید'}
                    prefixIcon={user}
                    onChange={(e) => form.handleChange(e)}
                  />
                  <span className={styles.error}>{form.errors.name as any} &nbsp;</span>
                </div>
                <div className={styles.inputWrapper}>
                  <NumberInput
                    name={'mobile'}
                    disable={isLoading}
                    class={styles.input}
                    placeholder={'شماره همراه خود را وارد کنید'}
                    prefixIcon={mobile}
                    maxLength={11}
                    onChange={(e) => form.handleChange(e)}
                  />
                  <span className={styles.error}>{form.errors.mobile as any} &nbsp;</span>
                </div>
                <div className={styles.inputWrapper}>
                  <TextInput
                    name={'email'}
                    disable={isLoading}
                    class={styles.input}
                    placeholder={'ایمیل خود را وارد کنید'}
                    prefixIcon={email}
                    onChange={(e) => form.handleChange(e)}
                  />
                  <span className={styles.error}>{form.errors.email as any} &nbsp;</span>
                </div>
                <div className={styles.buttonWrapper}>
                  <button
                    type="submit"
                    className={cls(styles.button, 'btn-warning material btn-warning-active material-active')}
                    disabled={isLoading}>
                    {!isLoading ?
                      <span>ارسال</span>
                      :
                      <Spinner />}
                  </button>
                  <a className={'hidden'} ref={linkRef} href={'/fonts/righcon/webfonts/Righcon-Ver1.0.rar'}
                  >link</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalSimple>
  )
}
