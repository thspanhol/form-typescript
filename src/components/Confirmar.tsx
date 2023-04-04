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
            <div>
                <h3>{`${props.plano} (${props.modalidade})`}</h3>
                <h3>{`R$${valorPlano},00`}</h3>
            </div>
            {props.extras.length === 0 && (
              <div>
              <p>Nenhum serviço adicional selecionado.</p>
              </div>)
            }
            {props.extras[0] && (
              <div>
              <p>{props.extras[0]}</p>
              <h3>{`R$${valorAdicional},00`}</h3>
              </div>
              )
            }
            {props.extras[1] && (
              <div>
              <p>{props.extras[1]}</p>
              <h3>{`R$${valorAdicional},00`}</h3>
              </div>
              )
            }
            {props.extras[2] && (
              <div>
              <p>{props.extras[2]}</p>
              <h3>{`R$${valorAdicional},00`}</h3>
              </div>
              )
            }
            <div>
                <p>Valor Total</p>
                <h2>{`R$${valorTotal},00`}</h2>
            </div>
        </div>
        <div className='botões'>
          <button onClick={() => props.trocaTela('adicionais')}>Voltar</button>
          <button onClick={() => props.trocaTela('finalizado')}>Próxima Etapa</button>
        </div>
    </div>
  )
};

export default Confirmar;