'use client'
import { IconModel } from '@/app/lib/models/icon-model'
import { mapEnglishToFarsiDigits } from '@/app/lib/utilities/mapEnglishToFarsiDigits'
import cls from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useState } from 'react'
import allBrand from '../../../../public/medias/images/all-brand.svg'
import back from '../../../../public/medias/images/back.svg'
import download from '../../../../public/medias/images/download.svg'
import ColorPicker from '../color-picker/color-picker'
import DropDown from '../drop-down/drop-down'
import MultiOption from '../multi-option/multi-option'
import SwitchButton from '../switch-button/switch-button'
import styles from './detail-icon.module.css'
import LinkButton from '@/app/components/link/link-button'
import copyGlyph from '../../../../public/medias/images/copy-glyph.svg'
import { statusDarkMode } from '@/app/lib/utilities/activeDarkMode'
import { useRouter } from 'next/navigation'
import { useLayoutStore } from '@/app/lib/stores/layout.'


const unicodeToCharacter = (value: string) => {
  let unicode = `\\u${value}`
  unicode = unicode.replace(/\\u([a-f0-9]{4})/gi, function(n, hex) {
    return String.fromCharCode(parseInt(hex, 16))
  })
  return unicode
}

export interface DetailIconProps {
  icon: IconModel
}

const DetailIcon = (props: DetailIconProps) => {
  const [copyState, setCopyState] = useState('')
  const [fontSize, setFontSize] = useState('5')
  const [fontStyleI, setFontStyleI] = useState('1')
  const [color, setColor] = useState('')
  const { fontName, fontStyle, fontCode } = props.icon
  const [fontStyleInfo, setFontStyleInfo] = useState(fontStyle)
  const darkMode = useLayoutStore(state => state.darkMode)
  const setDarkMode = useLayoutStore(state => state.setDarkMode)
  const [switchValue, setSwitchValue] = useState<boolean>(darkMode)

  const fontStyleList = [
    { key: `کلاسیک${mapEnglishToFarsiDigits('')}`, value: '1' },
  ]
  const fontSizeList = [
    { key: `${mapEnglishToFarsiDigits('16')}px`, value: '1' },
    { key: `${mapEnglishToFarsiDigits('32')}px`, value: '2' },
    { key: `${mapEnglishToFarsiDigits('64')}px`, value: '3' },
    { key: `${mapEnglishToFarsiDigits('128')}px`, value: '4' },
    { key: `${mapEnglishToFarsiDigits('256')}px`, value: '5' },
  ]

  const typeOptions = [
    {
      name: 'type1',
      title: 'خطی',
      value: 1,
      disable: true,
      active: false,
      click: () => {
        setFontStyleInfo('righcon-regular-outline')
      },
    },
    {
      name: 'type2',
      title: 'توپر',
      value: 2,
      disable: true,
      active: false,
      click: () => {
        if (!fontStyle.split('-').includes('brands'))
          setFontStyleInfo('righcon-regular-solid')
      },
    },
    {
      name: 'type3',
      title: 'شکسته',
      value: 3,
      disable: true,
      active: false,
      click: () => setFontStyleInfo(''),
    },
    {
      name: 'type4',
      title: 'دورنگ',
      value: 4,
      disable: true,
      active: false,
      click: () => setFontStyleInfo(''),
    },
    {
      name: 'type5',
      title: 'خطی وزن‌دار',
      value: 5,
      disable: true,
      active: false,
      click: () => setFontStyleInfo(''),
    },
  ]

  useEffect(() => {
    const statusDark = statusDarkMode()
    setSwitchValue(statusDark)
  }, [])

  useEffect(() => {
    setColor(switchValue ? '#ffffff' : '#000000')
    setDarkMode(switchValue)
  }, [switchValue])

  useLayoutEffect(() => {
    setSwitchValue(darkMode)
    setColor(darkMode ? '#ffffff' : '#000000')
  }, [])

  const handleDropDownFontStyle = (option: any) => {
  }

  const handleResetAction = (option: any) => {
    setFontSize('5')
    setColor(switchValue ? '#ffffff' : '#000000')
  }

  const handleDropDownFontSize = (option: any) => {
    setFontSize(option)
  }

  const handleColorPicker = (option: any) => {
    setColor(option)
  }

  const copyCodeToClipboard = (event: any) => {
    const codeSnippet = document.getElementById('codeSnippet')
    let copyText = `<i class='${event.target.outerText}></i>`
    navigator.clipboard.writeText(codeSnippet?.innerText ?? '')
    setCopyState('متن کپی شد')
    setTimeout(() => {
      setCopyState('')
    }, 3000)
  }

  const copyGlyphToClipboard = () => {
    navigator.clipboard.writeText(unicodeToCharacter(fontCode))
  }

  const reportDisableMultiOption = () => {
    const result = fontStyle.split('-')
    if (result.includes('regular')) {
      typeOptions[0].disable = false
      typeOptions[1].disable = false
      if (result.includes('solid')) {
        typeOptions[1].active = true
      } else {
        typeOptions[0].active = true
      }
    } else if (result.includes('brands')) {
      typeOptions[1].disable = false
      typeOptions[1].active = true
    }
  }

  reportDisableMultiOption()

  return (
    <div className={styles.detailIcon}>
      <div className={styles.iconFontWrapper}>
        <div className={styles.iconFont}>
          <i
            className={cls(
              `${fontStyleInfo}`,
              'ri-' + fontName,
              `ri-${fontSize}x`,
            )}
            style={{ color: color }}></i>
          <div className={styles.switchWrapper}>
            <SwitchButton value={switchValue} setValue={setSwitchValue} disable={false}></SwitchButton>
          </div>
          <div className={styles.backWrapper}>
            <button
              onClick={handleResetAction}
              className={cls(styles.backTargetWrapper, 'btn-light-surface')}>
              <Image
                src={back}
                fill={false}
                alt="برگشت"
                className={styles.backTarget}></Image>
            </button>
          </div>
        </div>
        <div className={styles.iconActions}>
          <div className={styles.brandAction}>
            <div className={styles.brandWrapper}>
              <button
                className={cls(
                  styles.brandTargetWrapper,
                  'btn-light-surface',
                )}>
                <Image
                  src={allBrand}
                  fill={false}
                  alt=""
                  className={styles.brandTarget}></Image>
              </button>
            </div>
            <div className={styles.brandLink}>
              <Link href={'/brands'}>
                <span>برندها</span>
              </Link>
            </div>
          </div>
          <div className={styles.dropDownAction}>
            <DropDown
              disable={true}
              options={fontStyleList}
              onSelect={(option: any) => handleDropDownFontStyle(option)}
              class={styles.dropDown}
              label="استایل آیکن"
              value={fontStyleI}
            />
          </div>
          <div className={styles.multiOptionAction}>
            <MultiOption options={typeOptions} />
          </div>
          <div className={styles.colorAndDropDownAction}>
            <div className={styles.colorPickerWrapper}>
              <ColorPicker
                onChange={(option: any) => handleColorPicker(option)}
                class={styles.dropDown}
                label="رنگ"
                value={color}
              />
            </div>
            <div className={styles.dropDownWrapper}>
              <DropDown
                disable={false}
                options={fontSizeList}
                onSelect={(option: any) => handleDropDownFontSize(option)}
                value={fontSize}
                class={styles.dropDown}
                label="سایز"
              />
            </div>
          </div>
          <div className={styles.downloadButtonActionWrapper}>
            <div className={styles.downloadButtonAction}>
              <LinkButton
                href={`/api/download?fontFamily=${fontStyleInfo}&fontName=${fontName}&fontColor=${color.substring(1)}&fontSize=${fontSize}`}
                label="دانلود SVG"
                iconSrc={download}
                iconType="image"
                class={cls(
                  styles.downloadButton,
                  'link-primary link-primary-active',
                )}
              />
              <span className={styles.glyphButtonAction}>
              <button onClick={copyGlyphToClipboard} className={cls(styles.glyphButton, 'btn-light-surface')}>
                <Image
                  src={copyGlyph}
                  fill={false}
                  alt=""></Image>
              </button>
            </span>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={(event) => copyCodeToClipboard(event)}
        className={styles.codeSnippetWrapper}>
        <div className={styles.copyState}>
          <span>{copyState}</span>
        </div>
        <div id="codeSnippet" className={styles.codeSnippet}>
          <code>
            &lt;i class=&quot;
            <span className="text-[#63E6BE]">
              {fontStyleInfo} ri-{fontName} ri-{fontSize}x
            </span>
            &quot;&gt;&lt;/i&gt;
          </code>
        </div>
      </div>
    </div>
  )
}

export default DetailIcon
