import "./tela.css";

function Tela() {
  return (
    <div className="tela">

      <div className="secao topo">
        <div className="texto">
          <h1>O Sol</h1>
          <p>A estrela que ilumina e aquece nosso planeta.</p>
        </div>
      </div>

      <div className="secao meio">
        <h1>velozes e furiosos</h1>
        <p>Dois astros que influenciam a Terra e fazem parte da nossa vida.</p>
      </div>

      <div className="secao baixo">
        <div className="texto">
          <h1>A Lua</h1>
          <p>Nosso satélite natural que ilumina a noite.</p>
        </div>
      </div>

    </div>
  );
}

export default Tela;