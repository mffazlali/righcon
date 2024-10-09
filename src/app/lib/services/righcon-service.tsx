import righconBrands from '../../../../public/fonts/righcon/metadata/righcon-brands-v1.0.json'
import righconRegular from '../../../../public/fonts/righcon/metadata/righcon-regular-v1.0.json'

export type IconType = {
  name: string,
  unicode: string,
  family: string,
  farsiName: string,
  tags: string[],
}
export const brandsfonts = () => {
  const res: IconType[] = righconBrands
    .filter((item) => item.unicode != '')
    .map((item) => {
      return {
        name: item.fontName,
        unicode: item.unicode,
        family: item.fontFamily,
        farsiName: item.fontFarsiName,
        tags: [...item.tags ?? [], 'solid'] ,
      }
    })
  return res
}

export const regularfonts = () => {
  const res: IconType[] = []
  righconRegular
    .filter((item) => item.unicode != '')
    .forEach((item) => {
      const result: IconType = {
        name: item.fontName,
        unicode: item.unicode,
        family: item.fontFamily,
        farsiName: item.fontFarsiName,
        tags: item.tags ?? [],
      }
      res.push({ ...result, family: result.family + '-solid', tags: [...item.tags ?? [], 'solid'] })
      res.push({ ...result, family: result.family + '-outline', tags: [...item.tags ?? [], 'outline'] })
    })
  return res
}

export const getIcons = async () => {
  const response = fetch('/api/icons', {
    method: 'get',
    cache: 'force-cache',
    next: { revalidate: 18000 },
  }).then((res) => res.json())
  return await response
}
