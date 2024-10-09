'use client'
import cls from 'classnames'
import { ChangeEvent, useState } from 'react'
import styles from './email-input.module.css'
import email from '../../../../public/medias/images/email.svg'
import Image from 'next/image'

export interface EmailInputProps {
  // onChange?: (value: string) => any
  // onInput?: (value: string) => any
  placeholder?: string
  value?: string
  disable: boolean
  class?: string
  inputClass?: string
  onChange?: (event: ChangeEvent<any>, child?: any) => void
  onInput?: (event: ChangeEvent<any>) => void
  onBlur?: (event: any) => void
}

const EmailInput = (props: EmailInputProps) => {
  const [value, setValue] = useState(props.value)

  const handleChange = (event: any) => {
    if (props.onChange) {
      const currValue = event.currentTarget.value
      setValue(currValue)
      props.onChange(currValue)
    }
  }

  const handleInput = (event: any) => {
    if (props.onInput) {
      const currValue = event.currentTarget.value
      setValue(currValue)
      props.onInput(currValue)
    }
  }

  return (
    <div className={styles.emailInput}>
      <div className={cls(styles.emailInputContainer, props.class)}>
        <div className={styles.iconWrapper}>
          <Image src={email} alt="" fill={false} className={styles.icon} />
        </div>
        <div className={styles.inputWrapper}>
          <input
            disabled={props.disable}
            type="email"
            placeholder={props.placeholder ?? 'ایمیل خود را وارد کنید'}
            value={value}
            className={cls(styles.input,props.inputClass)}
            onInput={handleInput}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}
export default EmailInput
