import './Adicionais.css';

function Adicionais() {

  return (
    <div className='adicionais'>
        <h1>Selecione Serviços Adicionais</h1>
        <p>Você pode adicionar mais serviços para complementar seu plano.</p>
        <div className='extras'>
            <div>
                <input type='checkbox' />
                <div>
                    <h3>Opção Extra de Serviço 01</h3>
                    <p>Detalhes do serviço extra</p>
                </div>
                <h4>Valor</h4>
            </div>
            <div>
                <input type='checkbox' />
                <div>
                    <h3>Opção Extra de Serviço 02</h3>
                    <p>Detalhes do serviço extra</p>
                </div>
                <h4>Valor</h4>
            </div>
            <div>
                <input type='checkbox' />
                <div>
                    <h3>Opção Extra de Serviço 03</h3>
                    <p>Detalhes do serviço extra</p>
                </div>
                <h4>Valor</h4>
            </div>
        </div>
        <div className='botões'>
          <button>Voltar</button>
          <button>Próxima Etapa</button>
        </div>
    </div>
  )
};

export default Adicionais;