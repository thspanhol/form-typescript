import './Planos.css'

type PlanosProps = {
  trocaTela: Function
  setPlano: Function
  trocaModalidade: Function
  modalidade: string
  plano: string
};

function Planos(props: PlanosProps) {

  let valor1: number = props.modalidade === 'Mensal' ? 20 : 200;
  let valor2: number = props.modalidade === 'Mensal' ? 40 : 400;
  let valor3: number = props.modalidade === 'Mensal' ? 60 : 600;

  return (
    <div className='planos'>
        <h1>Selecione seu Plano</h1>
        <p>Você pode escolher pagar seu plano de forma mensal ou anual.</p>
        <div className='opções'>
            <div onClick={() => props.setPlano('Simples')}>
                <h2>01</h2>
                <h3>Simples</h3>
                <h4>{`R$ ${valor1},00`}</h4>
            </div>
            <div onClick={() => props.setPlano('Padrão')}>
                <h2>02</h2>
                <h3>Padrão</h3>
                <h4>{`R$ ${valor2},00`}</h4>
            </div>
            <div onClick={() => props.setPlano('Avançado')}>
                <h2>03</h2>
                <h3>Avançado</h3>
                <h4>{`R$ ${valor3},00`}</h4>
            </div>
        </div>
        <div className='tempo'>
            <h3>Mensal</h3>
            <button onClick={() => props.trocaModalidade()}>Teste</button>
            <h3>Anual</h3>
        </div>
        <div className='botões'>
          <button onClick={() => props.trocaTela('pessoais')}>Voltar</button>
          <button onClick={() => {
            if (props.plano !== '') {
              props.trocaTela('adicionais')
            };
          }}>Próxima Etapa</button>
        </div>
    </div>
  )
}

export default Planos;