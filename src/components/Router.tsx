import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import React, { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('@/components/pages/HomePage'));
const AboutPage = lazy(() => import('@/components/pages/AboutPage'));
const LeadershipPage = lazy(() => import('@/components/pages/LeadershipPage'));
const EventsPage = lazy(() => import('@/components/pages/EventsPage'));
const CSRPage = lazy(() => import('@/components/pages/CSRPage'));
const PodcastsPage = lazy(() => import('@/components/pages/PodcastsPage'));
const SocialHubPage = lazy(() => import('@/components/pages/SocialHubPage'));
const JoinPage = lazy(() => import('@/components/pages/JoinPage'));

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "leadership",
        element: <LeadershipPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "csr",
        element: <CSRPage />,
      },
      {
        path: "podcasts",
        element: <PodcastsPage />,
      },
      {
        path: "social",
        element: <SocialHubPage />,
      },
      {
        path: "join",
        element: <JoinPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <Suspense fallback={(
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    )}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
