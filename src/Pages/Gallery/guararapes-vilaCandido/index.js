import Layout from '../../Layout';
import {
  ABelaVistadosGuararapes,
  AlbertoSzafranSubPrefeitDoCentro,
  Desbravadores2,
  EquipedeGestaoParqueEquipeSupervisoraeInstitutoPrecisaSer,
  GrupoDesbravadores,
  Guararapes,
  Guararapes1,
  Guararapes3,
  Guararapes5,
  LeonardoBrasil
} from '../../../assets';

import * as S from '../globalPhotoStyle';
  
function GuararapesVilaCandido() {
  const listCommunities = [
    {
      id: 0,
      name: 'Guararapes',
      photos: [
        {
          img: Guararapes,
          type: '',
        },
        {
          img: Guararapes1,
          type: '',
        },
        {
          img: Guararapes3,
          type: '',
        },
        {
          img: Guararapes5,
          type: '',
        } 
      ]
    },
    {
      id: 1,
      name: 'A Bela Vistados Guararapes',
      photos: [
        {
          img: ABelaVistadosGuararapes,
          type: '',
        }
      ]
    },
    {
      id: 2,
      name: 'Alberto Szafran - SubPrefeit do centro',
      photos: [
        {
          img: AlbertoSzafranSubPrefeitDoCentro,
          type: 'standing',
        }
      ]
    },
    {
      id: 3,
      name: 'Desbravadores',
      photos: [
        {
          img: Desbravadores2,
          type: '',
        }
      ]
    },
    {
      id: 4,
      name: 'Equipe de Gestao, Parque, Equipe, Supervisor e Instituto Precisa Ser',
      photos: [
        {
          img: EquipedeGestaoParqueEquipeSupervisoraeInstitutoPrecisaSer,
          type: '',
        }
      ]
    },
    {
      id: 5,
      name: 'Grupo Desbravadores',
      photos: [
        {
          img: GrupoDesbravadores,
          type: '',
        }
      ]
    },
    {
      id: 5,
      name: 'Leonardo Brasil',
      photos: [
        {
          img: LeonardoBrasil,
          type: 'standing',
        }
      ]
    }
  ];

  return (
    <Layout>
      <S.BackText>
        Lançamento do Projeto no Guararapes Vila-Candido.
      </S.BackText>
      <S.ContainerPhoto>
        {listCommunities.map(i => (
          <>
            <S.BackText subtitle>{i.name}</S.BackText>
            <S.ContentPhoto>
              {i?.photos?.map(imagem => (
                <S.Img src={imagem.img} alt='Fotos da comunidade Guararapes e Vila-Candido' align="left" type={imagem.type}/>
              ))}
            </S.ContentPhoto>
          </>
        ))}
      </S.ContainerPhoto>
    </Layout>
  );
}
  
export default GuararapesVilaCandido;
