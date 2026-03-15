import React from 'react'
import styled from 'styled-components';

import {
  Logo,
  ICMBio,
  Corcovado,
  Evolux,
  PNTijuca,
} from '../../assets';

const Content = styled.section`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;  

  > p {
    color: #000;
    font-weight: 600;
    padding: 1rem;
    width: 100%;  
    text-align: center;
  }
`

const BoxContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 3rem 0;  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1024px) {
    padding: 3rem 1rem;
    justify-content: center;
  }


  > img {
    max-width: 300px;
    width: 50%;
    
    @media(max-width: 1024px) {
      margin-bottom: 3rem;
    }
  }

  > div {
    display: flex;
    width: 70%;
    justify-content: space-between;

    @media(max-width: 500px) {
    width: 100%;
    }
  }
`

const BoxParces = styled.div`
width: auto;

  > div {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media(max-width: 1023px) {
    flex-direction: column;

  }
    
    > a {
      width: auto;
      .icm-img {
        width: 85px;
      }
      .corcovado-img {
        width: 175px;
      }
      .evolux-img {
        width: 120px;
      }
      .pnt-img {
        width: 161px;
      }
    }
  }
`

const BoxContacts = styled.div`

`

const ListContacts = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  > li {
    font-size: 3rem;

    > a {
      text-decoration: none;
      color: #000;
    }
  }
`

const Footer = () => {
  return (
    <Content>
      <BoxContent>
        <img src={Logo} alt='aaa' />
        <div>
          <BoxParces>
            <h2>Realizadores</h2>
            <div>
              <a href='https://www.tremdocorcovado.rio' target="_blank"><img src={Corcovado} alt='' className='corcovado-img' /></a>
              <a href='https://parquenacionaldatijuca.rio' target="_blank"><img src={PNTijuca} alt='' className='pnt-img' /></a>
              <a href='https://www.icmbio.gov.br/cma/ ' target="_blank"><img src={ICMBio} alt='' className='icm-img' /></a>
              <a href='https://institutoprecisaser.org' target="_blank"><img src={Evolux} alt='' className='evolux-img' /></a>
            </div>
          </BoxParces>
          <BoxContacts>
            <h2>Contatos</h2>
            <ListContacts>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href='https://pt-br.facebook.com/favelaparque/'
                >
                  <i class='bx bxl-facebook-square'></i>

                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href='https://instagram.com/favelaparque?igshid=YmMyMTA2M2Y='
                >
                  <i class='bx bxl-instagram' ></i>

                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href='https://api.whatsapp.com/send?phone=5521993660821'
                >
                  <i class='bx bxl-whatsapp' ></i>

                </a>
              </li>
            </ListContacts>
          </BoxContacts>
        </div>
      </BoxContent>
      <p> © 2023 Favela Parque. Todos os direitos reservados.</p>
    </Content>
  )
}

export default Footer