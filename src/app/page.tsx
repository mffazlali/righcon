'use client'
import { useRouter } from 'next/navigation'
import badge1 from '../../public/medias/images/badge-icon.svg'
import badge2 from '../../public/medias/images/badge-icon2.svg'
import badge3 from '../../public/medias/images/badge-icon3.svg'
import CardSpecs from './components/card-specs/card-specs'
import CardIcon, { CardIconProps } from './components/card-icon/card-icon'
import { useIconStore } from './lib/stores/icons'
import { useLayoutStore } from './lib/stores/layout.'
import CardListIcon from './components/card-list-icon/card-list-icon'
import EmailInput from './components/email-input/email-input'
import SearchBox from './components/search-box/search-box'
import Newsletters from './components/newsletters/newsletters'
import CategoryIcon from './components/category-icon/category-icon'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const cardSpecs = [
    {
      iconSrc: badge1,
      description: ' بر مبنای استاندارهای جهانی',
    },
    {
      iconSrc: badge2,
      description: 'اولین فونت آیکون ایرانی اسلامی',
    },
    {
      iconSrc: badge3,
      description: 'طراحی بیش از 100 آیکون',
    },
  ]

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        console.log('Service worker registered!')
      }).catch((err) => {
        console.log(err)
      })
    }

    window.addEventListener('beforeinstallprompt', (event) => {
      console.log('beforeinstallprompt fired')
      event.preventDefault()
      return false
    })
  }, [])

  const cardListSpecsEL = cardSpecs.map((card, index) => {
    return (
      <CardSpecs
        key={index}
        iconSrc={card.iconSrc}
        description={card.description}
        iconClass="w-[56px] h-[56px]"
      />
    )
  })

  const popularIcons = useIconStore((state) => state.popularIcons)
  const setSearchFont = useLayoutStore((state) => state.setSearchFont)
  const righcons: CardIconProps[] = popularIcons.map((glyph: any, index) => {
    const result: CardIconProps = {
      mode: 'square',
      fontName: glyph.name,
      fontCode: glyph.unicode,
      fontFamily: glyph.family,
      fontFarsiName: glyph.farsiName,
      cardIconClass: '!px-8 !py-4',
    }
    return result
  })

  const handleClickSearch = (event: any) => {
    setSearchFont(event)
    router.push('search')
  }

  const handleInputEmail = (value: string) => {
  }

  const handleMemberShip = () => {
  }

  return (
    <>
      {/* specs */}
      <div className="flex justify-center items-center w-full pt-[4.5rem] pb-13">
        <div className="md:flex block flex-row">{cardListSpecsEL}</div>
      </div>

      {/* popular icons */}
      <div className="bg-primary h-[330px] box-border">
        <div className="pt-14 md:px-24">
          <CardListIcon
            list={righcons}
            title="محبوب‌ترین آیکن‌ها"
            cardContentClass="overflow-auto"
          />
        </div>
      </div>

      {/* category  */}
      <div className="bg-white">
        <div className="">
          <SearchBox onClick={(event) => handleClickSearch(event)} />
        </div>
        <div className="px-24 md:px-0 pb-16">
          <CategoryIcon />
        </div>
      </div>

      {/* email */}
      <Newsletters
        onInputEmail={handleInputEmail}
        onClickMemberShip={handleMemberShip}
      />
    </>
  )
}
