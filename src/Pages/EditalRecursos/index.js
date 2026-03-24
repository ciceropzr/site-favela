import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import Pdf from "../../files/Edital de Acesso a Recursos 2024.pdf";

import {
  ICMBio,
  Corcovado,
  Evolux,
  PNTijuca,
} from '../../assets';

import CalenderImg from "../../assets/Edital-img-2024.jpeg";

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

  ${'' /* > a {
    padding: 1rem 4rem;
    background: #e89f02;
    border: 3px solid #000;
    border-radius: 12px;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  } */}
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
  margin: 3rem 0 1.2rem 0;
  display: flex;

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

const Alert = styled.p`
  padding: 0.2rem 4rem;
  background: red;
  color: #fff;
  font-weight: 600;
  text-align: center;
  margin: 1.2rem 0;
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

const Edital2024 = () => {
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
          <img src={Evolux} alt="Evolux" className='evolux-img' />
        </Figure>
        <TextBold>Programa Favela-Parque
          Edital de Acesso a Recursos para as comunidades do Cerro-Corá, Guararapes/Vila Cândido e Morro dos Prazeres
        </TextBold>
        <Text>Edição 2024 – Ano 2</Text>
        <Text>O Instituto Precisa Ser, organização não-governamental em atividade no Morro dos Prazeres desde 2017 e instituição executora do Programa Favela Parque, realiza chamada local para iniciativas das comunidades Cerro-Corá, Guararapes/Vila Cândido e Prazeres acessarem recursos daquele Programa, conforme descrito no Regulamento a seguir.
        </Text>
        <Text>O Programa Favela Parque (PFP) é parte do Programa Socioambiental do Parque Nacional da Tijuca, gerido com recursos do contrato de concessão do Trem do Corcovado, conforme item 18.3 de seu projeto básico. Tem o objetivo de apoiar o Desenvolvimento Local Sustentável dos Morros Cerro-Corá, Guararapes/Vila Cândido e Prazeres ampliando suas relações com o Parque Nacional da Tijuca, fortalecendo as organizações comunitárias e o protagonismo social através de atividades de geração de renda, saúde, educação, cultura e ações ambientais engajadas; e fomentando melhoria da qualidade de vida da população residente.
        </Text>
        <Text>Vem sendo desenvolvido desde 2018, quando foi realizado o Diagnóstico Socioambiental Participativo em parceria com o/as moradore/as daquelas favelas e cujos resultados propuseram o estabelecimento de uma linha de ação permanente, anual e contínua de recursos para o desenvolvimento e implementação de estratégias que melhorem a qualidade de vida da população residente naquelas comunidades, de maneira colaborativa e adequada às realidades ali verificadas e aos objetivos do Programa. Em 2023 realizamos a primeira edição do Programa, que trouxe resultados relevantes àquelas comunidades e cujas informações detalhadas podem ser obtidas acessando o site <a href='/'>www.favelaparque.org</a></Text>
        <Text>Este Edital de Acesso tem o objetivo de selecionar iniciativas a serem apoiadas com <b>recursos técnicos e financeiros, qualificando agentes e possibilitando o desenvolvimento de projetos comunitários que ocorram e beneficiem as comunidades do Cerro-Corá, Guararapes/Vila Cândido e Prazeres, no período de Fevereiro a Setembro de 2024.
        </b></Text>
        <Alert>LEIA E RELEIA COM ATENÇÃO TODO O EDITAL ANTES DE SE INSCREVER</Alert>
        <TextBold>Quem pode se inscrever</TextBold>
        <ul>
          <li>• Indivíduos organizados em grupos de, ao menos, 2 pessoas maiores de 18 anos</li>
          <li>• Coletivos informais e Instituições que atuem em, pelo menos, uma das comunidades listadas acima e/ou desejem desenvolver projetos ali com parcerias locais já estabelecidas.</li>
        </ul>
        <Text><span>Observação importante</span>este Programa visa apoiar coletivos de fato. Antes de inscrever seu grupo reflita sobre a prática interna do compartilhamento de informações e sobre divisão de responsabilidades e horários para dar conta das variadas atividades obrigatórias do escopo do Programa, já listadas ou a serem definidas ao longo do processo pós-aprovação. Se você é o único/a responsável pela iniciativa a propor, aproveite a oportunidade para estabelecer um conjunto maior que possa responder à necessidade de representação em diversos momentos.
        </Text>
        <TextBold>Quem não pode inscrever propostas para este Edital</TextBold>
        <ol>
          <li>• Lideranças comunitárias membros da Equipe de Supervisão
          </li>
          <li>• Membros da Equipe de Gestão do Programa</li>
          <li>• Membros das instituições representantes do Comitê de Seleção e Avaliação</li>
          <li>• Moradores de outros locais, sem parcerias prévias estabelecidas na comunidade</li>
          <li>• Iniciativas aprovadas na edição anterior que não tenham concluído as entregas obrigatórias
          </li>
        </ol>
        <Text>Tendo em vista a ocorrência das eleições de 2024 informamos que nenhum projeto pode ter finalidade partidária ou ser usado em benefício de candidaturas.
        </Text>
        <Text>A qualquer momento em que se verifique a ocorrência de qualquer das situações acima, a Proposta ou Projeto será desclassificada e interrompida.
        </Text>
        <TextBold>Definições relevantes</TextBold>
        <Text><span>Proposta:</span>Ideia básica (com elementos fundamentais) apresentada no momento da inscrição
        </Text>
        <Text><span>Projeto:</span>Formulação derivada da Proposta, aperfeiçoada durante o Curso de Gestão</Text>
        <Text><span>Propostas Selecionadas:</span> Aquelas escolhidas após a inscrição para participar da etapa seguinte de seleção (Seminário de Refinamento do Edital e Curso de Gestão de Projetos)
        </Text>
        <Text><span>Projetos Aprovados:</span>Aqueles que efetivamente receberão recursos do Edital após o Curso de Gestão, garantindo pelo menos a execução do Ciclo 1
        </Text>
        <Text><span>Ciclo:</span>Período bimestral de execução do Projeto aprovado. Se o projeto desejar acessar mais do que R$ 5 mil/ano deve apresentar atividades correspondentes a cada Ciclo já na inscrição, até o valor total desejado (observando o limite máximo anual de até R$ 15 mil). Cada Ciclo é construído com etapas independentes (começo, meio e fim) e continuado nos ciclos seguintes.
          <br />
          Apenas o primeiro Ciclo é garantido após a aprovação. Os seguintes serão avaliados de maneira independente e podem receber (ou não) mais um aporte financeiro do Programa de acordo com o desenvolvimento do Ciclo anterior
        </Text>
        <Text><span>Comitê de Seleção e Avaliação:</span>Conjunto de responsáveis por todas as decisões oriundas deste Edital aqui tratadas ou derivadas de questões não contempladas até o momento. Será acionado ou não, de acordo com diferentes situações e necessidades verificadas ao longo do processo e suas decisões serão soberanas. Composto pela Equipe de Gestão (Coordenador e Mobilizadoras comunitárias) e Equipe de Supervisão do contrato do Programa.
        </Text>
        <TextBold>Dinâmica Resumida</TextBold>
        <Text><span>1) Data de Inscrição</span> <br /><br />Após a leitura atenta desse Edital, os interessados avaliam se cumprem os requisitos para participação, reúnem os dados necessários e inscrevem suas Propostas no prazo estipulado: 01 de Dezembro de 2023 a 21 de Janeiro de 2024.
        </Text>
        <Text><span>2) Eventos de Capacitação <br /><br />
        </span>O Programa Favela Parque não fornece apenas recurso financeiro aos projetos: disponibiliza também conteúdos relevantes para dinâmicas e processos de planejamento, comunicação e execução de atividades. Organiza eventos presenciais e/ou online obrigatórios a, pelo menos, UM representante de cada Proposta. Em caso de alternância entre representantes, o coletivo deve se responsabilizar pelo nivelamento interno dos conteúdos trabalhados a cada encontro.
          <br /> <br />Agende os sábados: 20 e 27 de Janeiro. Organize seu coletivo para participar. <br /><br />
          Além destes (e do Curso de Gestão de Projetos) haverá outros Eventos de Capacitação entre Fevereiro e Agosto em datas já estabelecidas ou não, também obrigatórios para os integrantes dos coletivos pré-selecionados ou que tiverem projetos aprovados no Ciclo correspondente. Qualquer curso ao longo do ano será aberto a todos os inscritos no Edital 2024. O calendário incluído neste documento traz as datas do primeiro trimestre, observe-o com atenção.
        </Text>
        <Text><span>3) Seminário</span><br /><br />Após anúncio das Propostas pré-selecionadas (dia 27 de Janeiro), será realizado um Seminário para refinamento das regras do Edital não contempladas até aqui, incluindo os critérios de aprovação final e do modelo de participação. O Seminário ocorrerá no dia 03 de Fevereiro e a participação de DOIS integrantes será pré-requisito para a continuidade do apoio.
        </Text>
        <Text><span>4) Curso de Gestão de Projetos</span> <br /><br />A seguir, os responsáveis pelas propostas participarão de um Curso de Gestão de Projetos com atividades presenciais obrigatórias (nas manhãs de sábados, dias 24 de Fevereiro; 02, 16 de Março e 06 de Abril) e online (em horários agendados na semana imediatamente posterior às aulas) para o desenvolvimento de suas Propostas Finais. A participação de UM representante em cada dia do Curso será pré-requisito para a continuidade do apoio.
        </Text>
        <Text><span>5) Projetos Aprovados </span> <br /><br />Ao final do Curso de Gestão haverá a definição dos Projetos efetivamente aprovados para receberem recursos financeiros para o primeiro Ciclo desta edição do Programa Favela Parque. Assim, no próprio dia 06 de Abril será conhecido o conjunto de Projetos Aprovados. Entre a segunda e terceira semanas de Abril ocorrerão os eventos locais de celebração e apresentação dos Projetos Aprovados às comunidades, com presença obrigatória dos representantes dos Coletivos e seus beneficiários já inscritos.
        </Text>
        <Text><span>6) Realização dos Projetos</span> <br /><br />O período de realização dos Ciclos dos Projetos será de 08 de Abril e 29 de Setembro.
          <br /> Ciclo 1 – Atividades de 08 de Abril a 01 de Junho <br />
          Ciclo 2 – Atividades de 03 de Junho a 03 de Agosto <br />
          Ciclo 3 - Atividades de 05 de Agosto a 29 de Setembro<br />
          Repasses ocorrerão sempre na semana seguinte à divulgação dos aprovados em cada Ciclo.
        </Text>
        <Text><span>7) Prestação de Contas</span> <br /><br />A prestação de contas ocorrerá com o fechamento do Relatório, até as seguintes datas: <br />
          Ciclo 1 (todos os Projetos Aprovados após o Curso de Gestão): 26 de Maio (Domingo) <br />
          Ciclo 2 (apenas os projetos aprovados após o Ciclo 1): 28 de Julho (Domingo) <br />
          Ciclo 3 (apenas os projetos aprovados após o Ciclo 2): 29 de Setembro (Domingo).
        </Text>
        <Text><span>8) Resultados do Programa</span> <br /><br />Apresentações dos processos do Programa Favela Parque às comunidades ocorrerão em datas a serem combinadas entre a quarta semana de Setembro e a primeira semana de Outubro de 2024, com participação obrigatória dos representantes dos Projetos.
        </Text>
        <TextBold>Quais áreas temáticas de projetos são possíveis de enquadramento neste Edital</TextBold>

        <ol>
          <li>• Educação (Reforço Escolar)</li>
          <li>• Educação (Acesso a Ensino Superior)</li>
          <li>• Economia solidária</li>
          <li>• Ações, Campanhas e Atividades de Promoção da Saúde</li>
          <li>• Gestão de Resíduos </li>
          <li>• Atividades Esportivas Associadas a Processos Educativos</li>
          <li>• Realização de cursos e/ou palestras</li>
          <li>• Eventos culturais, rodas de música, publicações de memórias ou histórias das comunidades e exposições - associados a processos educativos ou de organização comunitária </li>
          <li>• Melhoria de infraestrutura de espaços comunitários (de acordo com critérios legais)</li>
          <li>• .Projetos ambientais de reflorestamento e conservação da biodiversidade, recuperação e preservação dos rios, jardins e hortas comunitárias</li>
          <li>• Promoção da igualdade racial</li>
          <li>• Empoderamento feminino para atuação no território</li>
          <li>• Comunicação comunitária com fins inclusivos/educativos</li>
          <li>• Outros afins à temática socioambiental</li>
        </ol>

        <TextBold>Propostas a serem apoiadas efetivamente</TextBold>
        <Text>Os valores aplicados no conjunto de Projetos aprovados pelo Segundo Edital de Repasse de Recursos será de, pelo menos, R$ 100.000,00 (Cem Mil Reais) para, pelo menos 11 projetos de até R$ 5.000,00 selecionados após o Curso de Gestão de Projetos (entenda melhor sobre o orçamento do projeto no item a seguir). Consideraremos sempre o equilíbrio proporcional de distribuição de recursos pelas comunidades e a pertinência de temáticas abrangidas.</Text>
        <Text>Em caso de coletivos ou instituições que desejem apresentar mais de uma proposta, cada uma delas deverá indicar representantes e objetivos distintos para o seu desenvolvimento em todas as etapas (da inscrição à realização), de maneira independente uma da outra.</Text>
        <Text>Ressaltamos ainda que se uma Proposta representar parte de uma ação continuada e/ou permanente (ou seja, já em andamento ou com futura continuidade) ou parte de um projeto maior com outros apoiadores e recursos, a ideia deve descrever objetivamente quais serão as ações, indicadores e custos capazes de execução, avaliação e prestação de contas em cada Ciclo do período estipulado neste Edital.</Text>

        <TextBold>Valor total das Propostas Aprovadas</TextBold>
        <Text>As Propostas deverão estar enquadradas, já na inscrição, até o valor máximo de R$ 15 Mil mas deverão ser construídas em Ciclos: módulos bimestrais independentes de, até R$ 5 Mil cada um (ou seja, cada Ciclo deve ter atividades que encerram processos independentes de continuidade ou não de recursos do Programa Favela Parque). Acompanhe a dinâmica:</Text>
        <Text>Após o Curso de Gestão fazemos a seleção de, pelo menos, ONZE Projetos Aprovados para receber recursos em 2024. Cada um terá o aporte de até R$ 5 Mil e, caso tenha interesse em acessar os recursos dos próximos Ciclos, indicará as fases seguintes mas executará cada Ciclo em dois meses. Após isso apresentará sua prestação de contas.</Text>
        <Text>Se o custo total do Projeto for acima de R$ 5 mil e até R$ 10 mil é possível ter um segundo Ciclo de execução após a prestação de contas do primeiro. Caso esteja entre as SEIS mais bem posicionadas naquela avaliação secundária, receberá mais R$ 5 mil para as novas atividades propostas, seguidas de nova avalição ao final daqueles dois meses. </Text>
        <Text>Se o custo total do projeto for de até R$ 15 mil (seis meses de execução), é possível ter um terceiro ciclo, caso seja um dos QUATRO mais bem posicionados na terceira avaliação.</Text>
        <TextBold>Período e Forma de Inscrição de Propostas</TextBold>
        <Text>O período de inscrição será de <b>01 de Dezembro/23 a 21 de Janeiro de 2024  </b>(às 23h59m), exclusivamente através do preenchimento de formulário próprio no site do Programa. Serão solicitadas as seguintes informações básicas acerca de sua proposta:
        </Text>

        <ul>
          <li>1) Nome da Proposta </li>
          <li>2) Nome da Comunidade</li>
          <li>3) Área Temática (Múltipla escolha)</li>
          <li>4) Proponentes: Nomes, contatos, gênero, cor ou raça e minibio dos responsáveis pela   proposta</li>
          <li>5) Breve Histórico do coletivo</li>
          <li>6) Quantos integrantes tem seu Coletivo (Quantos voluntários? Quantos tem algum apoio financeiro?)</li>
          <li>7)  Proposta: identifica algum problema que tenta resolver; o que fará; como; com quem etc.</li>
          <li>8)  Justificativa: Por que acha que seu projeto é importante para a comunidade?</li>
          <li>9)  Sua Proposta prevê quantos Ciclos de Execução? (Múltipla escolha)</li>
          <li>10) Cronograma de Atividades de cada Ciclo: Detalhamento das ações que serão
            executadas sequencialmente por datas estimadas
          </li>
          <li>11) Orçamento de cada Ciclo: Valores e destinação dos recursos (bens, produtos e serviços adquiridos e outros tipos de custeio com valores estimados)
          </li>
          <li>12) Resultados finais esperados de cada Ciclo</li>
          <li>13) Há parceiros na execução dessa Proposta? Cite-os e identifique a forma de participação de cada (Troca de conhecimento, cessão de espaço para execução, recursos financeiros etc.)</li>
          <li>14) Como você ficou sabendo do Programa (Múltipla escolha)?</li>
        </ul>

        <Text>O objetivo da etapa de seleção de Propostas é identificar relevâncias, consistências e capacidade de realização final. Uma vez selecionada, sua Proposta será desenvolvida em conjunto com a equipe de mentores do Curso de Gestão de Projetos, entre Fevereiro e Abril de 2024. Assim, desejamos ter entre as Propostas inscritas desde ideias de grupos já experientes como de novos agentes que desejam promover transformações em suas comunidades, mesmo sem experiências na elaboração de Projetos.
        </Text>
        <Text>Outras informações e/ou dúvidas poderão ser obtidas em contato com a Coordenação do Programa, pelo WhatsApp: (21) 99366-0821 ou com a Mobilizadora de sua comunidade:</Text>
        <Text>
          Cerro-Corá | Luciane Medeiros | 98348-7096 <br />
          Guararapes e Vila Cândido | Leonice Paimx | 99808-0608 <br />
          Prazeres | Geysa Santos  | 97446-1013
        </Text>
        <Text><i>Se precisar de ajuda para escrever sua proposta, busque a Mobilizadora da sua comunidade.</i></Text>
        <Text><b>Propostas inscritas até o dia 21 de Dezembro</b> podem agendar com a Coordenação um horário para checar informações que possam comprometer a avaliação. Caso deseje esse apoio (somente após inscrever a proposta) escreva para: charles.siqueira@precisaser.org </Text>
        <TextBold>Definição de Propostas Selecionadas Pós-Inscrição
        </TextBold>

        <Text>
          Uma das principais metas do Programa Favela-Parque é estabelecer um processo transparente, participativo e desenvolvido com as lideranças, instituições locais e a população das comunidades. Ser referência de valorização do saber local, reconhecendo e estimulando a busca dos moradores pelo melhor desenvolvimento das comunidades, com visão e estratégias para superação de desafios que enfrentam. Ao mesmo tempo busca a participação igualitária, maximizando os processos de divulgação, comunicação e avaliação efetivos para evitar privilégios de qualquer comunidade, áreas ou grupos locais em detrimento de outros.
        </Text>
        <Text>Inicialmente, apenas a seleção pós-inscrição será exclusiva do Comitê de Seleção e Avaliação (Coordenação e Equipe Supervisora do PFP: membros da Câmara Temática de Educação Ambiental, do Parque Nacional da Tijuca, do Trem do Corcovado e três lideranças comunitárias). Ocorrerá até o dia 27 de Janeiro, quando serão divulgadas as 20 Propostas selecionadas para o Seminário de Refinamento e o Curso de Gestão de Projetos.</Text>
        <Text>Esta equipe vai elaborar um ranking das Propostas inscritas, pontuando-as de acordo com os seguintes critérios:</Text>
        <Text><b>Objetividade da Proposta: </b>a ideia destacada apresenta visão e organização iniciais para sua elaboração e desenvolvimento nas etapas posteriores?</Text>
        <Text><b>Relevância para a comunidade e objetivos do Programa: </b>apresenta alguma questão importante para o desenvolvimento daquela comunidade e/ou sua população? Identifica possível solução, ainda que parcial, para algum problema?</Text>
        <Text><b>Capacidade de execução: </b>o/as proponentes demonstram interesse, capacidade e conhecimento para desenvolver as ações do projeto? Têm um cronograma coerente? Os gastos são compatíveis com os recursos a serem disponibilizados?</Text>
        <Text><b>Interação na comunidade: </b>qual o grau de interação dos proponentes com a comunidade?</Text>
        <Text><b>Sobreposição de públicos e natureza de propostas: </b>Há propostas similares em termos de atividades e/ou público beneficiário no mesmo territorio?
        </Text>
        <Text>A pontuação de cada Proposta determinará o conjunto de participantes por comunidade pré-selecionados para o Seminário de Refinamento e no Curso de Gestão de Projetos.</Text>
        <Text>Importante ressaltar que esse ranking será feito por comunidade (Cerro-Corá, Guararapes/Vila Cândido e Prazeres) para buscar uma distribuição coerente de Propostas por comunidades:</Text>
        <Text><span>Cerro-Corá e Prazeres: </span>até 6 Propostas para cada comunidade</Text>
        <Text><span>Guararapes/Vila Cândido:</span>até 8 Propostas</Text>
        <TextBold>Visitas da Equipe de Gestão aos proponentes selecionados</TextBold>
        <Text>Entre 29 de Janeiro e 08 de Fevereiro ocorrerão visitas presenciais da Equipe de Gestão aos 20 proponentes pré-selecionados, nos locais e horários previstos para a execução das atividades. Essas visitas não são classificatórias, servirão para entender presencialmente a dinâmica de cada proponente e gerar conteúdo para o Curso de Gestão.</Text>
        <TextBold>Eventos de Capacitação</TextBold>
        <Text>Processos de planejamento, comunicação e execução de atividades, presenciais e obrigatórios a pelo menos UM representante principal dos coletivos inscritos no Edital 2024:</Text>
        <Text><span>Curso Organização, Processos e Métodos</span></Text>
        <Text>Dias 20 a 27 de Janeiro  |  Dois Sábados, das 9h às 12h30</Text>
        <Text><span>Curso Ferramentas Administrativas e Recursos Online </span>(Preparatório para o Curso de Gestão)</Text>
        <Text>Dia 24 de Fevereiro  |  Sábado, das 9h às 12h30  (com outra atividade online na semana seguinte em data a escolher: 26 ou 29 de Fevereiro, das 19 às 21h)</Text>
        <Text>Haverá outros Eventos de Capacitação também presenciais após a definição de Projetos Aprovados, abertos a TODOS os proponentes do Edital 2024. Ocorrerão em datas a serem definidas (entre Maio e Agosto), sendo obrigatórias APENAS para os coletivos com projetos em andamento nos Ciclos. </Text>
        <TextBold>Seminário de Refinamento do Edital</TextBold>
        <Text>É prevista a realização em período integral (de 9 às 14h) do dia 03 de Fevereiro (Sábado) do Seminário de Refinamento do Edital do Programa Favela Parque. Almoçaremos juntos.</Text>
        <Text>Essa etapa é intermediária entre o conjunto de Propostas pré-selecionadas e aquelas que serão efetivamente Projetos Aprovados após o Curso de Gestão. Assim, todas as Propostas participantes do Seminário participarão do Curso, mas nem todas utilizarão os recursos financeiros disponíveis nesta edição do Programa Favela Parque.</Text>
        <Text>A participação integral no Seminário é obrigatória a DOIS integrantes principais da Proposta e o não atendimento desta regra ensejará sua desclassificação. Havendo desistência prévia de um dos integrantes inscritos para o Seminário, será possível efetuar a troca de integrante.</Text>
        <Text>Durante o Seminário serão debatidos e ratificados em conjunto os aspectos, questões e sugestões desenvolvidas na Edição 2023 para a maior eficácia do Edital nesta e em futuras edições; além das regras para o funcionamento do Curso de Gestão, que serão apresentadas pela Equipe de Gestão do Programa. Entre elas estarão:</Text>
        <ol>
          <li>• Definição dos Critérios de Aprovação após o Curso</li>
          <li>• Garantia da proporcionalidade entre as comunidades</li>
          <li>• Dinâmicas das tarefas do Curso de Gestão</li>
          <li>• Indicadores de Avaliação da participação dos proponentes</li>
          <li>• Possíveis interações de Propostas similares entre as comunidades</li>
          <li>• Critérios para recebimento de recursos e Prestação de Contas, observadas as devidas garantias legais</li>
        </ol>
        <Text>No Edital de 2023 o grupo de comunitários criou os Critérios para a definição de Projetos Aprovados pelo PFP e o Seminário visa ratificar ou revisar, em conjunto, os critérios definitivos para a aprovação dos Projetos que receberão os recursos em 2024. Sempre valorizando a relação com o Parque Nacional da Tijuca e sua conservação, melhorando e adaptando as edições posteriores do Programa Favela-Parque e seus Editais à identidade das comunidades e do conjunto de proponentes de cada ano.</Text>
        <Text>Importante ressaltar que, sempre que se estabeleça a elaboração de rankings ou votações em qualquer etapa, cada Proposta/Projeto terá direito a uma manifestação (ou seja, independentemente do tamanho do grupo proponente seu peso será igual aos demais). Os participantes do Seminário poderão propor outras questões relevantes para essa etapa do Favela-Parque que julgarem pertinentes.</Text>
        <TextBold>Curso de Gestão de Projetos</TextBold>
        <Text>Nos dias 24 de Fevereiro; 02 e 16 de Março e 06 de Abril (sábados), das 9 às 13h será realizado o Curso de Gestão de Projetos, com a Consultoria de Projetos Socioambientais Saberes e mentoria da Coordenação do Programa Favela-Parque.</Text>
        <Text><span>Será obrigatória:</span></Text>
        <ul>
          <li>1) A participação de UM dos responsáveis pela Proposta a cada dia, do início ao fim das atividades</li>
          <li>2) A realização das tarefas intermediárias de elaboração dos projetos que ocorrerão com mentoria virtual ou presencial a ser agendada individualmente entre uma data e outra.</li>
        </ul>
        <Text>Nesta etapa as Propostas se tornam Projetos, elaborando suas metodologias a partir dos seguintes conteúdos:</Text>
        <ul>
          <li>Dia 1: Ferramentas: Registro/produção de dados, partilhamento e comunicação online</li>
          <li>Dia 2: Reflexão Inicial/Objetivos/Relevância/Indicadores de Avaliação do Impacto</li>
          <li>Dia 3: Cronograma/Orçamento/Registro/Prestação de Contas/Ética</li>
          <li>Dia 4: Leitura e defesa das Propostas finalizadas e definição de aprovados com base nos critérios elencados no Seminário e na avaliação coletiva</li>
        </ul>
        <Text>Sendo um dos objetivos do Favela Parque dar protagonismo aos moradores em instâncias decisórias de processos do Programa, seguiremos no modelo onde o/as próprio/as participantes do Curso de Gestão (além da Equipe de Gestão e do Comitê de Seleção e Avaliação) definem quais serão os Projetos Apoiados por este Edital, de acordo com os critérios e mecanismos ratificados de igual maneira autoral pelo/as integrantes no Seminário de Refinação, ocorrido antes.</Text>
        <TextBold>Calendário – Janeiro a Março de 2024<p className='red'>(Em vermelho as datas obrigatórias)</p></TextBold>
        <br />
        <img src={CalenderImg} alt="" />
        <br />
        <TextBold>Considerações finais</TextBold>
        <Text>As datas deste Edital poderão ser alteradas de acordo com a dinâmica das comunidades e o interesse do Programa.  Comunicaremos com antecedência aos envolvidos.</Text>
        <Text>Questões não tratadas aqui serão deliberadas pelo Comitê de Seleção e Avaliação do Edital do Programa Favela-Parque e sua decisão será soberana.</Text>
        <Text>Acesse aqui o formulário e inscreva sua ideia: <a href='https://encurtador.com.br/HSTV7' target="_blank" rel="noreferrer"  >https://encurtador.com.br/HSTV7</a>
          <br />
          <i>Receberá um e-mail com as respostas que deu ao formulário e isso <span>confirma sua inscrição</span></i>
        </Text>
        <Text>No caso de enviar mais de uma vez a mesma Proposta, <span>será considerada apenas a última enviada.</span> Ficaremos muito felizes de recebê-la! </Text>
        <Text>Caso tenha restado dúvidas, consulte o Anexo clicando aqui: <Link to="/recursos/perguntas-mais-frequentes">Perguntas mais frequentes</Link></Text>

        <Text><b>Edital 2024 </b><a href={Pdf} download>Baixe aqui</a></Text>

      </BoxContent>
    </Content>
  )
}

export default Edital2024;