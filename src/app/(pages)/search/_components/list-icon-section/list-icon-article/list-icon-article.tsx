'use client'
import { useIconStore } from '@/app/lib/stores/icons'
import { useLayoutStore } from '@/app/lib/stores/layout.'
import { mapEnglishToFarsiDigits } from '@/app/lib/utilities/mapEnglishToFarsiDigits'
import styles from './list-icon-article.module.css'
import CardIcon from '@/app/components/card-icon/card-icon'
import { useCallback, useEffect, useState } from 'react'

export interface ListIconArticleProps {}

const ListIconArticle = () => {
  const raicon = useIconStore((state) => state.filterIcons)
  const view = useLayoutStore((state) => state.viewIcon)
  const sort = useLayoutStore((state) => state.sortIcon)
  const [icons, setIcons] = useState<any[]>([])

  useEffect(() => {
    setIcons([])
    setTimeout(()=>{
      setIcons(raicon)
    },0)
  }, [raicon])

  const getRaicons = useCallback(() => {
    if (icons.length > 0) {
      return icons.map((glyph: any, index) => {
        return (
          <CardIcon
            mode={view}
            fontName={glyph.name}
            fontCode={glyph.unicode}
            fontFamily={glyph.family}
            fontFarsiName={glyph.farsiName}
            key={index}
            noSkeleton={true}
          />
        )
      })
    } else {
      return getRaiconsSkeleton(0)
    }
  }, [icons,view,sort])

  const getRaiconsSkeleton = (number: number) => {
    let result: any[] = []
    for (let index = 0; index < number; index++) {
      const element = (
        <CardIcon
          mode={view}
          fontName={''}
          fontCode={''}
          fontFamily={''}
          fontFarsiName={''}
          key={index}
          noSkeleton={true}
        />
      )
      result.push(element)
    }
    return result
  }

  return (
    <article className={styles.article}>
      <div className={styles.articleContent}>
        <div className={styles.contentWrapper}>{getRaicons()}</div>
      </div>
      {icons.length > 0 && (
        <div className={styles.articleTitle}>
          <h3>
            {<span>{mapEnglishToFarsiDigits(icons.length.toString())}</span>}  ایکن
          </h3>
        </div>
      )}
    </article>
  )
}

export default ListIconArticle
