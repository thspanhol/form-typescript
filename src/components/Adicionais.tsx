import "./Adicionais.css";

type AdicionaisProps = {
  trocaTela: Function;
  adicionaExtras: Function;
  extras: string[];
  modalidade: string;
};

function Adicionais(props: AdicionaisProps) {
  let valor: number = props.modalidade === "Mensal" ? 5 : 50;

  return (
    <div className="adicionais">
      <h1>Selecione Serviços Adicionais</h1>
      <p>Clique nos serviços extras que desejar adicionar ao seu plano.</p>
      <div className="extras">
        <div
          className={
            props.extras.includes("Serviço extra 01")
              ? "extra-escolhido"
              : "opção-adicional"
          }
        >
          <div onClick={() => props.adicionaExtras("Serviço extra 01")}>
            <h3>Opção Extra de Serviço 01</h3>
            <p>Detalhes do serviço extra</p>
            {props.modalidade === "Anual" && (
              <h6>Válido durante o ano inteiro.</h6>
            )}
          </div>
          <h4>{`R$ ${valor},00`}</h4>
        </div>
        <div
          className={
            props.extras.includes("Serviço extra 02")
              ? "extra-escolhido"
              : "opção-adicional"
          }
        >
          <div onClick={() => props.adicionaExtras("Serviço extra 02")}>
            <h3>Opção Extra de Serviço 02</h3>
            <p>Detalhes do serviço extra</p>
            {props.modalidade === "Anual" && (
              <h6>Válido durante o ano inteiro.</h6>
            )}
          </div>
          <h4>{`R$ ${valor},00`}</h4>
        </div>
        <div
          className={
            props.extras.includes("Serviço extra 03")
              ? "extra-escolhido"
              : "opção-adicional"
          }
        >
          <div onClick={() => props.adicionaExtras("Serviço extra 03")}>
            <h3>Opção Extra de Serviço 03</h3>
            <p>Detalhes do serviço extra</p>
            {props.modalidade === "Anual" && (
              <h6>Válido durante o ano inteiro.</h6>
            )}
          </div>
          <h4>{`R$ ${valor},00`}</h4>
        </div>
      </div>
      <button
        className="voltar-button"
        onClick={() => props.trocaTela("planos")}
      >
        Voltar
      </button>
      <button
        className="próximo-button"
        onClick={() => props.trocaTela("confirmar")}
      >
        Próximo Passo
      </button>
    </div>
  );
}

export default Adicionais;
