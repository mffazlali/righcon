'use client'
import cls from 'classnames'
import styles from './drop-button.module.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export interface DropDownProps {
  options: { key: string; value: string, click: () => void }[]
  buttonClass?: string
  iconClass?: string
  value: { key: string; value: string }
  disable: boolean,
  icon: any
}

const DropButton = (props: DropDownProps) => {
  const [dropdownToggle, setDropdownToggle] = useState(false)
  const [activeClick, setActiveClick] = useState(true)

  useEffect(() => {
    document.body.addEventListener('click', () => {
      setDropdownToggle(v => {
        if (v) {
          setActiveClick(true)
          return !v
        } else {
          return v
        }
      })
    })
  }, [])

  const handleDropdown = () => {
    setDropdownToggle(v => {
      if (!activeClick) {
        if (v) {
          return !v
        } else {
          return !v
        }
      } else {
        setActiveClick(false)
        return !dropdownToggle

      }
    })

  }

  const getOptions = () => {
    return props.options.map(option => {
      return (
        <span onClick={() => {
          handleDropdown()
          option.click()
        }} key={option.key}>{option.value}</span>
      )
    })
  }
  return (
    <div className={styles.dropButton}>
      <div className={styles.dropButtonWrapper}>
        <div className={styles.dropdown}>
          <button onClick={handleDropdown} disabled={props.disable}
                  className={cls(styles.dropButtonTarget, props.buttonClass)}>
            <Image
              src={props.icon}
              fill={false}
              alt=""
              className={cls(styles.imageTarget, props.iconClass)}></Image>
          </button>
          <div className={cls(styles.dropdownContent, dropdownToggle ? 'block' : 'hidden')}>
            {getOptions()}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DropButton
