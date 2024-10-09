import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'دانلود',
}

export default function AboutLayout(props: { children: React.ReactNode }) {
  return <>{props.children}</>
}
