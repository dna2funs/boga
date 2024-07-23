import { useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Box, IconButton, Link, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useTranslation } from 'react-i18next';

const i18nKeyMap = {
   '/': 't.about',
   '/about': 't.about',
};
const titleMap = {
   '/': 'About',
   '/about': 'About',
};

export default function Layout() {
   const { t } = useTranslation();

   const loc = useLocation();
   const title = t(i18nKeyMap[loc.pathname], titleMap[loc.pathname]) || 'Sdoke';

   const [anchorEl, setAnchorEl] = useState(null);
   const open = !!anchorEl;

   const onMenuOpen = (evt) => setAnchorEl(evt.currentTarget);
   const onMenuClose = () => setAnchorEl(null);

   return <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
   }}>
      <Box>
         <IconButton onClick={onMenuOpen}><MenuIcon /></IconButton> {title}
         <Menu anchorEl={anchorEl} open={open} onClose={onMenuClose}>
            <Link onClick={onMenuClose} href="#/" underline="none"><MenuItem>{t('t.about', 'About')}</MenuItem></Link>
            <Link onClick={onMenuClose} href="#/about" underline="none"><MenuItem>{t('t.about', 'About')}</MenuItem></Link>
         </Menu>
      </Box>
      <Box sx={{ flex: '1 0 auto', height: '0' }}><Outlet /></Box>
   </Box>
}
