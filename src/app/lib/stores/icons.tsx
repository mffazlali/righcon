import { create } from 'zustand'
import { orderBy } from 'lodash'
import { brandsfonts, IconType, regularfonts } from '../services/righcon-service'
import { CategoryType, ListSubCategory } from '@/app/lib/utilities/listSubCategory'
import { nameChecked } from '@/app/lib/stores/layout.'

type State = {
  icons: IconType[]
  filterIcons: IconType[]
  popularIcons: IconType[]
  categoryType: CategoryType,
}

type Actions = {
  searchIcon: (fontName: string) => void
  searchIconByTags: (tags: string[]) => void
  searchIconStyle: (
    iconType: 'brands' | 'regular' | 'all',
    checkList: nameChecked[],
    sortOptions: {
      mode: 'asc' | 'desc'
      field: 'name' | 'unicode' | 'farsiName'
    },
  ) => void
  sortIcon: (
    mode: 'asc' | 'desc',
    field: 'name' | 'unicode' | 'farsiName',
  ) => void
  changeCategoryType: (category: CategoryType) => void
  changeFonts: (
    fontFamily: 'brands' | 'regular',
    sortOptions: {
      mode: 'asc' | 'desc'
      field: 'name' | 'unicode' | 'farsiName'
    },
    iconType: 'brands' | 'regular',
    checkList: nameChecked[],
  ) => void
}

export const useIconStore = create<State & Actions>((set) => ({
  icons: orderBy(brandsfonts(), ['farsiName'], ['asc']),
  filterIcons: orderBy(brandsfonts(), ['farsiName'], ['asc']),
  popularIcons: orderBy(brandsfonts(), ['farsiName'], ['asc']),
  categoryType: null,
  searchIcon: (fontName: string) =>
    set((state) => {
      let result = state.icons.filter((icon) => {
        return (
          icon.name.toLowerCase().includes(fontName.toLocaleLowerCase()) ||
          icon.farsiName.includes(fontName)
        )
      })
      return { filterIcons: result }
    }),
  searchIconByTags: (tags: string[]) =>
    set((state) => {
      let result = state.icons.filter((icon) => {
        const firstTag = tags.filter(tag => {
          return icon.tags.join(',').search(tag)
        })
        if (firstTag.length > 0) {
          return icon
        }
      })
      return { filterIcons: result }
    }),
  searchIconStyle: (
    iconType: 'brands' | 'regular' | 'all',
    checkList: nameChecked[],
    sortOptions: {
      mode: 'asc' | 'desc'
      field: 'name' | 'unicode' | 'farsiName'
    },
  ) => {
    set(() => {
      let result: any[] = getIconsByType(iconType, checkList)
      let tempList: any[] = []
      checkList.filter(check => check === 'outline' || check === 'solid').forEach(check => {
        const tags = ListSubCategory(check)
        if (tags.length > 0) {
          tempList = [...tempList, ...getIconByTags(tags, result)]
        }
      })
      if (tempList.length > 0) {
        result = tempList
      }
      tempList = []
      checkList.filter(check => check !== 'outline' && check !== 'solid').forEach(check => {
        const tags = ListSubCategory(check)
        if (tags.length > 0) {
          tempList = [...tempList, ...getIconByTags(tags, result)]
        }
      })

      if (tempList.length > 0) {
        result = tempList
      }
      result = orderBy(result, [sortOptions.field], [sortOptions.mode])
      return { icons: result, filterIcons: result }
    })
  },
  sortIcon: (mode: 'asc' | 'desc', field: 'name' | 'unicode' | 'farsiName') => {
    set((state) => {
      let result = orderBy(state.icons, [field], [mode])
      return {
        icons: result,
        filterIcons: result,
      }
    })
  },
  changeCategoryType: (category: CategoryType) => {
    set(() => {
      return {
        categoryType: category,
      }
    })
  },
  changeFonts: (
    fontFamily: 'brands' | 'regular',
    sortOptions: {
      mode: 'asc' | 'desc'
      field: 'name' | 'unicode' | 'farsiName'
    },
    iconType: 'brands' | 'regular',
    checkList: nameChecked[],
  ) => {
    set((state) => {
      let result = getIconsByType(iconType, checkList)
      if (state.categoryType) {
        const tags = ListSubCategory(state.categoryType)
        result = getIconByTags(tags, result)
      }
      result = orderBy(result, [sortOptions.field], [sortOptions.mode])
      return {
        icons: result,
        filterIcons: result,
      }
    })
  },
}))

const getIconsByType = (
  iconType: 'brands' | 'regular' | 'all',
  checkList: nameChecked[],
) => {
  let result: any[] = []
  if (iconType === 'brands') {
    result = brandsfonts()
  } else if (iconType === 'regular') {
    result = regularfonts()
  } else {
    result = [...brandsfonts(), ...regularfonts()]
  }
  return result
}

const getIconByTags = (tags: string[], icons: any[]) => {
  return icons.filter((icon) => {
    const firstTag = tags.filter(tag => {
      const r = icon.tags.filter((tagIcon: any) => {
        if (tagIcon == tag)
          return tagIcon == tag
      })
      return r.length > 0
    })
    if (firstTag.length > 0) {
      return icon
    }
  })
}
