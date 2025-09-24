'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Car, Compass, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/recommend-route', label: 'Recommend', icon: Compass },
  { href: '/ride/1', label: 'My Ride', icon: Car },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="flex h-16 items-center justify-around border-t bg-card">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center gap-1 p-2 text-sm transition-colors',
              isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
            )}
          >
            <item.icon className="h-6 w-6" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
