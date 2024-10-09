import styles from './category-icon.module.css'
import cls from 'classnames'
import symbolBank from '../../../../public/medias/images/symbol-bank.svg'
import symbolAslami from '../../../../public/medias/images/symbol-aslami.svg'
import symbolBrand from '../../../../public/medias/images/symbol-brand.svg'
import symbolIrani from '../../../../public/medias/images/symbol-irani.svg'
import symbolBusiness from '../../../../public/medias/images/symbol-business.svg'
import symbolOrganization from '../../../../public/medias/images/symbol-organization.svg'
import symbol from '../../../../public/medias/images/symbol.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CategoryType } from '@/app/lib/utilities/listSubCategory'
import { useIconStore } from '@/app/lib/stores/icons'
import { useLayoutStore } from '@/app/lib/stores/layout.'

/* eslint-disable-next-line */
export interface CategoryIconProps {
}

const CategoryIcon = (props: CategoryIconProps) => {
  const router = useRouter()
  const changeCategoryType = useIconStore(state => state.changeCategoryType)
  const resetCheckedSymbols = useLayoutStore(state => state.resetCheckedSymbols)
  const resetCheckedBrands = useLayoutStore(state => state.resetCheckedBrands)
  const resetCheckedAll = useLayoutStore(state => state.resetCheckedAll)

  const handleCategory = (categoryType: CategoryType) => {
    resetCheckedAll()
    changeCategoryType(categoryType)
    router.push('search')
  }

  return (
    <div className={styles.categoryIcon}>
      <div className={styles.categoryIconContainer}>
        <div className={styles.iconItems}>
          <button className={styles.iconItemSmallWrapper} onClick={() => handleCategory('brands')}>
            <Image
              src={symbolBrand}
              alt=""
              fill={false}
              className={styles.iconItemSmall}></Image>
          </button>
          <button className={styles.iconItemSmallWrapper} onClick={() => handleCategory('organizations')}>
            <Image
              src={symbolOrganization}
              alt=""
              fill={false}
              className={styles.iconItemSmall}></Image>
          </button>
          <button className={styles.iconItemSmallWrapper} onClick={() => handleCategory('islamicSymbols')}>
            <Image
              src={symbolAslami}
              alt=""
              fill={false}
              className={styles.iconItemSmall}></Image>
          </button>
          <button className={styles.iconItemSmallWrapper} onClick={() => handleCategory('iranianSymbols')}>
            <Image
              src={symbolIrani}
              alt=""
              fill={false}
              className={styles.iconItemSmall}></Image>
          </button>
        </div>
        {/*<div className={styles.iconItems}>*/}
        {/*  {' '}*/}
        {/*  <div className={styles.iconItemLargeWrapper}>*/}
        {/*    <Image*/}
        {/*      src={symbolBrand}*/}
        {/*      alt=""*/}
        {/*      fill={false}*/}
        {/*      className={styles.iconItemLarge}></Image>*/}
        {/*  </div>*/}
        {/*  <div className={styles.iconItemLargeWrapper}>*/}
        {/*    <Image*/}
        {/*      src={symbol}*/}
        {/*      alt=""*/}
        {/*      fill={false}*/}
        {/*      className={styles.iconItemLarge}></Image>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default CategoryIcon
