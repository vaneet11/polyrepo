import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';
import Layout from './Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const routing = useRoutes(routes)

  return (
    <Layout>
      <div className=' '>
        {routing}
      </div>
    </Layout>
  );
}

export default App;
