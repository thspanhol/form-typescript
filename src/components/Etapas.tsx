import './Etapas.css';

type PessoaisProps = {
    tela: string
  };

function Etapas(props: PessoaisProps) {

    return (
      <div className='div-etapas'>

        <div className={props.tela === 'pessoais' ? 'selecionado' : 'etapa'}>
            <h2>1</h2>
            <div>
                <h4>Passo 1</h4>
                <h3>Informações Pessoais</h3>
            </div>
        </div>

        <div className={props.tela === 'planos' ? 'selecionado' : 'etapa'}>
            <h2>2</h2>
            <div>
                <h4>Passo 2</h4>
                <h3>Selecionar seu Plano</h3>
            </div>
        </div>

        <div className={props.tela === 'adicionais' ? 'selecionado' : 'etapa'}>
            <h2>3</h2>
            <div>
                <h4>Passo 3</h4>
                <h3>Serviços Adicionais</h3>
            </div>
        </div>

        <div className={props.tela === 'confirmar' ? 'selecionado' : 'etapa'}>
            <h2>4</h2>
            <div>
                <h4>Passo 4</h4>
                <h3>Confirmar Assinatura</h3>
            </div>
        </div>

      </div>
    )
  }
  
  export default Etapas;