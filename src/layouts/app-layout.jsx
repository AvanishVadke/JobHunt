import Header from '@/components/ui/header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <div className="grid-background"></div>
        <main className="min-h-screen container"> 
            <Header />
            <Outlet />
        </main>
        <div className="p-10 text-center bg-gray-800 ">Job hunt</div>
        
    </div>
  )
}

export default AppLayout