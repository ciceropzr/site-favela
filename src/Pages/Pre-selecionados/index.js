import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import PreSelecao from "../../assets/pre-selecao.jpeg";

import {
  ICMBio,
  Corcovado,
  Evolux,
  PNTijuca,
} from '../../assets';

const Content = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: fff;
  z-index: 1;
  overflow: hidden;
`;

const BoxContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 3rem 2rem 3rem 2rem;

  > ol, ul {
    list-style: none;

    > li {
      margin-bottom: 1rem;
    }
  }

  > img {
   width: 100%;
  }
`

const Figure = styled.figure`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
  
  .icm-img {
    width: 100px;
  }
  .corcovado-img {
    width: 230px;
  }
  .evolux-img {
    width: 120px;
  }
  .pnt-img {
    width: 200px;
  }
`

const TextBold = styled.p`
  font-weight: 600;
  margin: 3rem 0 2rem 0;
  display: flex;
  text-align: center;
  font-size: 1.8rem;
  width: 100%;

  .red {
    color: red;
    margin-left: 0.3rem;
  }
`

const Text = styled.p`
  margin-bottom: 1rem;

  > b {
    font-weight: 600;
  }
  
  > span {
    border-bottom: 1px solid #000;
    margin-right: 0.5rem;
  }
`

const BoxBack = styled.div`
padding-top: 2rem;
width: 100%;
max-width: 1440px;
> div {
  max-width: 246px;
  > a {
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: #000;
    font-weight: 600;
    display: ${(props) => (!props.showLink ? 'flex' : 'none')};
    margin-bottom: 5rem;

  }
}
`

const Image = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-top: 2rem;
`

const Selecao = () => {
  return (
    <Content>
      <BoxBack>
        <div>
          <Link to="/">
            <div>
              <i class='bx bxs-chevron-left' ></i>
            </div>
            Voltar para a pagina principal
          </Link>
        </div>
      </BoxBack>
      <BoxContent>
        <Figure>
          <img src={Corcovado} alt="Trem do Corcovado" className='corcovado-img' />
          <img src={PNTijuca} alt="Parque Nacional da Tijuca" className='pnt-img' />
          <img src={ICMBio} alt="Institutot Chico Mendes" className='icm-img' />
          <img src={Evolux} alt="Precisa Ser" className='evolux-img' />
        </Figure>
        <TextBold>Os 20 pré-selecionados.</TextBold>
        <Text>Começamos pra valer!</Text>
        <Text>Sábado passado realizamos o Seminário do Edital 2024.</Text>
        <Text>Dois representantes de cada uma das 20 propostas pré-selecionadas foram reunidos no Salão Nobre do Parque Lage para apresentar-se uns aos outros e entender a dinâmica da Etapa 2.</Text>
        <Text>Agora começa a etapa formativa quando disponibilizamos conhecimentos variados de Gestão de Projetos Sociais e Ferramentas Digitais de Administração e Comunicação e escrevemos juntos a proposta final de cada um.</Text>
        <Text>Uma série de encontros presenciais e mentorias on-line levam os grupos ao momento da decisão dos 11 aprovados para acessar recursos do Ciclo 1 (e os próprios coletivos definem as pontuações e regras).</Text>
        <Text>Terminamos a manhã com um almoço fantástico das mulheres empreendedoras do Cerro-Corá.</Text>
        <Text>Muito obrigado ao ICMBio e ao Trem do Corcovado pela cessão de espaço e transportes.</Text>
        <Text><b>Confira a lista dos  pré-selecionados abaixo:</b></Text>

        <Image src={PreSelecao} alt='aa' />

      </BoxContent>
    </Content>
  )
}

export default Selecao;