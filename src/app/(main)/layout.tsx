import AppSidebar from "@/components/global/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode, Suspense } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div suppressHydrationWarning className="h-screen">
      <Suspense fallback={<p>Loading...</p>}>
        <SidebarProvider className="flex flex-row">
          <AppSidebar />
          <main className="h-screen overflow-y-auto w-full">
            {children}
          </main>
        </SidebarProvider>
      </Suspense>
    </div>
  );
};

export default MainLayout;
