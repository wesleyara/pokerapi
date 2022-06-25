export default function Index() {
  return (
    <form action="/api/v1/pokerclubsanca" method="post">
      <div>
        <input type="number" name="pontuation" placeholder="Digite a pontuação" />
        <input type="date" name="date" placeholder="Digite a data" />
        <input type="number" name="game" min={1} placeholder="Digite o número do jogo" />
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  )
}
