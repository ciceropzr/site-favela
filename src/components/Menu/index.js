import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import * as S from './styles';

function Menu() {
  const [open, setOpen] = useState(false);

  const listMenu = [
    {
      id: 0,
      name: 'Favela Parque',
      anchor: '#o-programa',
    },
    {
      id: 1,
      name: 'Trajetória',
      anchor: '#trajetoria',
    },
    {
      id: 2,
      name: 'As Comunidades',
      anchor: '#as-comunidades',
    },
    {
      id: 3,
      name: 'Galerias',
      anchor: '#galeria',
    },
    {
      id: 4,
      name: 'Realizadores',
      anchor: '#realizadores',
    },
    // {
    //   id: 5,
    //   name: 'Você no Parque',
    //   anchor: '#vocenoparque',
    // },
    {
      id: 6,
      name: 'Equipe',
      anchor: '#equipe',
    },
    {
      id: 7,
      name: 'Videoaula',
      anchor: 'https://www.youtube.com/@favelaparque',
      // isDisabled: true,
      externalLink: true,
    },
  ];

  const renderIconBurger = () => (
    <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </S.StyledBurger>
  );

  return (
    <S.Header id="topo">
      <S.Nav>
        <a href="#">
          <S.Logo src={Logo} alt="Logo" />
        </a>
        {renderIconBurger()}
        <S.Ul open={open}>
          {listMenu.map((item) => (
            <S.Li key={item.id} disabled={item.isDisabled}>
              <a
                href={item.anchor}
                onClick={() => setOpen(false)}
                target={item.externalLink ? '_blank' : '_self'}
                rel={item.externalLink ? 'noopener noreferrer' : ''}
              >
                {item.name}
              </a>
            </S.Li>
          ))}
          <S.ListContacts>
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
          </S.ListContacts>
        </S.Ul>
      </S.Nav>
    </S.Header>
  );
}

export default Menu;
