import { bool } from 'prop-types';

import SectionStyled from './styles';

const Loading = ({ orange }) => (
  <SectionStyled>
    {orange ? (
      <img
        width="100"
        height="100"
        src="./svg/Spinner-1s-100px-orange.svg"
        alt="Imagem de carregamento."
        aria-label="Imagem de carregamento."
      />
    ) : (
      <img
        width="100"
        height="100"
        src="./svg/Spinner-1s-100px.svg"
        alt="Imagem de carregamento."
        aria-label="Imagem de carregamento."
      />
    )}
  </SectionStyled>
);

Loading.defaultProps = {
  orange: false,
};

Loading.propTypes = {
  orange: bool,
};

export default Loading;
