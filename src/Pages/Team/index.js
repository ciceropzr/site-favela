import styled from 'styled-components';
import * as S from './styles';

import Onda from "../../assets/wave-blue.svg"


const Content = styled.div`
  margin-top: -5px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0076b3;
`

const BoxContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 3rem 0;

  > h2 {
    color: #fff;
    margin-bottom: 3rem;
  }

  @media(max-width: 1499px) {
    padding: 3rem 1rem;
    flex-direction: column;
  }
`

const Wave = styled.img`
width: 100vw;
`

function Team() {
  return (
    <>
      <Wave src={Onda} />
      <Content id='equipe'>
        <BoxContent>
          <h2>Equipe</h2>
          <S.BackText>
            O acompanhamento do programa Favela-Parque é composto de duas instâncias:
          </S.BackText>
          <S.ContentTexts>
            <S.BackText>
              <strong>A Equipe Supervisora:</strong>
            </S.BackText>
            <S.BackText>
              Composta por membros do Parque Nacional da Tijuca e da Câmara de Educação Ambiental; do Trem do Corcovado e uma liderança das comunidades do Guararapes/Vila Cândido, Cerro-Corá e Morro dos Prazeres. Reúne-se regularmente a cada três meses, ou sob demandas que surjam ao longo do processo.
            </S.BackText>
          </S.ContentTexts>

          <S.BackText><strong>Gestão do Programa:</strong></S.BackText>
          <S.ContentTexts>
            <S.BackText>
              <strong> Charles Siqueira - </strong> Coordenador
            </S.BackText>
            <S.BackText>
              Morador e membro da Associação de Moradores do Morro dos Prazeres. Graduado em Tecnologia em Gestão Ambiental pela Universidade Veiga de Almeida, Rio de Janeiro, Rio de Janeiro. Desenvolveu projetos autorais para populações de áreas periféricas da cidade do Rio de Janeiro com a ONG Instituto Cultural Pólen e outras organizações não governamentais, com destaque para o projeto CriaAtivo Film School e Nave Lab CriaAtivo - qualificação profissional e empreendedorismo em áreas de Cinema e economia criativa para centenas de jovens de favelas e bairros periféricos do Rio de Janeiro, desenvolvidos de 2017 a 2021. Foi Coordenador da Nave do Conhecimento de Triagem, equipamento de Ciência e Tecnologia da Prefeitura do Rio, com administração da REDEH e do Instituto Rio Cultural, entre os anos de 2010 a 2020. Co-produtor do Prêmio de Inovação Comunitária e Coordenador das atividades de Economia Criativa para a Inclusão Social, da Brazil Foundation (Nova York/Rio), entre os anos de 2011 a 2017. Conselheiro da Universidade das Quebradas - Projeto de Extensão do Programa Avançado de Cultura Contemporânea da UFRJ, desde 2011. Palestrante sobre Estratégias de Economia Criativa para a Inclusão Social.
            </S.BackText>
            <S.BackText>
              WhatsApp: 21 99366-0821
            </S.BackText>
            <S.BackText>
              E-mail: charles.siqueira@precisaser.org
            </S.BackText>
          </S.ContentTexts>

          <S.ContentTexts team>
            <S.BackText>
              <strong>O Programa tem dois espaços de fortalecimento organizacional</strong> para os moradores em geral, que podem acessar notebooks e Internet, além de apoio para atividades diversas como reuniões, encontros online, formações à distância etc.
            </S.BackText>
            <S.BackText>
              <strong>Para agendar o uso dos equipamentos e espaços nos prédios comunitários que sediam o Favela Parque nas comunidades; ou buscar maiores informações sobre o Programa, entre em contato com:</strong>
            </S.BackText>
            <S.BackText>
              <strong>Jacson Lima - </strong> Telefone: (21) 96531-7978 
            </S.BackText>
            <S.BackText>
            Mobilizador Comunitário da área dos <strong>Prazeres</strong>.
            </S.BackText>

            <S.BackText>
              <strong>Processo seletivo em andamento - </strong>Telefone a definir
            </S.BackText>
            <S.BackText>
              Mobilizador/a Comunitário/a da área do <strong>Cerro-Corá e Guararapes/Vila Cândido</strong>.
            </S.BackText>
          </S.ContentTexts>
        </BoxContent>
      </Content>
    </>
  );
}

export default Team;
