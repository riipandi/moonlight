'use client'

interface ErrorPageProps {
  code: number
  title: string
  subtitle?: string
  message: string
}

export default function ErrorPage({ code, title, message }: ErrorPageProps) {
  return (
    <div>
      <h1>
        {code} - {title}
      </h1>
      <p>{message}</p>
    </div>
  )
}
