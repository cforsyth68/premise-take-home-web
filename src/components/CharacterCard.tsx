import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ICharacter from "../hooks/ICharacter";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    flexGrow: 0,
    display: 'inline-block'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    width: '100px',
  },
  paper: {
    width: '23rem'
  }
});

type CharacterCardProps = {
  character: ICharacter
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const classes = useStyles();

  return (
    <Box mb={2}>
      <Paper elevation={4} className={classes.paper}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="stretch"
          alignContent="flex-start"
        >
          <Box bgcolor="primary.dark">
            <img className={classes.media} src={character.img} alt={character.name} title={character.name} />
          </Box>
          <Box ml={1} textOverflow="ellipsis">
            <Typography variant="h6">
              {character.name}
            </Typography>
            <Typography>
              <b>Nickname:</b> {character.nickname}
            </Typography>
            <Typography>
              <b>Birthday:</b> {character.birthday}
            </Typography>
            <Typography>
              <b>Status:</b> {character.status}
            </Typography>
            <Typography>
              <b>Portrayed by:</b> {character.portrayed}
            </Typography>
            <Typography>
              <b>Category:</b> {character.category}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box >
  );
}

export default CharacterCard;
