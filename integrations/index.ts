// Mock integrations for static site
export * from './cms';
export * from './errorHandlers';

// Mock auth hook for static site
export const useMember = () => ({
  isAuthenticated: true,
  isLoading: false,
  actions: {
    login: () => {
      console.log('Login not implemented for static site');
    },
  },
});
