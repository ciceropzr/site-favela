import { useState } from 'react'
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import Onda from "../../assets/wave.svg"
import Graph from "../../assets/graphcs.jpeg";
import GraphHora from "../../assets/graphc-hours.jpg";

import Cozinha from "../../Pages/Gallery/2023/PrejectsInAction/assets/cozinha1.jpg";
import Moradores from "../../Pages/Gallery/2023/PrejectsInAction/assets/moradores4.jpg";
import Residuos from "../../Pages/Gallery/2023/PrejectsInAction/assets/residuos3.jpg";
import { Container } from '../Home/styles';

const Content = styled.section`
  position: relative;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #008742;
  z-index: 1;
`;

const BoxContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 3rem 0 0 0;

  > a {
    width: 100%;
  }

  > h2 {
    margin-bottom: 1rem;
    color: #fff;
    font-size: 3rem;
    position: relative;
    max-width: 18rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  > div {
      width: 100%;
  }
  @media(max-width: 1499px) {
    padding: 3rem 1rem 1rem 1rem;
    flex-direction: column;
  }

  @media(max-width: 690px) {
    padding: 6rem 1rem 1rem 1rem;
  } 
`

const Text = styled.p`
  margin-bottom: 1rem;
  color: #fff;

  
  > span {
    border-bottom: 3px solid #000;
    margin-right: 0.5rem;
    color: #fff;

  }
`

const Wavee = styled.img`
width: 100vw;
margin-top: -3px;
`

const Notice = () => {
  const [activeButton, setActiveButton] = useState(2023);

  const renderSelectedYear = () => {
    switch (activeButton) {
      case 2024:
        return <Text>Em construção...</Text>
      case 2023:
        return <>
          
        </>
      default:
        return null
    }
  }

  return (
    <>
      <Content id='trajetoria'>
        <BoxContent>
          <h2>Trajetória</h2>
          <Text>
            O Programa Favela Parque está em atividade nos territórios do Cerro-Corá, Guararapes, Prazeres e Vila Cândido desde Outubro de 2022, fruto de um longo processo participativo com as comunidades que definiram em anos anteriores as linhas de atuação do Programa.
          </Text>
          <Text>
            O <b>Edital de Acesso a Recursos</b> é uma iniciativa de apoio aos atores sociais daquelas comunidades, organizados em coletivos com diferentes atuações. Abrimos uma chamada pública a cada ano e já realizamos 3 edições. Em 2026, seguimos no nosso quarto ano de apoios.
          </Text>
          <Text>
            O <b>Fortalecimento Organizacional</b> do Programa é uma linha que apoia ações das comunidades que beneficiem a população como um todo: mutirões, ações intergrupais de escala maior, eventos tradicionais de cunho aberto e gratuito, etc. Bem como apoios para a <b>Infraestrutura local</b> (apoio aos equipamentos locais, disponibilização de notebook e internet, formação de Conselhos locais, etc).
          </Text>
          <Text>
            O processo de Formação e Informação consiste em um itinerário formativo disponibilizado aos atores sociais apoiados e outros interessados nas comunidades, garantindo um legado de conhecimento duradouro para o ambiente local. 
          </Text>
          <Text>
            Já realizamos cursos diversos como: Educação Ambiental de Base Comunitária, Gestão de Projetos, Marketing Digital, Registro Audiovisual, Organização, Processos e Métodos e Análise de Dados,  entre outros.
          </Text>
          <Text>
            Um dos grandes destaques é o curso permanente de Educação Ambiental de Base Comunitária, coordenado pelo GEASUR – Grupo de Estudos de Educação Ambiental Desde El Sur, conduzido por professores-doutores da UNIRIO. A importância da interação com o saber universitário também está presente na parceria de 2 anos com o Departamento de Psicologia da UFRJ, que acompanha e estimula os atores sociais ao longo de sua jornada de execução dos projetos.
          </Text>
          <Text>
            A Comunicação, o Acompanhamento e a Supervisão do Programa também são um diferencial positivo deste Programa. Todo o processo é participativo e compartilhado em diversas instâncias com os moradores, em constantes devolutivas nas comunidades; e supervisionado pela Equipe de Supervisão do Contrato, composto por membros do ICMBio, do Trem do Corcovado, do Parque Nacional e lideranças das comunidades. 
          </Text>
          <Text>
            A <b>interação das favelas com o Parque Nacional da Tijuca</b> e seus atrativos é outra ação constantemente desenvolvida pelo Programa. Seja na vivência com o espaço da floresta, ou na visitação ao morro do Corcovado e ao Cristo Redentor, são momentos que aproximam os dois universos, favorecendo ao engajamento de todos com o meio ambiente que nos cerca. 
          </Text>
          <Text>
            <b>Acompanhe os 3 anos do Programa Favela Parque em 3 minutos</b>, no vídeo abaixo: 
          </Text>
        </BoxContent>
      </Content>
      <Wavee src={Onda} />
    </>
  )
}

export default Notice;
