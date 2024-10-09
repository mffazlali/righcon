'use server'
import { NextRequest, NextResponse } from 'next/server'
import { load } from 'cheerio'
import { readSvg, stringReader } from '@/app/lib/utilities/fileSvgStream'

export async function GET(req: NextRequest) {
  const searchParams: URLSearchParams = req.nextUrl.searchParams
  const fontFamily = searchParams.get('fontFamily') ?? ''
  const fontName = searchParams.get('fontName') ?? ''
  const color = searchParams.get('fontColor') ?? ''
  const size = searchParams.get('fontSize') ?? ''
  const DUMMY_URL = `./public/fonts/righcon/images/${fontFamily}/${fontName}.svg`
  const svgData = await readSvg(DUMMY_URL)
  let svgXml = load(svgData, { xmlMode: true })
  svgXml('g').attr('fill', `#${color}`)
  svgXml('g').attr('font-size', String(+size * 5))
  let svg = stringReader(svgXml.html())
  const headers = new Headers()
  headers.append('Content-Disposition', `attachment; filename="${fontName}.svg"`)
  headers.append('Content-Type', 'image/svg+xml')
  return new Response(svg, {
    headers,
  })
}


