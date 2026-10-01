import GameCard from '../components/GameCard'
import JogoImg from '../assets/jogo01.jpg'

const Home = () => {
  const games = [
    { id: 1, titulo: 'Jogo 1', preco: 'R$ 59,99', imagem: JogoImg },
    { id: 2, titulo: 'Jogo 2', preco: 'R$ 79,99', imagem: JogoImg },
    { id: 3, titulo: 'Jogo 3', preco: 'R$ 99,99', imagem: JogoImg },
    { id: 4, titulo: 'Jogo 4', preco: 'R$ 49,99', imagem: JogoImg },
  ]

  return (
    <main className='home-page'>
      <h2 className='titulo'>Jogos em Destaque</h2>

      <section className='home-grid'>
        {games.map((game) => (
          <GameCard
            key={game.id}
            titulo={game.titulo}
            preco={game.preco}
            imagem={game.imagem}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
