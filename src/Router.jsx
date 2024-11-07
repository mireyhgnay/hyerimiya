import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './routes/About';
import Works from './routes/Works';
import Skill from './routes/Skill';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'work',
        element: <Works />,
      },
      {
        path: 'skill',
        element: <Skill />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
