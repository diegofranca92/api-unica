import Link from 'next/link'
function Home() {
  return (
    <div>
      <h1>Pagina Inicial</h1>
      <Link href='/sobre'>
        <a>Acessar pagina Sobre</a>
      </Link>
    </div>
  )
}

export default Home
