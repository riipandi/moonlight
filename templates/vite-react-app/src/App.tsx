import ReactLogo from '@/assets/images/react.svg'
import ViteLogo from '@/assets/images/vite.svg'

function App() {
  return (
    <>
      <div className='mx-auto flex h-full min-h-screen w-full flex-col dark:bg-neutral-900'>
        <header className='mb-auto w-full' aria-hidden></header>
        <div className='mx-auto flex flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8'>
          <div className='mx-auto flex w-full border-collapse items-center justify-center space-x-4'>
            <img src={ViteLogo} alt='Vite logo' className='h-20' />
            <img src={ReactLogo} alt='Vite logo' className='h-20' />
          </div>
          <div className='text-center text-lg text-gray-600 dark:text-gray-400 sm:mt-8'>
            <p className='leading-8'>This is an example starter template React with Vite.</p>
            <p className='leading-8'>
              Vite + React + Typescript + Tailwind CSS + React Hook Form + Vitest
            </p>
          </div>
        </div>
        <footer className='mt-auto py-5 text-center'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <p className='text-sm tracking-wide text-gray-600 dark:text-gray-400'>
              &copy; {new Date().getFullYear()} - Made by{' '}
              <a
                href='https://ripandis.com'
                className='hover:underline'
                rel='noopener noreferrer'
                target='_blank'
              >
                Aris Ripandi
              </a>{' '}
              in 🇮🇩
            </p>
            <p className='mt-2 text-sm tracking-wide text-gray-600 dark:text-gray-400'>
              v{import.meta.env.APP_VERSION}
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
