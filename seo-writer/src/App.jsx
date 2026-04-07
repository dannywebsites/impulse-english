import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import JobDetail from './pages/JobDetail';
import NewJob from './pages/NewJob';
import BrandList from './pages/BrandList';
import BrandEdit from './pages/BrandEdit';
import OptimizeList from './pages/OptimizeList';
import OptimizeNew from './pages/OptimizeNew';
import OptimizeDetail from './pages/OptimizeDetail';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/new" element={<NewJob />} />
              <Route path="/jobs/:id" element={<JobDetail />} />
              <Route path="/optimize" element={<OptimizeList />} />
              <Route path="/optimize/new" element={<OptimizeNew />} />
              <Route path="/optimize/:id" element={<OptimizeDetail />} />
              <Route path="/brands" element={<BrandList />} />
              <Route path="/brands/new" element={<BrandEdit />} />
              <Route path="/brands/:id" element={<BrandEdit />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
