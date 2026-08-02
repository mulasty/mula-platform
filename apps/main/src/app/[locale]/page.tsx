import { Navbar } from '@/components/Navbar'

export const revalidate = 3600

export default async function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl font-bold">TEST - strona działa!</h1>
        <p className="mt-4 text-xl">Jeśli widzisz ten tekst, problem jest w komponentach.</p>
      </main>
    </>
  )
}
