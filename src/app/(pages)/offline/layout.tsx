import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
}

export default function OfflineLayout(props: { children: React.ReactNode }) {
  return <>{props.children}</>
}
