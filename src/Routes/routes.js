import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

// import Home from "../Pages/Home";
import Program from "../Pages/Program";
import Notice from "../Pages/Notice";
import TheCommunities from "../Pages/TheCommunities";
import Gallery from "../Pages/Gallery";

// 2023
import ProgramLaunch from "../Pages/Gallery/2023/ProgramLaunch";
import Prazeres from "../Pages/Gallery/2023/ProgramLaunch/prazeres";
import CerroCora from "../Pages/Gallery/2023/ProgramLaunch/cerroCora";
import GuararapeseVilaCandido from "../Pages/Gallery/2023/ProgramLaunch/guararapes-vilaCandido";
import EdictRefinementSeminar2023 from "../Pages/Gallery/2023/EdictRefinementSeminar";
import DefinitionOfSupportedProjects from "../Pages/Gallery/2023/DefinitionOfSupportedProjects";
import IntroducingProjectsToCommunities from "../Pages/Gallery/2023/IntroducingProjectsToCommunities";
import ProjectManagementCourse from "../Pages/Gallery/2023/ProjectManagementCourse";
import BookRelease from "../Pages/Gallery/2023/BookRelease";
import LaunchYouInThePark from "../Pages/Gallery/2023/LaunchYouInThePark";
import ProjectsInAction from "../Pages/Gallery/2023/PrejectsInAction"
import RegisterOfEvents from "../Pages/Gallery/2023/RegisterOfEvents"

// 2024
import EdictRefinementSeminar2024 from "../Pages/Gallery/2024/EdictRefinementSeminar";
import AprovedProjects from "../Pages/Gallery/2024/AprovedProjects";
import TrainingActivities from "../Pages/Gallery/2024/TrainingActivities";
import OrganizationalStrengthening from "../Pages/Gallery/2024/OrganizationalStrengthening";
import OngoingProjects from "../Pages/Gallery/2024/OngoingProjects";
import InteractionswithTijucaNationalPark from "../Pages/Gallery/2024/InteractionswithTijucaNationalPark";
import RegisterOfEvents2024 from "../Pages/Gallery/2024/RegisterOfEvents";

// 2025
import EdictRefinementSeminar2025 from "../Pages/Gallery/2025/EdictRefinementSeminar";
import AprovedProjects2025 from "../Pages/Gallery/2025/AprovedProjects";
import Mentoring from "../Pages/Gallery/2025/Mentoring";
import GoodMorningFavela from "../Pages/Gallery/2025/GoodMorningFavela";

// 2026
import Edict2026 from "../Pages/Edital2026";
import PreSelecao from "../Pages/Pre-selecionados"

// import Recursos from "../Pages/EditalRecursos";
// import Perguntas from "../Pages/EditalRecursos/Perguntas";
// import Edital2025 from "../Pages/Edital2025";
// import YouInThePark from "../Pages/YouInThePark";

import Aprovaos2025 from "../Pages/Aprovados2025"
import Directors from "../Pages/Directors";
import Team from "../Pages/Team";
import MainPage from "../Pages/MainPage";

const RoutesScreens = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<MainPage />} exact />
            {/* Página de Manutenção - Todas as rotas redirecionam para aqui */}
            {/* <Route path='/' element={<Maintenance />} exact />
            <Route path='*' element={<Navigate to='/' replace />} /> */}
            {/* <Route path='/recursos' element={<Recursos />} /> */}
            {/* <Route path='recursos/perguntas-mais-frequentes' element={<Perguntas />} /> */}
            {/* <Route path='/pre-selecao' element={<PreSelecao />} /> */}
            {/* <Route path='/edital2025' element={<Edital2025 />} /> */}
            <   Route path='/aprovados2025' element={<Aprovaos2025 />} />

            <Route path='/o-programa' element={<Program />} />
            <Route path='/edital' element={<Notice />} />
            <Route path='/as-comunidades' element={<TheCommunities />} />
            <Route path='/galeria' element={<Gallery />} />
            {/* 2023 */}
            <Route path='/2023/lancamento-do-programa' element={<ProgramLaunch />} />
            <Route path='/2023/lancamento-do-programa-prazeres' element={<Prazeres />} />
            <Route path='/2023/lancamento-do-programa-cerro-cora' element={<CerroCora />} />
            <Route path='/2023/lancamento-do-programa-guararapes-e-vila-candido' element={<GuararapeseVilaCandido />} />
            <Route path='/2023/seminario-de-refinamento' element={<EdictRefinementSeminar2023 />} />
            <Route path='/2023/curso-de-gestao' element={<ProjectManagementCourse />} />
            <Route path='/2023/definicao-dos-projetos' element={<DefinitionOfSupportedProjects />} />
            <Route path='/2023/apresentando-os-projetos' element={<IntroducingProjectsToCommunities />} />
            <Route path='/2023/lancamento-do-livro' element={<BookRelease />} />
            <Route path='/2023/lancamento-voce-no-parque' element={<LaunchYouInThePark />} />
            <Route path='/2023/projetos-em-andamento' element={<ProjectsInAction />} />
            <Route path='/2023/registros-de-eventos' element={<RegisterOfEvents />} />

            {/* 2024 */}
            <Route path='/2024/seminario-de-refinamento' element={<EdictRefinementSeminar2024 />} />
            <Route path='/2024/aprovados' element={<AprovedProjects />} />
            <Route path='/2024/atividades-de-formacao' element={<TrainingActivities />} />
            <Route path='/2024/fortalecimento-organizacional' element={<OrganizationalStrengthening />} />
            <Route path='/2024/projetos-em-andamento' element={<OngoingProjects />} />
            <Route path='/2024/interacoes-com-o-parque-nacional-da-tijuca' element={<InteractionswithTijucaNationalPark />} />
            <Route path="/2024/registros-de-eventos" element={ <RegisterOfEvents2024 />} />

            {/* 2025 */}
            <Route path='/2025/seminario-de-refinamento' element={<EdictRefinementSeminar2025 />} />
            <Route path='/2025/aprovados' element={<AprovedProjects2025 />} />
            <Route path='/2025/mentorias' element={<Mentoring />} />
            <Route path="/2025/bom-dia-favela" element={<GoodMorningFavela />} />

            {/* 2026 */}
            <Route path='/edict2026' element={<Edict2026 />} />
            <Route path="/pre-selecionados" element={<PreSelecao />} />

            <Route path='/realizadores' element={<Directors />} />
            {/* <Route path='/voce-no-parque' element={<YouInThePark />} /> */}
            <Route path='/equipe' element={<Team />} />
            <Route path='*' element={<Navigate to='/' replace />} />
         </Routes>
      </BrowserRouter>
   )
}

export default RoutesScreens;
