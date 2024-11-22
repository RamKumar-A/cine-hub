import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

function HeaderListItems({
  title,
  primary,
  secondary,
  icon,
  iconColor,
  secondaryColor,
  color,
}) {
  return (
    <Paper>
      <Stack
        alignItems="center"
        py={{ xs: 1, md: 0.5 }}
        justifyContent="center"
      >
        <Typography variant="button" textAlign="center">
          {title}
        </Typography>
        <ListItem sx={{ py: 0, px: { xs: 1, md: 2 }, borderRadius: 1 }}>
          {icon && (
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: iconColor }}>{icon}</Avatar>
            </ListItemAvatar>
          )}
          <ListItemText
            primary={
              <Typography
                fontSize={15}
                color={color}
                textTransform="capitalize"
              >
                {primary}
              </Typography>
            }
            secondary={
              <Typography
                component="span"
                color={secondaryColor}
                variant="body2"
                fontSize={10}
              >
                {secondary}
              </Typography>
            }
          />
        </ListItem>
      </Stack>
    </Paper>
  );
}

export default HeaderListItems;
