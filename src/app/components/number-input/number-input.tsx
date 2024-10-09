'use client'
import cls from 'classnames'
import { ChangeEvent, KeyboardEventHandler } from 'react'
import styles from './number-input.module.css'
import Image from 'next/image'

export interface NumberInputProps {
  placeholder?: string
  name: string
  value?: string
  disable: boolean
  class?: string
  maxLength?: number
  prefixIcon?: any,
  inputClass?: string
  onChange?: (event: ChangeEvent<any>, child?: any) => void
  onInput?: (event: ChangeEvent<any>) => void
  onBlur?: (event: any) => void
}

const NumberInput = (props: NumberInputProps) => {

  const handleKeyDown = (e: KeyboardEvent) =>{
    if (e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 46
      || e.keyCode == 37 || e.keyCode == 39) {
      return true;
    }
    else if ( e.keyCode < 48 || e.keyCode > 57 ) {
      e.preventDefault();
    }
  }
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
            // inputMode="text"
            // pattern="[1-9]"
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            value={props.value}
            className={cls(styles.input, props.inputClass)}
            onKeyDown={(event)=>handleKeyDown(event as any)}
            onChange={props.onChange}
            onBlur={props.onBlur}
            onInput={props.onInput} />
        </div>
      </div>
    </div>
  )
}
export default NumberInput
