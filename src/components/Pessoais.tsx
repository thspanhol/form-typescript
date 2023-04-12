import "./Pessoais.css";

type PessoaisProps = {
  trocaTela: Function;
  setNome: Function;
  setEmail: Function;
  setTelefone: Function;
  nome: string;
  email: string;
  telefone: number;
};

function Pessoais(props: PessoaisProps) {
  let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  return (
    <div className="pessoais">
      <h1>Informações Pessoais</h1>
      <p>Por favor informe seu nome, email e número de telefone.</p>
      <label>Nome</label>
      <input
        type="text"
        spellCheck="false"
        onChange={(e) => props.setNome(e.target.value)}
        value={props.nome}
      />
      <label>Email</label>
      <input
        type="text"
        spellCheck="false"
        onChange={(e) => props.setEmail(e.target.value)}
        value={props.email}
      />
      <label>Número de Telefone</label>
      <input
        type="number"
        spellCheck="false"
        onChange={(e) => props.setTelefone(e.target.value)}
        value={props.telefone === 777 ? "" : props.telefone}
      />
      <button
        onClick={() => {
          if (props.nome.length < 3) {
            alert("Por favor, insira seu nome.");
          } else if (!emailRegex.test(props.email)) {
            alert("Por favor, insira um email válido.");
          } else if (props.telefone < 9999999999) {
            alert("Por favor, insira seu telefone com o DDD");
          } else {
            props.trocaTela("planos");
          }
        }}
      >
        Próximo Passo
      </button>
    </div>
  );
}

export default Pessoais;
