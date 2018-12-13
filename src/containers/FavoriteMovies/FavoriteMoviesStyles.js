export const styles = theme => ({
    root: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '1024px',
            margin: '0 auto'
    },
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    details: {
      width: "100%",
      padding: '15px'
    },
    column: {
      flexBasis: '50%',
    },
    marginTop: {
      marginTop: '100px',
    }
  });