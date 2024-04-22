import { Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HeadersAndQuery = ({ obj, type }) => {
  const array = Object.entries(obj);
  return (
    <Box sx={{ marginBottom: 1 }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: 'bold' }}>
            {type}({array.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {array.map((nestedArr, idx) => {
            return (
              <Typography key={`${type}-${idx}`}>
                {' '}
                {nestedArr[0]}: {nestedArr[1]}
              </Typography>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default HeadersAndQuery;
