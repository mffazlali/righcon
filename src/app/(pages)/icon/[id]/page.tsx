'use client'
import DetailIcon from '@/app/components/detail-icon/detail-icon'
import ModalIcon from '@/app/components/modal-icon/modal-icon'
import { IconModel } from '@/app/lib/models/icon-model'
import { useSearchParams } from 'next/navigation'
export default function IconModal({ params }: { params: { id: string } }) {
  const fontName = params.id
  const searchParams = useSearchParams()
  const fontStyle = searchParams.get('f') ?? ''
  const fontCode = searchParams.get('u') ?? ''
  const fontFarsiName = searchParams.get('a') ?? ''
  const icon: IconModel = { fontCode, fontFarsiName, fontName, fontStyle }

  return (
    <ModalIcon icon={icon}>
      <DetailIcon icon={icon} />
    </ModalIcon>
  )
}
