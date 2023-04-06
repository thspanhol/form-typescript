import './Confirmar.css';

type ConfirmarProps = {
  trocaTela: Function
  plano: string
  modalidade: string
  extras: string[]
};

function Confirmar(props: ConfirmarProps) {

  let valorPlano: number;

  if (props.plano === 'Simples') {
    valorPlano = 20;
  } else if (props.plano === 'Padrão'){
    valorPlano = 40;
  } else {
    valorPlano = 60;
  };

  valorPlano = props.modalidade === 'Mensal' ? valorPlano : 10 * valorPlano;

  let valorAdicional: number = props.modalidade === 'Mensal' ? 5 : 50;

  const valorTotal: number = valorPlano + (props.extras.length * valorAdicional);

  return (
    <div className='confirmar'>
        <h1>Confirmar Detalhes do Plano</h1>
        <p>Verifique sua escolha de plano, pagamento e serviços adicionais antes da confirmação.</p>
        <div className='escolhas'>
            <div className='plano-final'>
                <h3>{`Plano ${props.plano} (${props.modalidade})`}</h3>
                {props.modalidade === 'Anual' && <h6>Com 2 meses grátis</h6>}
                <h3>{`R$${valorPlano},00`}</h3>
            </div>
            {props.extras.length === 0 && (
              <div className='nenhum'>
              <p>Nenhum serviço adicional selecionado.</p>
              </div>)
            }
            {props.extras[0] && (
              <div className='extra-final'>
              <p>{props.extras[0]}</p>
              {props.modalidade === 'Anual' && <h6>Válido durante o ano inteiro</h6>}
              <h3>{`R$${valorAdicional},00`}</h3>
              </div>
              )
            }
            {props.extras[1] && (
              <div className='extra-final'>
              <p>{props.extras[1]}</p>
              {props.modalidade === 'Anual' && <h6>Válido durante o ano inteiro</h6>}
              <h3>{`R$${valorAdicional},00`}</h3>
              </div>
              )
            }
            {props.extras[2] && (
              <div className='extra-final'>
              <p>{props.extras[2]}</p>
              {props.modalidade === 'Anual' && <h6>Válido durante o ano inteiro</h6>}
              <h3>{`R$${valorAdicional},00`}</h3>
              </div>
              )
            }
            <div className='valor-final'>
                <p>Valor Total:</p>
                <h2>{`R$${valorTotal},00`}</h2>
            </div>
        </div>
          <button className='voltar-button' onClick={() => props.trocaTela('adicionais')}>Voltar</button>
          <button className='pro-button' onClick={() => props.trocaTela('finalizado')}>Confirmar Assinatura</button>
    </div>
  )
};

export default Confirmar;