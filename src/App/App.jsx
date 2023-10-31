import { useRoutes, HashRouter } from 'react-router-dom'; // Importa HashRouter
import Home from '../Home/';
import GameNames from '../GameNames';
import { WerewolfProvider } from '../Context/index';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/gameNames', element: <GameNames /> },
  ])

  return routes
}

function App() {
  return (
    <WerewolfProvider>
      <HashRouter> 
        <main>
          <AppRoutes />
        </main>
      </HashRouter>
    </WerewolfProvider>
  );
}

export default App;

