import { Box } from '@mui/material';
export default function Portal(props) {
   const { name } = props;
   return <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      height: '100%',
      alignItems: 'center',
   }}>
      Page-Placeholder: Portal
   </Box>;
}
