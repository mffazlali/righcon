import cls from 'classnames'
import { useState } from 'react'
import styles from './multi-option.module.css'

export interface MultiOptionProps {
  options: {
    name: string
    title: string
    value: number
    disable: boolean
    active?: boolean
    click: () => void
  }[]
}

const MultiOption = (props: MultiOptionProps) => {
  const [options, setOptions] = useState(props.options)
  const clickHandler = (index: number) => {
    props.options[index].click()
    const temp = options.map((option) => {
      option.active = false
      return option
    })
    temp[index].active = true
    setOptions(temp)
  }

  const buttons = options.map((option, index) => {
    return (
      <button
        onClick={() => clickHandler(index)}
        id="button"
        disabled={option.disable}
        className={cls(
          styles.OptionItem,
          'btn-primary btn-primary-active material material-active enabled:hover:!text-white',
          option.active ? 'bg-primary !text-white' : ''
        )}
        key={index}>
        <span>{option.title}</span>
      </button>
    )
  })
  return (
    <div className={styles.multiOption}>
      <div className={styles.multiOptionContainer}>{buttons}</div>
    </div>
  )
}

export default MultiOption
