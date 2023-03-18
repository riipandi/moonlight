import Link from 'next/link'
import { EvaOutlineExternalLinkOutline } from '@twistail/icons'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col bg-white pt-16 pb-12'>
      <main className='mx-auto flex w-full max-w-4xl grow flex-col justify-center px-4 sm:px-6 lg:px-8'>
        <div className='py-16'>
          <div className='text-center'>
            <p className='text-primary-600 text-lg font-semibold sm:text-2xl'>Howdy, developer!</p>
            <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'>
              Welcome to your new app
            </h1>
            <div className='mx-auto mt-8 max-w-4xl'>
              <p className='text-lg leading-8 text-gray-500'>
                Moonlight is a skeleton project using moonrepo, already configured with ESLint,
                Jest, Prettier, TypeScript as moon tasks. This repo configured with ESLint, Jest,
                Prettier, TypeScript as moon tasks..
              </p>
            </div>
            <div className='mt-12 flex items-center justify-center space-x-3'>
              <Link
                href='https://github.com/feelantera/moonlight'
                className='bg-primary-500 hover:bg-primary-600 focus:ring-primary-400 inline-flex items-center rounded-md border border-transparent px-6 py-4 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
              >
                Learn more about moonlight
              </Link>
              <Link
                href='https://moonrepo.dev/docs'
                className='bg-primary-100 text-primary-600 hover:bg-primary-200 focus:ring-primary-500 inline-flex items-center rounded-md border border-transparent px-6 py-4 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
              >
                Learn more about moonrepo
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className='mx-auto w-full max-w-7xl shrink-0 px-4 sm:px-6 lg:px-8'>
        <p className='flex justify-center'>
          <span className='mr-1 text-gray-600'>Brought to you by</span>
          <Link
            href='https://feel.co.id'
            className='text-primary-800 inline-flex items-center space-x-0.5 hover:text-gray-600'
          >
            <span>Feelantera</span>
            <EvaOutlineExternalLinkOutline />
          </Link>
        </p>
      </footer>
    </div>
  )
}
