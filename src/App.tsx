import { useState, Component } from 'react';
import './App.css';
import Adicionais from './components/Adicionais';
import Confirmar from './components/Confirmar';
import Etapas from './components/Etapas';
import Finalizado from './components/Finalizado';
import Pessoais from './components/Pessoais';
import Planos from './components/Planos';

function App() {

  const [tela, setTela] = useState<string>('pessoais');

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<number>(0);

  const [plano, setPlano] = useState<string>('');
  const [modalidade, setModalidade] = useState<string>('mes');

  const [extras, setExtras] = useState<string[]>([]);

  const trocaTela = (param: string) => setTela(param);


  return (
    <div className='background'>
      <div className='main'>
        <Etapas trocaTela={trocaTela}/>
        {tela === 'pessoais' && <Pessoais />}
        {tela === 'planos' && <Planos />}
        {tela === 'adicionais' && <Adicionais />}
        {tela === 'confirmar' && <Confirmar />}
        {tela === 'finalizado' && <Finalizado />}
      </div>
    </div>
  )
};

export default App;