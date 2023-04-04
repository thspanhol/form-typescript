import './Adicionais.css';

type AdicionaisProps = {
    trocaTela: Function
    adicionaExtras: Function
    extras: string[]
    modalidade: string
};

function Adicionais(props: AdicionaisProps) {

    let valor: number = props.modalidade === 'Mensal' ? 5 : 50;

  return (
    <div className='adicionais'>
        <h1>Selecione Serviços Adicionais</h1>
        <p>Você pode adicionar mais serviços para complementar seu plano.</p>
        <div className='extras'>
            <div>
                <input type='checkbox' checked={props.extras.includes('Serviço extra 01')} onChange={() => props.adicionaExtras('Serviço extra 01')} />
                <div>
                    <h3>Opção Extra de Serviço 01</h3>
                    <p>Detalhes do serviço extra</p>
                </div>
                <h4>{`R$ ${valor},00`}</h4>
            </div>
            <div>
                <input type='checkbox' checked={props.extras.includes('Serviço extra 02')} onChange={() => props.adicionaExtras('Serviço extra 02')} />
                <div>
                    <h3>Opção Extra de Serviço 02</h3>
                    <p>Detalhes do serviço extra</p>
                </div>
                <h4>{`R$ ${valor},00`}</h4>
            </div>
            <div>
                <input type='checkbox' checked={props.extras.includes('Serviço extra 03')} onChange={() => props.adicionaExtras('Serviço extra 03')} />
                <div>
                    <h3>Opção Extra de Serviço 03</h3>
                    <p>Detalhes do serviço extra</p>
                </div>
                <h4>{`R$ ${valor},00`}</h4>
            </div>
        </div>
        <div className='botões'>
          <button onClick={() => props.trocaTela('planos')}>Voltar</button>
          <button onClick={() => props.trocaTela('confirmar')}>Próxima Etapa</button>
        </div>
    </div>
  )
};

export default Adicionais;