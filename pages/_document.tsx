import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html dir='rtl' lang="en">
      <Head />
      <body className='bg-background text-text p-5'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
