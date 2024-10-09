'use client'
import DropButton from '@/app/components/drop-button/drop-button'
import { useIconStore } from '@/app/lib/stores/icons'
import { useLayoutStore } from '@/app/lib/stores/layout.'
import cls from 'classnames'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useState } from 'react'
import ascendingIcon from '../../../../../../public/medias/images/ascending.svg'
import descendingIcon from '../../../../../../public/medias/images/descending.svg'
import filterIcon from '../../../../../../public/medias/images/filter.svg'
import LineBrandIcon from '../../../../../../public/medias/images/line-brand.svg'
import rectViewIcon from '../../../../../../public/medias/images/rectView.svg'
import squareViewIcon from '../../../../../../public/medias/images/squareView.svg'
import brandIcon from '../../../../../../public/medias/images/tool-brand.svg'
import brandIconActive from '../../../../../../public/medias/images/tool-brand-active.svg'
import symbolIcon from '../../../../../../public/medias/images/tool-symbol.svg'
import symbolIconActive from '../../../../../../public/medias/images/tool-symbol-active.svg'
import commonIcon from '../../../../../../public/medias/images/tool-common.svg'
import commonIconActive from '../../../../../../public/medias/images/tool-common-active.svg'
import styles from './filter-sort-toolbar..module.css'

/* eslint-disable-next-line */
export interface FilterSortToolbarProps {
}

const FilterSortToolbar = (props: FilterSortToolbarProps) => {
  const [fontFamilyState, setFontFamilyState] = useState<'regular' | 'brands' | 'all'>(
    'all',
  )
  const view = useLayoutStore((state) => state.viewIcon)
  const setView = useLayoutStore((state) => state.setViewIcon)
  const filter = useLayoutStore((state) => state.filterIcon)
  const checkList = useLayoutStore((state) => state.checkList)
  const setSortIcon = useLayoutStore((state) => state.setSortIcon)
  const sortIcon = useLayoutStore((state) => state.sortIcon)
  const filterIcons = useIconStore((state) => state.filterIcons)
  const iconType = useLayoutStore((state) => state.iconType)
  const setIconType = useLayoutStore((state) => state.setIconType)
  const setFilter = useLayoutStore((state) => state.setFilterIcon)
  const sortTool = useIconStore((state) => state.sortIcon)
  const changeFonts = useIconStore((state) => state.changeFonts)
  const categoryType = useIconStore((state) => state.categoryType)
  const [ascSortMode, setAscSortMode] = useState(sortIcon === 'asc')

  // useEffect(() => {
  //   if (categoryType == 'brands') {
  //     changeFont('brands')
  //   } else if (categoryType == null) {
  //     changeFont('regular')
  //   } else {
  //     changeFont('regular')
  //   }
  // }, [categoryType])

  const filterList = [
    {
      key: `name`,
      value: 'بر اساس نام',
      click: () => {
        setFilter('farsiName')
        sortTool(ascSortMode ? 'asc' : 'desc', 'farsiName')
      },
    },
    {
      key: `unicode`,
      value: 'بر اساس یونیکد',
      click: () => {
        setFilter('unicode')
        sortTool(ascSortMode ? 'asc' : 'desc', 'unicode')
      },
    },
  ]

  const squareViewHandle = () => {
    setView('square')
  }

  const rectViewHandle = () => {
    setView('rect')
  }

  const sortHandle = () => {
    setAscSortMode(!ascSortMode)
    if (ascSortMode) {
      sortTool('desc', filter)
      setSortIcon('desc')
    } else {
      sortTool('asc', filter)
      setSortIcon('asc')
    }
  }

  const changeFont = (fontFamily: 'brands' | 'regular' | 'all') => {
    setIconType(fontFamily)
    // changeFonts(
    //   fontFamily,
    //   {
    //     mode: ascSortMode ? 'asc' : 'desc',
    //     field: filter,
    //   },
    //   fontFamily,
    //   checkList,
    // )
    setFontFamilyState(fontFamily)
  }

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbarWrapper}>
        <div className={styles.toolbarRight}>
          <button
            className={cls(styles.iconRight, 'btn-secondary material')}
            onClick={() => changeFont('all')}>
            <Image
              src={fontFamilyState === 'all' ? commonIconActive : commonIcon}
              fill={false}
              alt=""
              className={styles.rightTarget}></Image>
            <span
              className={fontFamilyState === 'all' ? '!text-primary' : ''}>
              عمومی
            </span>
            <Image
              src={LineBrandIcon}
              fill={false}
              alt=""
              className={cls(
                styles.lineTarget,
                fontFamilyState === 'all' ? '' : 'hidden',
              )}></Image>
          </button>
          <button
            className={cls(styles.iconRight, 'btn-secondary material')}
            onClick={() => changeFont('brands')}>
            <Image
              src={fontFamilyState === 'brands' ? brandIconActive : brandIcon}
              fill={false}
              alt=""
              className={styles.rightTarget}></Image>
            <span
              className={fontFamilyState === 'brands' ? '!text-primary' : ''}>
              برند ها
            </span>
            <Image
              src={LineBrandIcon}
              fill={false}
              alt=""
              className={cls(
                styles.lineTarget,
                fontFamilyState === 'brands' ? '' : 'hidden',
              )}></Image>
          </button>
          <button
            className={cls(styles.iconRight, 'btn-secondary material')}
            onClick={() => changeFont('regular')}>
            <Image
              src={
                fontFamilyState === 'regular' ? symbolIconActive : symbolIcon
              }
              fill={false}
              alt=""
              className={styles.rightTarget} style={{ width: 'auto', height: 'auto' }}></Image>
            <span
              className={fontFamilyState === 'regular' ? '!text-primary' : ''}>
              نماد ها
            </span>
            <Image
              src={LineBrandIcon}
              fill={false}
              alt=""
              className={cls(
                styles.lineTarget,
                fontFamilyState === 'regular' ? '' : 'hidden',
              )}></Image>
          </button>
        </div>
        <div className={styles.toolbarLeft}>
          <DropButton
            disable={filterIcons.length <= 0}
            options={filterList}
            buttonClass={cls(styles.iconLeft, 'btn-secondary material')}
            iconClass={styles.rightTarget}
            value={filterList[0]}
            icon={filterIcon}
          />
          <button
            onClick={sortHandle}
            className={cls(styles.iconLeft, 'btn-secondary material')} disabled={filterIcons.length <= 0}>
            <Image
              src={ascSortMode ? ascendingIcon : descendingIcon}
              fill={false}
              alt=""
              className={styles.rightTarget}></Image>
          </button>
          <button
            onClick={rectViewHandle}
            className={cls(styles.iconLeft, 'btn-secondary material')} disabled={filterIcons.length <= 0}>
            <Image
              src={rectViewIcon}
              fill={false}
              alt=""
              className={styles.rightTarget}></Image>
          </button>
          <button
            onClick={squareViewHandle}
            className={cls(styles.iconLeft, 'btn-secondary material')} disabled={filterIcons.length <= 0}>
            <Image
              src={squareViewIcon}
              fill={false}
              alt=""
              className={styles.rightTarget}></Image>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterSortToolbar
