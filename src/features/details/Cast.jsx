import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Stack,
} from '@mui/material';

function Cast({ cast }) {
  const actors = cast?.split(',');
  return (
    <List>
      <ListSubheader
        sx={{
          fontSize: '1.1rem',
          zIndex: 0,
          bgcolor: 'transparent',
          color: 'text.primary',
        }}
      >
        Actors
      </ListSubheader>
      <Stack gap={1}>
        {actors?.map((actor) => (
          <ListItem
            key={actor}
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 1,
            }}
          >
            <ListItemAvatar>
              <Avatar>{actor?.replaceAll(' ', '')?.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ color: 'text.primary' }}
              primary={actor?.replaceAll(' ', '')}
            />
          </ListItem>
        ))}
      </Stack>
    </List>
  );
}

export default Cast;
