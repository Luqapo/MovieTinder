export const styles = theme => ({
    root: {
        width: '100%',
        minHeight: '85vh',
        margin: '0',
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        [theme.breakpoints.up('sm')]: {
            maxWidth: '1024px',
            margin: '0 auto'
        },
    },
    movie: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0',
        [theme.breakpoints.up('sm')]: {
            width: '80%',
            margin: '0 auto'
        },
    },
    buttons: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
    },
    button: {
        margin: theme.spacing.unit * 2,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
  });