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
import ProtectedRoute from './components/protected-route';

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
            element:<ProtectedRoute>
              <OnBoarding />
            </ProtectedRoute>
          },
          {
            path: '/jobs',
            element:<ProtectedRoute>
              <JobListing />
            </ProtectedRoute>
          },
          {
            path: '/job/:id',
            element:<ProtectedRoute>
              <JobPage />
            </ProtectedRoute>
          },
          {
            path: '/post-job',
            element:<ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          },
          {
            path: '/saved-jobs', //saved -> save gives err
            element:<ProtectedRoute>
              <SavedJobs />
            </ProtectedRoute>
          },
          {
            path: '/my-jobs',
            element:<ProtectedRoute>
              <MyJobs />
            </ProtectedRoute>
          },

        ],
      },
    ]);
    
    return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    
    <RouterProvider router={router}/>
  </ThemeProvider>
    
}

export default App
