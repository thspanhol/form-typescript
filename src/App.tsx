import { useState } from "react";
import "./App.css";
import Adicionais from "./components/Adicionais";
import Confirmar from "./components/Confirmar";
import Etapas from "./components/Etapas";
import Finalizado from "./components/Finalizado";
import Pessoais from "./components/Pessoais";
import Planos from "./components/Planos";

function App() {
  const [tela, setTela] = useState<string>("pessoais");
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<number>(777);
  const [plano, setPlano] = useState<string>("");
  const [modalidade, setModalidade] = useState<string>("Mensal");
  const [extras, setExtras] = useState<string[]>([]);

  const trocaTela = (param: string) => setTela(param);
  const trocaModalidade = () =>
    setModalidade(modalidade === "Mensal" ? "Anual" : "Mensal");
  const adicionaExtras = (param: string) => {
    if (extras.includes(param)) {
      let filtro = extras.filter((e) => e !== param);
      setExtras(filtro);
    } else {
      setExtras([...extras, param]);
    }
  };

  return (
    <div className="background">
      <div className="main">
        {tela !== "finalizado" && <Etapas tela={tela} />}
        {tela === "pessoais" && (
          <Pessoais
            trocaTela={trocaTela}
            setNome={setNome}
            setEmail={setEmail}
            setTelefone={setTelefone}
            nome={nome}
            email={email}
            telefone={telefone}
          />
        )}
        {tela === "planos" && (
          <Planos
            trocaTela={trocaTela}
            setPlano={setPlano}
            trocaModalidade={trocaModalidade}
            modalidade={modalidade}
            plano={plano}
          />
        )}
        {tela === "adicionais" && (
          <Adicionais
            trocaTela={trocaTela}
            adicionaExtras={adicionaExtras}
            extras={extras}
            modalidade={modalidade}
          />
        )}
        {tela === "confirmar" && (
          <Confirmar
            trocaTela={trocaTela}
            plano={plano}
            modalidade={modalidade}
            extras={extras}
          />
        )}
        {tela === "finalizado" && <Finalizado />}
      </div>
    </div>
  );
}

export default App;
