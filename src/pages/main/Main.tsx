import React from 'react';
import {CircularProgress, Grid, makeStyles} from "@material-ui/core";
import {observer} from "mobx-react";
import {Search} from "../../components/search";
import {Switch} from "../../components/switch";
import {OrdersStore} from "../../store/orders";
import {WorkersStore} from "../../store/workers";
import {Workers} from "../../components/workers";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2),
        position: 'relative',
        height: '100%',
        overflow: 'hidden',
    },
    item: {
        width: '100%',
        margin: theme.spacing(1, 0)
    },
    content: {
        height: '100%',
        width: '100%',
        display: 'flex',
        position: 'relative',
        overflowY: 'auto'
    },
    loading: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));

const Main: React.FC = observer(() => {
    const classes = useStyles();
    const loading = OrdersStore.initialized && WorkersStore.initialized;

    return (
        <Grid container direction={'column'} alignItems={'center'} wrap='nowrap' className={classes.root}>
            <Grid item className={classes.item}>
                <Search/>
            </Grid>
            <Grid item>
                <Switch/>
            </Grid>
            {!loading ? <div className={classes.loading}>
                    <CircularProgress size={50}/>
                </div> :
                <Grid item className={classes.content}>
                   <Workers />
                </Grid>
            }
        </Grid>
    )
});


export default Main;