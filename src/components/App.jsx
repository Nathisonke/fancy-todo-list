import { Box, CssBaseline } from '@mui/material';

import { AppState } from '../providers/AppState.jsx';
import { AllTodoLists } from './AllTodoLists.jsx';
import { AppHeader } from './AppHeader.jsx';
import { CurrentTodoList } from './CurrentTodoList.jsx';
import { StickyFooter } from './StickyFooter.jsx'; // Correct path


export function App() {
  return (
    <AppState>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <AppHeader />
        <AllTodoLists />
        <CurrentTodoList />
        <StickyFooter/>
      </Box>
    </AppState>
  );
}
