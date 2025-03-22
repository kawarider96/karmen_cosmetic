import { AppContent } from '@/components/basic/app-content';
import { AppHeader } from '@/components/basic/app-header';
import { AppShell } from '@/components/basic/app-shell';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHeaderLayout({ children, breadcrumbs }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell>
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent>{children}</AppContent>
        </AppShell>
    );
}
