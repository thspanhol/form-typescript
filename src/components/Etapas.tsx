import { FunctionComponent } from 'react';
import './Etapas.css'

type EtapasProps = {
    trocaTela: Function
};

function Etapas(props: EtapasProps) {

    return (
      <div className='div-etapas'>

        <div className='etapa' onClick={() => props.trocaTela('pessoais')}>
            <h2>01</h2>
            <div>
                <h4>Etapa 1</h4>
                <h3>Informações Pessoais</h3>
            </div>
        </div>

        <div className='etapa' onClick={() => props.trocaTela('planos')}>
            <h2>02</h2>
            <div>
                <h4>Etapa 2</h4>
                <h3>Selecionar seu Plano</h3>
            </div>
        </div>

        <div className='etapa' onClick={() => props.trocaTela('adicionais')}>
            <h2>03</h2>
            <div>
                <h4>Etapa 3</h4>
                <h3>Serviços Adicionais</h3>
            </div>
        </div>

        <div className='etapa' onClick={() => props.trocaTela('confirmar')}>
            <h2>04</h2>
            <div>
                <h4>Etapa 4</h4>
                <h3>Confirmar Assinatura</h3>
            </div>
        </div>

      </div>
    )
  }
  
  export default Etapas;