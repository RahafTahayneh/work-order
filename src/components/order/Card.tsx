import React from 'react';
import { Grid, makeStyles, Avatar, Button } from "@material-ui/core";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import moment from "moment";
import _ from 'lodash';
import {Order} from "../../bl/order";
import {WorkersStore} from "../../store/workers";
import {routes} from "../../router";

const useStyles = makeStyles((theme)=> ({
    root: {
        background: '#FFFFFF',
        borderRadius: '1.6rem',
        height: '100%',
        width: '100%',
        padding: theme.spacing(1),
        '&:hover': {
           border: `solid 1px ${theme.palette.secondary.main}`,
        },
    },
    title: {
        fontSize: 16,
        fontWeight: 800,
        margin: theme.spacing(1, 0),
        textAlign: 'center',
        height: '9%'
    },
    description:{
        fontSize: 14,
        fontWeight: 500,
        textAlign: 'center',
        margin: theme.spacing(0, 1, 0),
        color: '#AFAFBD'
    },
    avatar:{
        height: '12rem',
        width: '12rem'
    },
    date:{
        width: '100%',
        textAlign: 'end',
        fontSize: 9,
        fontWeight: 'bold',
    },
    button:{
        margin: theme.spacing(1,0),
        flexGrow:2
    }
}));

interface Props{
    order: Order
}

const Card: React.FC<Props> = observer(({order}) => {
    const classes = useStyles();
    const worker = _.find(WorkersStore.workers, worker => worker.id === order.workerId)
    const history = useHistory()

    return (
        <Grid container direction={'column'} alignItems={'center'}  wrap={'nowrap'} className={classes.root}>
            <Grid item>
                <Avatar src={worker?.image} className={classes.avatar}/>
            </Grid>
            <Grid item className={classes.title}>
                Worker name : {worker?.name}
            </Grid>
            <Grid item className={classes.description}>
                Work order: {order.id}
            </Grid>
            <Grid item className={classes.button}>
              <Button variant={'contained'} color={'primary'} onClick={()=> history.push(routes.workerProfile.getPath(worker?.id)) }>
                  View more
              </Button>
            </Grid>
            <Grid item className={classes.date}>
                {moment(order.deadline * 1000).format('DD/MM/YYYY HH:mm:ss A')}
            </Grid>
        </Grid>
    )
});



export default Card;