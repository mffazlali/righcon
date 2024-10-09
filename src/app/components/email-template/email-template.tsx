import * as React from 'react'

interface EmailTemplateProps {
  name: string;
  mobile: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
                                                                        name, mobile, email,
                                                                      }) => (
  <div style={{ 'direction': 'rtl' }}>
    <h3 className={'text-black'}>
      <span>نام و نام خانوادگی</span>: <span>{name}</span>
    </h3>
    <h3 className={'text-gray-800'}>
      <span>شماره همراه</span>: <span>{mobile}</span>
    </h3>
    <h3 className={'text-gray-800'}>
      <span>ایمیل</span>: <span>{email}</span>
    </h3>
  </div>
)

export default EmailTemplate
