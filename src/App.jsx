import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import OnBoarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import PostJob from './pages/post-job';
import SavedJobs from './pages/save-job';
import MyJobs from './pages/my-jobs';
import { ThemeProvider } from './components/ui/theme-provide';

function App() {

  const router = createBrowserRouter([
      {
        element:<AppLayout />,
        children:[
          {
            path: '/',
            element:<LandingPage />
          },
          {
            path: '/Onboarding',
            element:<OnBoarding />
          },
          {
            path: '/jobs',
            element:<JobListing />
          },
          {
            path: '/job/:id',
            element:<JobPage />
          },
          {
            path: '/post-job',
            element:<PostJob />
          },
          {
            path: '/saved-jobs',
            element:<SavedJobs />
          },
          {
            path: '/my-jobs',
            element:<MyJobs />
          },

        ],
      },
    ]);
    
    return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    
    <RouterProvider router={router}/>
  </ThemeProvider>
    
}

export default App
