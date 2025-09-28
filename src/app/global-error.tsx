'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Произошла ошибка</h2>
          <button 
            onClick={() => reset()}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Попробовать снова
          </button>
        </div>
      </body>
    </html>
  )
}
