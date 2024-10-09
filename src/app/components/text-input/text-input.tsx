'use client'
import cls from 'classnames'
import { ChangeEvent } from 'react'
import styles from './text-input.module.css'
import Image from 'next/image'

export interface TextInputProps {
  placeholder?: string
  name: string
  value?: string
  disable: boolean
  class?: string
  prefixIcon?: any,
  inputClass?: string
  maxLength?: number
  onChange?: (event: ChangeEvent<any>, child?: any) => void
  onInput?: (event: ChangeEvent<any>) => void
  onBlur?: (event: any) => void
}

const TextInput = (props: TextInputProps) => {

  return (
    <div className={styles.emailInput}>
      <div className={cls(styles.emailInputContainer, props.class)}>
        {props.prefixIcon && <div className={styles.iconWrapper}>
          <Image src={props.prefixIcon} alt="" fill={false} className={styles.icon} />
        </div>}
        <div className={styles.inputWrapper}>
          <input
            id={props.name}
            name={props.name}
            disabled={props.disable}
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            className={cls(styles.input, props.inputClass)}
            maxLength={props.maxLength}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onInput={props.onInput} />
        </div>
      </div>
    </div>
  )
}
export default TextInput
