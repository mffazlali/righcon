import {
  disableDarkMode,
  enableDarkMode,
} from '@/app/lib/utilities/activeDarkMode'
import styles from './switch-button.module.css'
import { Dispatch, SetStateAction } from 'react'

export interface SwitchButtonProps {
  disable: boolean
  setValue?: Dispatch<SetStateAction<boolean>>
  value?: boolean
}

const SwitchButton = (props: SwitchButtonProps) => {
  const handleChange = (event: any) => {
    const value = event.target.checked
    if (props.setValue)
      props.setValue(value)
    if (value) {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
  }

  return (
    <div className="w-fit">
      <label className={styles.switch}>
        <input
          onChange={(event) => handleChange(event)}
          disabled={props.disable}
          type="checkbox"
          defaultChecked={props.value}
          id="switch-input"
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default SwitchButton
