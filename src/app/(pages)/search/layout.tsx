import Loading from '@/app/components/loading/loading'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'جستجو',
}

export default function SearchLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <>
      <Suspense fallback={<Loading />}> {props.modal}</Suspense>
      {props.children}
    </>
  )
}
