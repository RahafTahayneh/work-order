import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import { observer } from 'mobx-react';

const useStyles = makeStyles(() => ({
    root: {
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        backgroundColor: '#FAEFE3',
    },
}));

type Props = {}

const Layout: React.FC<Props> = observer(({ children }) => {

    const classes = useStyles();

    return (
        <Grid container direction="row" wrap="nowrap" className={classes.root}>
                        {children}
        </Grid>
    );
});

export default Layout;
