// src/app/page.tsx
import { DashboardLayout } from '@/components/dashboard/DashBoardLayout';
import { Header } from '@/components/dashboard/Header';

export default function HomePage() {
  return (
    <DashboardLayout>
      <Header />
      {/* We'll add FileUpload and BookGrid components here later */}
    </DashboardLayout>
  );
}
