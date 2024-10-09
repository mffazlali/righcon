'use client'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cls from 'classnames'
import { useEffect, useState } from 'react'
import styles from './search-box.module.css'

export interface SearchBoxProps {
  value?: string | null
  onClick?: (value: any) => void
  filter?: 'name' | 'unicode' | 'farsiName'
}

const SearchBox = (props: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState(props.value ?? '')
  const [searchFocusMode, setSearchFocusMode] = useState(false)

  const keyPressHandler = (event: any) => {
    if (props.onClick) {
      setInputValue(event.currentTarget.value)
    }
    if (event.code === 'Enter') {
      if (props.onClick) {
        props.onClick(event.currentTarget.value)
      }
    }
  }

  useEffect(() => {
    setInputValue(props.value ?? '')
  }, [props.value])

  const clickHandler = (event: any) => {
    if (props.onClick) {
      props.onClick(inputValue)
    }
  }
  const searchFocusToggle = (mode: boolean) => {
    if (mode) {
      document.getElementById('searchInput')?.focus()
    }
    setSearchFocusMode(mode)
  }
  return (
    <div className={styles.searchFrame}>
      <div className={styles.searchBoxWrapper}>
        <div
          className={cls(
            styles.searchBox,
            searchFocusMode ? styles.searchFocus : '',
            'material-input',
          )}
          onClick={() => searchFocusToggle(true)}
          onBlur={() => searchFocusToggle(false)}>
          <div className={styles.searchWrapper}>
            <div className={styles.searchInputWrapper}>
              <input
                id="searchInput"
                type="text"
                defaultValue={inputValue}
                className={styles.searchInput}
                onKeyUp={(event) => keyPressHandler(event)}
                placeholder="جستجو کنید..."
              />
            </div>
            <button className={styles.searchIconWrapper} onClick={clickHandler}>
              <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            </button>
            {/*{*/}
            {/*  !props.onClick && <div className={styles.searchIconWrapper}>*/}
            {/*    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />*/}
            {/*  </div>*/}
            {/*}*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
