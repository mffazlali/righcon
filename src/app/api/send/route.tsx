import { Resend } from 'resend'
import * as React from 'react'
import EmailTemplate from '@/app/components/email-template/email-template'
import { NextRequest } from 'next/server'

const resend = new Resend('re_8UnrBv2A_Fh531mxx5QssUkkEnyzjrZgr')

export async function POST(req: NextRequest) {
  try {
    const body = JSON.parse(await req.text())
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['righconinfo@gmail.com'],
      subject: body['name'],
      react: EmailTemplate({
        name: body['name'],
        mobile: body['mobile'],
        email: body['email'],
      }) as React.ReactElement,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
