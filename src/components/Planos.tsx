import './Planos.css'

function Planos() {

  return (
    <div className='planos'>
        <h1>Selecione seu Plano</h1>
        <p>Você pode escolher pagar seu plano de forma mensal ou anual.</p>
        <div className='opções'>
            <div>
                <h2>01</h2>
                <h3>Simples</h3>
                <h4>valor</h4>
            </div>
            <div>
                <h2>02</h2>
                <h3>Padrão</h3>
                <h4>valor</h4>
            </div>
            <div>
                <h2>03</h2>
                <h3>Avançado</h3>
                <h4>valor</h4>
            </div>
        </div>
        <div className='tempo'>
            <h3>Mensal</h3>
            <button>Teste</button>
            <h3>Anual</h3>
        </div>
        <div className='botões'>
          <button>Voltar</button>
          <button>Próxima Etapa</button>
        </div>
    </div>
  )
}

export default Planos;