import { Route, Routes } from 'react-router';

import { ROUTES } from '@/routes/routes';
import { mainNavLinks } from '@/routes/links';

import { ThemeProvider } from '@/features/theme/context';

import Navigation from '@/features/landing/page/Navigation/Navigation';

import { Landing } from '@/features/landing/page/Landing/Landing';
import { Project } from '@/features/project/pages/Project/Project';

import { ToggleButton } from '@/features/theme/components/ToggleButton/ToggleButton';

import { useScrollToHash } from '@/utils/hooks/useScrollToHash';

import classes from './App.module.scss';

const App = () => {
  useScrollToHash();

  return (
    <>
      <ThemeProvider>
        <div className={classes.container}>
          <Navigation links={mainNavLinks} />
          <main className={classes.main}>
            <Routes>
              <Route index element={<Landing />} />
              <Route path={ROUTES.projectId} element={<Project />} />
            </Routes>
          </main>
          <ToggleButton />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
