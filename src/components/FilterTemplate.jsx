import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';

import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';
import { useState } from 'react';

function FilterTemplate({
  isCategory,

  filters,
  label,
  handler,
}) {
  const [toggle, setToggle] = useState(false);
  return (
    <Box sx={{ width: { xs: '100%', md: 'fit-content' } }}>
      <Button
        onClick={() => setToggle((t) => !t)}
        sx={{
          width: { xs: '100%', md: 'fit-content' },
          bgcolor: '#FF5722',
          color: 'text.primary',
          boxShadow: 0,
        }}
        size="small"
        variant="contained"
        endIcon={toggle ? <HiChevronUp /> : <HiChevronDown />}
      >
        {label}
      </Button>

      <Collapse in={toggle}>
        <List sx={{ maxHeight: '10rem', overflow: 'auto' }}>
          <Stack gap={1}>
            {filters?.map((filter) => (
              <ListItem
                sx={{ bgcolor: 'background.paper', p: 0 }}
                key={isCategory ? filter?.name : filter}
                onClick={() => {
                  handler(isCategory ? filter?.slug : filter);
                  setToggle(false);
                }}
              >
                <ListItemButton sx={{ py: 0.5, boxShadow: 0 }}>
                  <ListItemText
                    sx={{ color: 'primary.contrastText' }}
                    primary={
                      isCategory
                        ? filter?.name
                        : filter[0]?.toUpperCase() + filter?.slice(1)
                    }
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Stack>
        </List>
      </Collapse>
    </Box>
  );
}

export default FilterTemplate;
