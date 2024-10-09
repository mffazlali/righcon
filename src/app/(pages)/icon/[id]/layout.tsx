import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ایکون',
}

export default function SearchLayout(props: { children: React.ReactNode }) {
  return <>
  {props.children}
  </>
}
