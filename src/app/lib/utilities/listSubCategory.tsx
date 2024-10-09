export type CategoryType = 'brands' | 'organizations' | 'islamicSymbols' | 'iranianSymbols' | 'solid' | 'outline' | null | undefined


export const ListSubCategory = (category: CategoryType | string) => {
  let listSubCategory: string[] = []
  switch (category) {
    case 'brands':
      listSubCategory = ['بانکی‌', 'پیام‌رسان']
      break
    case 'organizations':
      listSubCategory = ['مالی', 'نماد', 'ایرانی', 'تجاری']
      break
    case 'islamicSymbols':
      listSubCategory = ['عبادت', 'اسلامی', 'مقدس']
      break
    case 'iranianSymbols':
      listSubCategory = ['استان', 'ایران', 'نقشه', 'نماد']
      break
    case 'solid':
      listSubCategory = ['solid']
      break
    case 'outline':
      listSubCategory = ['outline']
      break
    default:
      listSubCategory = []
  }
  return listSubCategory
}
