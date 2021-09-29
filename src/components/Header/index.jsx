import HeaderStyles from './styles';

const Header = () => (
  <HeaderStyles>
    <h1 className="header__title">Previsão do tempo</h1>

    <label
      className="header__label-search"
      htmlFor="input-search"
      aria-label="Pesquisar por clima de cidade"
    >
      <input
        className="header__input-search"
        type="search"
        name="input-search"
        id="input-search"
        placeholder="Insira aqui o nome da cidade"
      />

      <img
        className="header__img-search"
        width="25"
        height="25"
        src="./svg/search-solid.svg"
        alt="Clique para pesquisar cidade"
        aria-label="Clique para pesquisar por cidade"
      />
    </label>
  </HeaderStyles>
);

export default Header;
