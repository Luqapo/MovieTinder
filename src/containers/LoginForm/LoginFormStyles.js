export const styles = theme => ({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: `translate(-50%, -50%)`,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 35,
      },
    },
    buttonCenter: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }
  });