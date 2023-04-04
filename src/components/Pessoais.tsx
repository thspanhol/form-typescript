import './Pessoais.css'

type PessoaisProps = {
  trocaTela: Function
  setNome: Function
  setEmail: Function
  setTelefone: Function
  nome: string
  email: string
  telefone: number | string
};

function Pessoais(props: PessoaisProps) {

  return (
    <div className='pessoais'>
        <h1>Informações Pessoais</h1>
        <p>Por favor informe seu nome, email e número de telefone.</p>
        <label>Nome</label>
        <input type='text' onChange={(e) => props.setNome(e.target.value)} value={props.nome}/>
        <label>Email</label>
        <input type='text' onChange={(e) => props.setEmail(e.target.value)} value={props.email}/>
        <label>Número de Telefone</label>
        <input type='number' onChange={(e) => props.setTelefone(e.target.value)} value={props.telefone}/>
        <button onClick={() => {
          if (props.nome !== '' && props.email !== '' && props.telefone !== '') {
            props.trocaTela('planos');
          };
        }}>Próxima Etapa</button>
    </div>
  )
}

export default Pessoais;