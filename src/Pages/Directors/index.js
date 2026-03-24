import styled from 'styled-components';
import Layout from '../Layout';

import * as S from './styles';

const Content = styled.section`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Directors() {
  return (
    <Content>
      <Layout showLink>
        <h2 id='realizadores'>Realizadores</h2>
        <S.BackText>
          O Programa Favela Parque é o resultado da união de três instituições: O Parque
          Nacional da Tijuca, dentro de seu programa socioambiental; o Trem do Corcovado,
          que aporta recursos para o Programa e o Instituto Precisa Ser que administra e gere
          as ações.
        </S.BackText>
        <S.ContentTexts>
          <S.BackText>
            <a
              href="https://parquenacionaldatijuca.rio/"
              rel="noreferrer"
              target="_blank"
            >
              <strong>O Parque Nacional da Tijuca:</strong>
            </a>
          </S.BackText>
          <S.BackText>
            O Parque Nacional da Tijuca é o mais visitado do Brasil, com média anual de 3 milhões de visitantes. Ele é uma Unidade de Conservação de proteção integral oficialmente criada em 1961, quando o grande Maciço da Tijuca e suas florestas foram reunidos em um só parque.
            O primeiro nome dado a esta Unidade de Conservação foi o de Parque Nacional do Rio de Janeiro, com 33 km² de área. Seis anos depois, em 8 de fevereiro de 1967, o nome foi definitivamente alterado para Parque Nacional da Tijuca. Em 4 de julho de 2004, um Decreto Federal ampliou os limites do Parque para 39,51 km², incorporando locais como o Parque Lage, Serra dos Pretos Forros e Morro da Covanca.
            O patrimônio natural é sem dúvida o mais conhecido e consagrado no Parque, mas sua ocupação ao longo de quatro séculos gerou uma valiosa herança histórico-cultural. A região que hoje é a Floresta da Tijuca já era uma área protegida desde 1861, antes mesmo do parque ser classificado em sua categoria atual.
            Há dois séculos, a substituição da floresta por lavouras de café gerava uma grave seca que colocava em risco o abastecimento de água da cidade do Rio de Janeiro. Por isso, as fazendas foram desapropriadas e um enorme reflorestamento ajudou a floresta a se regenerar e a proteger as nascentes dos principais rios da cidade.
            Hoje, seus milhões de visitantes buscam lazer em contato com a natureza, banhos de cachoeira e seus atrativos naturais. Além do famoso Corcovado, o Parque conta com diversos atrativos abertos ao público, como o Pico da Tijuca, a Vista Chinesa, a Pedra da Gávea etc.
            Inserido no coração da cidade, o menor parque nacional do Brasil tem grande importância econômica e para a vida dos cariocas. Além de compor a paisagem da cidade maravilhosa, contribui para a regulação da temperatura e das chuvas e recebe turistas, esportistas, religiosos e famílias em passeio.
            É administrado pelo Instituto Chico Mendes de Conservação da Biodiversidade, o ICMBio, um órgão federal ligado ao Ministério do Meio Ambiente e Mudança do Clima, com o apoio de diversos parceiros como, por exemplo, a Prefeitura da Cidade do Rio de Janeiro e o Governo do Estado do Rio de Janeiro.
          </S.BackText>
          <S.BackText>
            Quer conhecer o Parque? Acesse as redes sociais (@parquenacionaldatijuca) ou o site {' '}
            <a
              href="www.parquenacionaldatijuca.rio"
              rel="noreferrer"
              target="_blank"
            >
              www.parquenacionaldatijuca.rio
            </a>
          </S.BackText>
        </S.ContentTexts>
        <S.ContentTexts>
          <S.BackText>
            <a
              href="https://www.tremdocorcovado.rio/"
              rel="noreferrer"
              target="_blank"
            >
              <strong>O Trem do Corcovado:</strong>
            </a>

          </S.BackText>
          <S.BackText>
            É uma linha férrea localizada na cidade do Rio de Janeiro. A linha começa no bairro do Cosme Velho e segue até o
            cume do morro do Corcovado, a uma altitude de 710m. O cume é famoso pela estátua do Cristo Redentor e pela vista
            aérea de várias praias do Rio de Janeiro. O sistema é administrado pela empresa Trem do Corcovado, que opera o
            serviço desde 2014, com prazo de concessão de 20 anos. De acordo com a proposta básica de concessão e compensação
            por uso de área protegida por Unidades de Conservação, a empresa celebrou contrato para apoiar o programa
            Socioambiental do parque Nacional da Tijuca, que gerou o Programa Favela-Parque,
          </S.BackText>
          <S.BackText>
            Quer saber mais sobre o Trem do Corcovado:
            <a
              href="https://www.tremdocorcovado.rio/"
              rel="noreferrer"
              target="_blank"
            >
              https://www.tremdocorcovado.rio/
            </a>
          </S.BackText>
        </S.ContentTexts>
          <S.ContentTexts>
          <S.BackText>
            <a
              href=""
              rel="noreferrer"
              target="_blank"
            >
              <strong>Instituto Evolux:</strong>
            </a>
          </S.BackText>
          <S.BackText>
          O Instituto Evolux é uma organização da sociedade civil de base comunitária com atuação no Morro dos Prazeres e em comunidades do entorno de Santa Teresa, no Rio de Janeiro. Com mais de três décadas de trajetória social no território, o instituto nasce da evolução do trabalho iniciado pelo Grupo PROA, fundado em 1998 por Zoraide Gomes (Cris dos Prazeres), e consolidado ao longo dos anos por meio de iniciativas voltadas à educação, cultura, inclusão produtiva, meio ambiente e fortalecimento comunitário.
          <br/>Com uma atuação enraizada no território e baseada na escuta ativa da comunidade, o Evolux desenvolve projetos que conectam moradores, organizações, empresas e poder público, ampliando o acesso a oportunidades, direitos e redes de apoio.
          <br/>Ao longo de sua trajetória, a organização contribuiu para impactar milhares de pessoas por meio de ações de formação, mobilização social, promoção da cidadania, geração de renda e valorização da cultura local.
          <br/>No Programa Favela Parque, o Instituto Evolux atua como realizador territorial, contribuindo para fortalecer o protagonismo comunitário, estimular a participação social e promover iniciativas que conectem desenvolvimento urbano, meio ambiente e qualidade de vida nas favelas.
          </S.BackText>
        </S.ContentTexts>
        <S.BackText>
          <a
            href="https://institutoprecisaser.org/"
            rel="noreferrer"
            target="_blank"
          >
            <strong>
              O Instituto Precisa Ser:
            </strong>
          </a>
        </S.BackText>
        <S.BackText>
          O Precisa Ser foi a organização responsável pelos 3 primeiros anos do programa Favela Parque. Trata-se de um instituto de tecnologias digitais e sociais, sem fins lucrativos, criado em 2016. com um longo histórico de suporte e desenvolvimento de inovação social, ele atua como uma rede que ajuda líderes e apoiadores em ações que promovem o acesso a educação de qualidade, redução de desigualdade e bem-estar coletivo, atuando em projetos próprios ou na assessoria de gestão para OSCs e iniciativas sociais independentes alcançarem mais impacto. Alguns destaques são:
        </S.BackText>
        <S.BackText>
          Vai Na Web - Programa de ensino gratuito de programação digital avançada para jovens de 16-29 anos, moradores de favela.
        </S.BackText>
        <S.BackText>
          Estúdio Vai Na Web - Centro de formação continuada onde os estudantes aperfeiçoam seus conhecimentos técnicos em programação e suas habilidades profissionais para atuação no mercado de trabalho.
        </S.BackText>
        <S.BackText>
          StartupIN Favelas - Uma imersão empreendedora (onde as mais sofisticadas técnicas de empreendedorismo são ensinadas) e um concurso de ideias para os empreendedores de favela.
        </S.BackText>
      </Layout>
    </Content>
  );
}

export default Directors;
