'use client'
// import { Metadata } from 'next'
import ListIconSection from './_components/list-icon-section/list-icon-section'
import FilterSortToolbar from './_components/filter-sort-toolbar/filter-sort-toolbar'
import SearchBox from '@/app/components/search-box/search-box'
import { useIconStore } from '@/app/lib/stores/icons'
import { useLayoutStore } from '@/app/lib/stores/layout.'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'


export function Search() {
  const searchHandler = useIconStore((state) => state.searchIcon)
  const searchIconByTags = useIconStore((state) => state.searchIconByTags)
  const filter = useLayoutStore((state) => state.filterIcon)
  const searchFont = useLayoutStore((state) => state.searchFont)
  const setSearchFont = useLayoutStore((state) => state.setSearchFont)
  const changeCategoryType = useIconStore((state) => state.changeCategoryType)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState<string | null>()

  useEffect(() => {
    setSearch(searchFont)
    return () => {
      setSearchFont('')
    }
  }, [])

  return (
    <>
      <SearchBox onClick={searchHandler} filter={filter} value={search} />
      <FilterSortToolbar />
      <ListIconSection />
    </>
  )
}

export default Search
