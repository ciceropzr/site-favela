import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  ICMBio,
  Corcovado,
  Evolux,
  PNTijuca,
} from '../../assets';
import * as S from './styles';

const images = [Corcovado, PNTijuca, ICMBio, Evolux];

const moveBanner = keyframes`
  0% {
    transform: translateX(${100 / images.length}%);
  }
  100% {
    transform: translateX(-${100 / images.length}%);
  }
`;

export const ContentPartnerships = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  animation: ${moveBanner} 20s linear infinite;
  overflow: hidden;
`;

export const ImgPartnerships = styled.img`
  width: 6rem;
  height: auto;
  object-fit: contain;
  margin-right: 1rem;
`;

const BarParces = styled.div`
margin-top: 2rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 2rem;
  font-family: FiraSans;

  @media(max-width: 1165px) {
        margin-top: 1rem;
      }

  > h3 {
    @media(max-width: 1269px) {
    margin-bottom: 1rem;

    }
  }

  @media(max-width: 1269px) {
    align-items: center;
  justify-content: center;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
      
    > p {
      font-size: 1.2rem;
      @media(max-width: 1269px) {
        margin-bottom: 1rem;
      }
    }

    @media(max-width: 1269px) {
    align-items: center;
  justify-content: center;
  }
    > figure{
      display: flex;
      align-items: center;
       gap: 2rem;

       @media(max-width: 447px){
        display: none;
    }
        .icm-img {
        width: 60px;

        @media(max-width: 557px) {
        width: 40px;
        }
      }
        .corcovado-img {
        width: 160px;

        @media(max-width: 557px) {
        width: 130px;
        }
      }
        .evolux-img {
        width: 70px;

        @media(max-width: 557px) {
        width: 40px;
        }
      }
        .pnt-img {
        width: 140px;

        @media(max-width: 557px) {
        width: 110px;
        }
      }
  }

  @media(max-width: 1269px) {
    flex-direction: column;
  }
  }

`

// const BoxParces = styled.div`
//   max-width: 1500px;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 2rem;
// `


function Home() {
  return (
    <>
      <S.Container>
        <Link to="/pre-selecionados">
          <S.TextHighlight> Pré-Selecionados </S.TextHighlight>
        </Link>
      </S.Container>
      <BarParces>
        <h3>Realização</h3>
        <div>
          <p>Realizado em parceria com quatro comunidades do entorno da Floresta Nacional da Tijuca: Cerro-Corá, Guararapes, Morro dos Prazeres e Vila Cândido</p>
          <figure>
            <img src={Corcovado} alt='' className='corcovado-img' />
            <img src={PNTijuca} alt='' className='pnt-img' />
            <img src={ICMBio} alt='' className='icm-img' />
            <img src={Evolux} alt='' className='evolux-img' />
          </figure>
        </div>
      </BarParces>
    </>
  );
}

export default Home;