import MainStyled from './styles';

const MainContent = () => (
  <MainStyled>
    <h2 className="main__title">Capitais</h2>

    <section className="main__section">
      <table
        className="table"
        aria-label="Tabela de temperatura mínima e máxima das capitais"
      >
        <thead className="table__head">
          <tr>
            <th className="table__head-title">min</th>
            <th className="table__head-title">max</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table__row">
            <td className="table__cell">18°</td>
            <td className="table__cell">27°</td>
            <td className="table__cell">Rio de Janeiro</td>
          </tr>
          <tr className="table__row">
            <td className="table__cell">14°</td>
            <td className="table__cell">22°</td>
            <td className="table__cell">São Paulo</td>
          </tr>
          <tr className="table__row">
            <td className="table__cell">21°</td>
            <td className="table__cell">32°</td>
            <td className="table__cell">Belo Horizonte</td>
          </tr>
        </tbody>
      </table>
    </section>
  </MainStyled>
);

export default MainContent;
