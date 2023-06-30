import { PropsWithChildren } from 'react'
import { cn } from '@myorg/ui'

import { fontMono, fontSans } from '@/utils/fonts'
import '@/app/styles.css'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className={cn(fontSans.className, fontMono.variable)}>
      <head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        {/* <meta name='msapplication-TileImage' content='/favicon.svg' /> */}
        <meta name='msapplication-TileColor' content='#004AAD' />
        <meta name='theme-color' content='#004AAD' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        {/* <link rel='icon' type='image/svg+xml' href='/favicon.svg' /> */}
        {/* <link rel='icon' type='image/png' href='/favicon.png' /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
