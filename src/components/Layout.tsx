// Layout.tsx (or your main layout component)
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {children}
    </div>
  );
};

export default Layout;