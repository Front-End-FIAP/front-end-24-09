//destruct 
const GameCard = ({ titulo, preco, imagem }) => {
  return (
    <article className='game-card'>
      <img src={imagem} alt={titulo} className='game-card__image' />

      <div className='game-card__content'>
        <h2 className='game-card__title'>{titulo}</h2>
        <p className='game-card__price'>{preco}</p>
        <button className='game-card__button'>Comprar</button>
      </div>
    </article>
  )
}

export default GameCard
