'use client'
import cls from 'classnames'
import { useEffect, useState } from 'react'
import styles from './drop-down.module.css'

export interface DropDownProps {
  options: { key: string; value: string }[]
  onSelect: (option: any) => any
  class?: string
  label: string
  value: string
  disable: boolean
}

const DropDown = (props: DropDownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(props.value)
  const [focusToggle, setFocusToggle] = useState(false)

  useEffect(() => {
    setSelectedOption(props.value)
  }, [props.value])

  const handleChange = (option: any) => {
    setSelectedOption(option)
    props.onSelect(option)
    setFocusToggle(false)
  }

  const handleFocus = () => {
    setFocusToggle(true)
  }

  return (
    <div className={styles.dropDown}>
      <div className={styles.dropDownContainer}>
        <select
          id="select"
          disabled={props.disable}
          value={selectedOption}
          onFocus={handleFocus}
          onChange={(e) => handleChange(e.target.value)}
          className={cls(styles.dropDownTarget, props.class)}>
          {props.options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          ))}
        </select>
        <label className={styles.dropDownLabel}>{props.label}</label>
      </div>
    </div>
  )
}
export default DropDown
