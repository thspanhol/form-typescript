import "./Planos.css";

type PlanosProps = {
  trocaTela: Function;
  setPlano: Function;
  trocaModalidade: Function;
  modalidade: string;
  plano: string;
};

function Planos(props: PlanosProps) {
  let valor1: number = props.modalidade === "Mensal" ? 20 : 200;
  let valor2: number = props.modalidade === "Mensal" ? 40 : 400;
  let valor3: number = props.modalidade === "Mensal" ? 60 : 600;

  return (
    <div className="planos">
      <h1>Selecione seu Plano</h1>
      <p>Você pode escolher pagar seu plano de forma mensal ou anual.</p>
      <div className="opções">
        <div
          className={
            props.plano === "Simples" ? "plano-escolhido" : "plano-padrão"
          }
          onClick={() => props.setPlano("Simples")}
        >
          <h4>Plano</h4>
          <h2>Simples</h2>
          <h3>{`R$ ${valor1},00`}</h3>
          {props.modalidade === "Anual" && <h6>2 meses grátis</h6>}
        </div>
        <div
          className={
            props.plano === "Padrão" ? "plano-escolhido" : "plano-padrão"
          }
          onClick={() => props.setPlano("Padrão")}
        >
          <h4>Plano</h4>
          <h2>Padrão</h2>
          <h3>{`R$ ${valor2},00`}</h3>
          {props.modalidade === "Anual" && <h6>2 meses grátis</h6>}
        </div>
        <div
          className={
            props.plano === "Avançado" ? "plano-escolhido" : "plano-padrão"
          }
          onClick={() => props.setPlano("Avançado")}
        >
          <h4>Plano</h4>
          <h2>Avançado</h2>
          <h3>{`R$ ${valor3},00`}</h3>
          {props.modalidade === "Anual" && <h6>2 meses grátis</h6>}
        </div>
      </div>
      <div className="tempo">
        <button
          className={
            props.modalidade === "Mensal" ? "escolhido-btn" : "padrão-btn"
          }
          onClick={() => props.trocaModalidade()}
        >
          Assinatura Mensal
        </button>
        <button
          className={
            props.modalidade === "Anual" ? "escolhido-btn" : "padrão-btn"
          }
          onClick={() => props.trocaModalidade()}
        >
          Assinatura Anual
        </button>
      </div>
      <button
        className="voltar-button"
        onClick={() => props.trocaTela("pessoais")}
      >
        Voltar
      </button>
      <button
        className="próximo-button"
        onClick={() => {
          if (props.plano !== "") {
            props.trocaTela("adicionais");
          } else {
            alert("Por favor, selecione seu plano.");
          }
        }}
      >
        Próximo Passo
      </button>
    </div>
  );
}

export default Planos;
