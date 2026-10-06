import GameCard from "../components/GameCard"
import jogo01 from '../assets/jogo01.jpg'
import jogo02 from '../assets/jogo02.jpg'
import jogo03 from '../assets/jogo03.jpg'
import jogo04 from '../assets/jogo04.jpg'
import jogo05 from '../assets/jogo05.jpg'

const Home = () => {

  const games = [
    { id: 1, titulo: "Jogo-01", preco: "R$ 200,00", imagem: jogo01 },
    { id: 2, titulo: "Jogo-02", preco: "R$ 400,00", imagem: jogo02 },
    { id: 3, titulo: "Jogo-03", preco: "R$ 500,00", imagem: jogo03 },
    { id: 4, titulo: "Jogo-04", preco: "R$ 600,00", imagem: jogo04 },
    { id: 5, titulo: "Jogo-05", preco: "R$ 700,00", imagem: jogo05 }
  ];
  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl">JOGOS EM DESTAQUES</h2>

      {/* É aqui que os card ficam um do lado do outro */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {games.map((jogo) => (
          <GameCard
            key={jogo.id}
            titulo={jogo.titulo}
            preco={jogo.preco}
            imagem={jogo.imagem}
          />
        ))}
      </section>

    </main>
  )
}

export default Home
