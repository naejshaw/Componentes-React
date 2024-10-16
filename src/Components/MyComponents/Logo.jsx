import styled from 'styled-components';

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  width: auto; // Melhoria: Mantém a proporção da imagem
  max-width: 100%; // Melhoria: Garante que a imagem não exceda o contêiner
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Logo;