import './Confirmar.css';

function Confirmar() {

  return (
    <div className='confirmar'>
        <h1>Confirmar Detalhes do Plano</h1>
        <p>Verifique sua escolha de plano, pagamento e serviços adicionais antes da confirmação.</p>
        <div className='escolhas'>
            <div>
                <h3>Plano Escolhido</h3>
                <h3>valor</h3>
            </div>
            <div>
                <p>Serviço Adicional</p>
                <h3>valor</h3>
            </div>
            <div>
                <p>Plano Escolhido</p>
                <h3>valor</h3>
            </div>
            <div>
                <p>Plano Escolhido</p>
                <h2>valor</h2>
            </div>
        </div>
        <div className='botões'>
          <button>Voltar</button>
          <button>Próxima Etapa</button>
        </div>
    </div>
  )
};

export default Confirmar;