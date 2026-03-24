import { screen } from '@testing-library/react';

import { renderWithRouter } from '@/test/test.utils';

import { mainNavLinks } from '@/routes/links';

import App from './App';

vi.mock('@/features/project/api/fetchProject', () => ({
  fetchProject: vi.fn().mockReturnValue({
    title: 'My Project',
    description: 'desc',
    keyPoints: [],
    tools: [],
  }),
}));

describe('render App main sections', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  it('renders the navigation', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the main content', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders all main nav links when the app loads', () => {
    mainNavLinks.forEach(({ text }) => {
      const navLink = screen.getByRole('link', { name: text });
      expect(navLink).toBeInTheDocument();
    });
  });

  it('renders the landing page initially', () => {
    const landingPage = screen.getByTestId('landing-page');
    expect(landingPage).toBeInTheDocument();
  });
});

describe('render App with project route', () => {
  beforeEach(() => {
    renderWithRouter(<App />, { route: '/project/123' });
  });

  it('renders the Project page', () => {
    const projectPage = screen.getByRole('heading', { name: 'My Project' });
    expect(projectPage).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
  });
});
