// getServerSideProps
// Busca os dados a cada requisição

// getStaticProps
// Executa apenas em tempo de build

// getStaticPaths
// Para rotas dinamicas, devem ser esteticamentes gerados em tempo de build

// Incremental Static Regeneration
// Junção dos dois (revalidade) gera novamente ao atingir o tempo

import { LandingPage } from '@/templates/landing-page';

export default function Home() {
  return <LandingPage />;
}
