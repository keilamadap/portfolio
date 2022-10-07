import "../styles/components/maincontent.sass";

const ProjetosContainer = () => {
  return (
    <div className="projetos-container">
      <section>
        <h2>Projetos</h2>
        <p>
          {" "}
          Meus projetos tem o intuito principal de colocar na prática todo
          conteúdo estudado nos últimos meses, com isso em mente fiz o projeto{" "}
          <b> #MyFavPokedex</b> que consome os dados da Poke API e põe em
          prática conceitos como React hooks, paginação, LocalStore e Context!
          Também desenvolvi um aplicativo consumindo a TDBM API para exibir uma
          lista dos filmes mais assistidos na página inicial e usei os hooks do
          React com React routes para exibir mais informações dos filmes em uma
          página separada, neste projeto optei pela ferramenta Vite para
          simplificação do código. Este portfolio é meu primeiro projeto
          aplicando conceitos de <b>Styled-components e SASS</b>! Todos os
          códigos estão disponíveis no meu GitHub, ele está sempre sendo
          atualizado então sinta-se a vontade para clicar no botão abaixo e
          acompanhar minha trajetória!
        </p>
        <a
          href="https://github.com/keilamadap?tab=repositories"
          className="btn"
          target="_blank"
        >
          Ver Projetos
        </a>
      </section>
    </div>
  );
};

export default ProjetosContainer;
