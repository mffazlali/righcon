import { create } from 'zustand'

export type nameChecked =
  | 'solid'
  | 'outline'
  | 'type3'
  | 'type4'
  | 'type5'
  | 'filter1'
  | 'filter2'
  | 'filter3'
  | 'brands'
  | 'organizations'
  | 'islamicSymbols'
  | 'iranianSymbols'
  | string
export type TypeChecked = Record<nameChecked, boolean>

type State = {
  viewIcon: 'square' | 'rect'
  sortIcon: 'asc' | 'desc'
  filterIcon: 'name' | 'unicode' | 'farsiName'
  iconType: 'brands' | 'regular' | 'all'
  checkList: nameChecked[]
  checkedBrands: TypeChecked
  checkedSymbols: TypeChecked
  checkedAll: TypeChecked
  searchFont: string,
  darkMode: boolean
}

type Actions = {
  setFilterIcon: (value: 'name' | 'unicode' | 'farsiName') => any
  setSortIcon: (value: 'asc' | 'desc') => any
  setViewIcon: (value: 'square' | 'rect') => any
  setIconType: (value: 'brands' | 'regular' | 'all') => any
  setCheckList: (value: nameChecked[]) => any
  resetCheckedBrands: () => any,
  resetCheckedSymbols: () => any,
  resetCheckedAll: () => any,
  setCheckedBrands: (typeChecked: TypeChecked) => any,
  setCheckedSymbols: (typeChecked: TypeChecked) => any,
  setCheckedAll: (typeChecked: TypeChecked) => any,
  setSearchFont: (value: string) => any,
  setDarkMode: (value: boolean) => any
}

export const useLayoutStore = create<State & Actions>((set) => ({
  viewIcon: 'square',
  sortIcon: 'asc',
  filterIcon: 'farsiName',
  iconType: 'all',
  checkList: [],
  checkedBrands: {
    solid: true,
    outline: false,
    type3: false,
    type4: false,
    type5: false,
    filter1: false,
    filter2: false,
    filter3: false,
    brands: false,
    organizations: false,
    islamicSymbols: false,
    iranianSymbols: false,
  },
  checkedSymbols: {
    solid: true,
    outline: true,
    type3: false,
    type4: false,
    type5: false,
    filter1: false,
    filter2: false,
    filter3: false,
    brands: false,
    organizations: false,
    islamicSymbols: false,
    iranianSymbols: false,
  },
  checkedAll: {
    solid: false,
    outline: false,
    type3: false,
    type4: false,
    type5: false,
    filter1: false,
    filter2: false,
    filter3: false,
    brands: false,
    organizations: false,
    islamicSymbols: false,
    iranianSymbols: false,
  },
  searchFont: '',
  darkMode: false,
  resetCheckedBrands: () =>
    set((state) => {
      return {
        checkedBrands: {
          solid: true,
          outline: false,
          type3: false,
          type4: false,
          type5: false,
          filter1: false,
          filter2: false,
          filter3: false,
          brands: false,
          organizations: false,
          islamicSymbols: false,
          iranianSymbols: false,
        },
      }
    }),
  resetCheckedSymbols: () =>
    set((state) => {
      return {
        checkedSymbols: {
          solid: true,
          outline: true,
          type3: false,
          type4: false,
          type5: false,
          filter1: false,
          filter2: false,
          filter3: false,
          brands: false,
          organizations: false,
          islamicSymbols: false,
          iranianSymbols: false,
        },
      }
    }),
  resetCheckedAll: () =>
    set((state) => {
      return {
        checkedAll: {
          solid: false,
          outline: false,
          type3: false,
          type4: false,
          type5: false,
          filter1: false,
          filter2: false,
          filter3: false,
          brands: false,
          organizations: false,
          islamicSymbols: false,
          iranianSymbols: false,
        },
      }
    }),
  setCheckedBrands: (typeChecked: TypeChecked) =>
    set((state) => {
      return { checkedBrands: typeChecked }
    }),
  setCheckedSymbols: (typeChecked: TypeChecked) =>
    set((state) => {
      return { checkedSymbols: typeChecked }
    }),
  setCheckedAll: (typeChecked: TypeChecked) =>
    set((state) => {
      return { checkedAll: typeChecked }
    }),
  setViewIcon: (value: 'square' | 'rect') =>
    set((state) => {
      return { viewIcon: value }
    }),
  setSortIcon: (value: 'asc' | 'desc') =>
    set((state) => {
      return { sortIcon: value }
    }),
  setFilterIcon: (value: 'name' | 'unicode' | 'farsiName') =>
    set((state) => {
      return { filterIcon: value }
    }),
  setIconType: (value: 'brands' | 'regular' | 'all') =>
    set((state) => {
      return { iconType: value }
    }),
  setCheckList: (value: nameChecked[]) =>
    set((state) => {
      return { checkList: value }
    }),
  setSearchFont: (value: string) =>
    set((state) => {
      return { searchFont: value }
    }),
  setDarkMode: (value: boolean) =>
    set((state) => {
      return { darkMode: value }
    }),
}))
