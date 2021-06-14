import React from 'react';
import {Avatar, Grid, makeStyles} from "@material-ui/core";
import {observer} from "mobx-react";
import HomeIcon from '@material-ui/icons/Home';
import _ from 'lodash';
import {useHistory, useParams} from 'react-router-dom';
import {WorkersStore} from "../../store/workers";
import {routes} from "../../router";
import {OrdersStore} from "../../store/orders";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2),
        position: 'relative',
        height: '100%',
        overflow: 'hidden',
        fontFamily: 'Roboto'
    },
    content: {
        width: '100%',
        margin: theme.spacing(4, 0)
    },
    icon:{
        fontSize: '1.5rem',
        cursor: 'pointer'
    },
    card: {
        background: '#FFFFFF',
        borderRadius: '1.6rem',
        height: '100%',
        width: '30rem',
        padding: theme.spacing(1),
    },
    title: {
        fontSize: 16,
        fontWeight: 800,
        margin: theme.spacing(1, 0),
        textAlign: 'center',
        height: '9%'
    },
    subText:{
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center',
        margin: theme.spacing(1, 1, 0),
        color: '#AFAFBD'
    },
    label:{
      fontWeight: 'bold',
        color: '#000',

    },
    avatar:{
        height: '12rem',
        width: '12rem'
    },
}));


const Profile: React.FC = observer(() => {
    const classes = useStyles();
    const history = useHistory();
    const {id} = useParams<{id?: string}>();
    const worker = _.find(WorkersStore.workers, worker => worker.id === (!!id && parseInt(id)));
    const orders = _.filter(OrdersStore.orders , order => order.workerId === worker?.id)

    return (
        <Grid container direction={'column'} alignItems={'center'}  wrap='nowrap' className={classes.root}>
          <Grid item container alignItems={'flex-start'} onClick={()=> history.push(routes.main.getPath())}>
            <HomeIcon className={classes.icon} color={'primary'} />
          </Grid>
            <Grid item  container justify='center' className={classes.content}>
                <Grid container direction={'column'} alignItems={'center'} wrap='nowrap' className={classes.card}>
                    <Grid item >
                        <Avatar className={classes.avatar} src={worker?.image}/>
                    </Grid>
                    <Grid item className={classes.title}>
                        <span className={classes.label}> WorkerID: </span> {worker?.id}
                    </Grid>
                    <Grid item className={classes.title}>
                        <span className={classes.label}> Name: </span> {worker?.name}
                    </Grid>
                    <Grid item className={classes.subText}>
                        <span className={classes.label}> Email: </span> {worker?.email}
                    </Grid>
                    <Grid item className={classes.subText}>
                        <span className={classes.label}> Company: </span> {worker?.companyName}
                    </Grid>
                    <Grid item className={classes.subText}>
                        <Grid container direction={'row'} justify='center' alignItems={'center'}>
                            <Grid item className={classes.label}>
                                Work order IDs for this worker
                            </Grid>
                            <Grid item container direction ='row' justify='center' wrap={'nowrap'} spacing={1}>
                                {
                                    _.map(orders, (order, index)=> <Grid item key={index} className={classes.subText}> {order.id} </Grid>)
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
});


export default Profile;