import { Link, useLocation } from 'react-router-dom';
import { FileText, Plus, Building2, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: 'My Content',
    icon: FileText,
    path: '/',
  },
  {
    label: 'Create Content',
    icon: Plus,
    path: '/new',
  },
  {
    label: 'Optimize Content',
    icon: Search,
    path: '/optimize',
  },
  {
    label: 'Brands',
    icon: Building2,
    path: '/brands',
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-foreground">
          SEO Writer
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          AI Content Platform
        </p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path ||
                           (item.path === '/' && location.pathname.startsWith('/jobs')) ||
                           (item.path === '/optimize' && location.pathname.startsWith('/optimize')) ||
                           (item.path === '/brands' && location.pathname.startsWith('/brands'));

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <p>Powered by</p>
          <p className="mt-1">Claude + Gemini + SerpAPI + FAL AI</p>
        </div>
      </div>
    </aside>
  );
}
