import './Pessoais.css'

function Pessoais() {

  return (
    <div className='pessoais'>
        <h1>Informações Pessoais</h1>
        <p>Por favor informe seu nome, email e número de telefone.</p>
        <label>Nome</label>
        <input type='text'/>
        <label>Email</label>
        <input type='text'/>
        <label>Número de Telefone</label>
        <input type='text'/>
        <button>Próxima Etapa</button>
    </div>
  )
}

export default Pessoais;