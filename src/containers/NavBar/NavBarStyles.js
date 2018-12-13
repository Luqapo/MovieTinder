export const styles = theme => ({
    root: {
      width: '100%',
      marginBottom: '60px',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      marginRight: 10,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  });