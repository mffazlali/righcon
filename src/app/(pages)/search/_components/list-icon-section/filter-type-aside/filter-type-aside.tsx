'use client'
import cls from 'classnames'
import styles from './filter-type-aside.module.css'
import { useCallback, useEffect, useState } from 'react'
import { nameChecked, TypeChecked, useLayoutStore } from '@/app/lib/stores/layout.'
import { useIconStore } from '@/app/lib/stores/icons'

export interface FilterTypeProps {
}

interface IChecked {
  name: nameChecked
  title: string
  value: boolean
  group?: string
  disable: boolean
  change: () => any
}

const FilterTypeAside = () => {
  const iconType = useLayoutStore((state) => state.iconType)
  const filterIcons = useIconStore((state) => state.filterIcons)
  const checkList = useLayoutStore((state) => state.checkList)
  const setCheckList = useLayoutStore((state) => state.setCheckList)
  const checkedSymbols = useLayoutStore((state) => state.checkedSymbols)
  const checkedBrands = useLayoutStore((state) => state.checkedBrands)
  const checkedAll = useLayoutStore((state) => state.checkedAll)
  const setCheckedSymbols = useLayoutStore((state) => state.setCheckedSymbols)
  const setCheckedBrands = useLayoutStore((state) => state.setCheckedBrands)
  const setCheckedAll = useLayoutStore((state) => state.setCheckedAll)
  const resetCheckedAll = useLayoutStore((state) => state.resetCheckedAll)
  const filterIcon = useLayoutStore((state) => state.filterIcon)
  const sortIcon = useLayoutStore((state) => state.sortIcon)
  const searchIconStyle = useIconStore((state) => state.searchIconStyle)
  const [typeChecked, setTypeChecked] = useState<TypeChecked>({})
  const categoryType = useIconStore(state => state.categoryType)

  const listCheck: {
    filter: IChecked[]
    type: IChecked[]
    category: IChecked[]
  } = {
    filter: [
      {
        name: 'filter1',
        title: 'تازه‌ها',
        value: false,
        disable: true,
        change: () => {
        },
      },
      {
        name: 'filter2',
        title: 'پرطرفدار‌ها',
        value: false,
        disable: true,
        change: () => {
        },
      },
      {
        name: 'filter3',
        title: 'کاربردی‌ها',
        value: false,
        disable: true,
        change: () => {
        },
      },
    ],
    type: [
      {
        name: 'outline',
        title: 'خطی',
        value: typeChecked!.outline,
        disable: iconType === 'brands',
        change: () => {
        },
      },
      {
        name: 'solid',
        title: 'توپر',
        value: typeChecked!.solid,
        disable: iconType === 'brands',
        change: () => {
        },
      },
      // {
      //   name: 'type3',
      //   title: 'شکسته',
      //   value: false,
      //   disable: true,
      //   change: () => {},
      // },
      // {
      //   name: 'type4',
      //   title: 'دورنگ',
      //   value: false,
      //   disable: true,
      //   change: () => {},
      // },
      // {
      //   name: 'type5',
      //   title: 'خطی وزن‌دار',
      //   value: false,
      //   disable: true,
      //   change: () => {},
      // },
    ],
    category: [
      {
        name: 'brands',
        title: 'برند‌ها',
        value: typeChecked!.brands,
        group: 'category',
        disable: false,
        change: () => {
        },
      },
      {
        name: 'organizations',
        title: 'سازمان‌ها و نهاد‌ها',
        value: typeChecked!.organizations,
        group: 'category',
        disable: false,
        change: () => {
        },
      },
      {
        name: 'islamicSymbols',
        title: 'نماد‌های اسلامی',
        value: typeChecked!.islamicSymbols,
        group: 'category',
        disable: false,
        change: () => {
        },
      },
      {
        name: 'iranianSymbols',
        title: 'نماد‌های ایرانی',
        value: typeChecked!.iranianSymbols,
        group: 'category',
        disable: false,
        change: () => {
        },
      },
    ],
  }

  useEffect(() => {
    if (iconType === 'brands') {
      setTypeChecked(checkedBrands)
      updateCheckList(checkedBrands)
    } else if (iconType === 'regular') {
      setTypeChecked(checkedSymbols)
      updateCheckList(checkedSymbols)
    } else {
      setTypeChecked(checkedAll)
      updateCheckList(checkedAll)
    }

  }, [iconType, checkedBrands, checkedSymbols, checkedAll])

  useEffect(() => {
    let tmpChecked = { ...checkedAll }
    if (categoryType) {
      tmpChecked[categoryType] = true
      setCheckedAll(tmpChecked)
    } else {
      resetCheckedAll()
    }
  }, [categoryType])

  const getFilterList = () => {
    return listCheck.filter.map((item, index) => {
      return (
        <div className={styles.checkListWrapper} key={index}>
          <span className={cls(styles.checkBoxWrapper)}>
            <input
              id={item.name}
              name={item.name}
              checked={iconType === 'brands' ? false : item.value}
              disabled={item.disable || filterIcons.length <= 0}
              type="checkbox"
              className={styles.checkBox}
              onChange={(event) => handleChangeCheckBox(event, item)}
            />
          </span>
          <span className={styles.label}>{item.title}</span>
        </div>
      )
    })
  }

  const getTypeList = useCallback(() => {
    return listCheck.type.map((item, index) => {
      return (
        <div className={styles.checkListWrapper} key={index}>
          <span className={styles.checkBoxWrapper}>
            <input
              id={item.name}
              name={item.name}
              checked={typeChecked[item.name] ?? false}
              disabled={item.disable}
              type="checkbox"
              className={styles.checkBox}
              onChange={(event) => handleChangeCheckBox(event, item)}
            />
          </span>
          <span className={styles.label}>{item.title}</span>
        </div>
      )
    })
  }, [iconType, checkList, sortIcon, filterIcon, typeChecked])

  const getCategoryList = useCallback(() => {
      return listCheck.category.map((item, index) => {
        return (
          <div className={styles.checkListWrapper} key={index}>
          <span className={styles.checkBoxWrapper}>
            <input
              id={item.name}
              name={item.name}
              checked={typeChecked[item.name] ?? false}
              disabled={item.disable}
              type="checkbox"
              className={styles.checkBox}
              onChange={(event) => handleChangeCheckBox(event, item)}
            />
          </span>
            <span className={styles.label}>{item.title}</span>
          </div>
        )
      })
    }
    , [iconType, checkList, sortIcon, filterIcon, filterIcons, typeChecked])

  const [filterList, setFilterList] = useState(getFilterList())
  const [typeList, setTypeList] = useState(getTypeList)
  const [categoryList, setCategoryList] = useState(getCategoryList)
  const handleChangeCheckBox = (event: any, item: IChecked) => {
    let itemChecked = typeChecked
    itemChecked![item.name] = event.currentTarget.checked
    setTypeChecked({ ...itemChecked })
    if (iconType === 'brands') {
      setCheckedBrands({ ...itemChecked })
    } else if (iconType === 'regular') {
      setCheckedSymbols({ ...itemChecked })
    } else {
      setCheckedAll({ ...itemChecked })
    }
    updateCheckList({ ...itemChecked })
  }

  const updateCheckList = (itemChecked: TypeChecked) => {
    let tempCheckList: nameChecked[] = []
    Object.entries(itemChecked!).forEach(([key, value]) => {
      if (value) {
        tempCheckList.push(key)
      }
    })
    setCheckList(tempCheckList)
    searchIconStyle(iconType, tempCheckList, {
      mode: sortIcon,
      field: filterIcon,
    })
  }

  useEffect(() => {
    updateCheckList(typeChecked)
  }, [])

  return (
    <aside className={styles.aside}>
      <div className={styles.asideWrapper}>
        {/* <div className={styles.checkList}>{filterList}</div> */}
        <div className={styles.titleGroupWrapper}>
          <div className={styles.titleGroup}>
            <span>نوع</span>
          </div>
          <div className={styles.checkList}>{getTypeList()}</div>
        </div>
        <div className={styles.titleGroupWrapper}>
          <div className={styles.titleGroup}>
            <span>دسته بندی ها</span>
          </div>
          <div className={styles.checkList}>{getCategoryList()}</div>
        </div>
      </div>
    </aside>
  )
}

export default FilterTypeAside
