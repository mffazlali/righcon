'use client'
import cls from 'classnames'
import styles from './color-picker.module.css'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export interface colorPickerProps {
  onChange: (option: any) => any
  class?: string
  label: string
  value: string
  defaultValue?:string
}

const ColorPicker = (props: colorPickerProps) => {
  const [color, setColor] = useState(props.value)

  useEffect(() => {
    setColor(props.value)
  }, [props.value])

  const handleSelect = (option: any) => {
    props.onChange(option)
    setColor(option)
  }

  return (
    <div className={styles.colorPicker}>
      <div className={styles.colorPickerContainer}>
        <input
          type="color"
          defaultValue={props.defaultValue}
          value={color}
          onChange={(e) => handleSelect(e.target.value)}
          className={cls(styles.colorPickerTarget, props.class)}
        />
        <label className={styles.colorPickerLabel}>{props.label}</label>
      </div>
    </div>
  )
}
export default ColorPicker
