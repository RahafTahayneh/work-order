import React from 'react';
import {Grid, makeStyles, Switch, Theme} from "@material-ui/core";
import {OrdersStore} from "../../store/orders";
import {observer} from "mobx-react";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        background: theme.palette.background.paper,
        position: 'relative'
    },
    label: {
        fontSize: 17,
        fontWeight: 600,
        color: '#484848',
        fontFamily: 'sans-serif'
    }
}))

const useSwitchStyles = makeStyles<Theme, { enabled: boolean }>((theme) => ({
    thumb: {
        color: ({enabled}) => (enabled ? '#ffffff' : '#808080'),
        border: ({enabled}) => (enabled ? 'solid 1px #808080' : undefined),
    },
    track: {
        backgroundColor: ({enabled}) => (enabled ? theme.palette.primary.main : '#DCDCDC'),
        opacity: '1 !important',
        '&>checked': {
            backgroundColor: theme.palette.primary.main,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
}));

interface Props {
}

const SwitchOrder: React.FC<Props> = observer(() => {
    const classes = useStyles();
    const [enabled, setEnabled] = React.useState(true)
    const switchClasses = useSwitchStyles({enabled});
    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked){
            OrdersStore.sortLatest()
        }else{
            OrdersStore.sortEarliest()
        }
        setEnabled(event.target.checked)
    }, [OrdersStore.filteredOrders]);

    return (
        <Grid container direction={'row'} alignItems={'center'}>
            <Grid item className={classes.label}>
                Earliest first
            </Grid>
            <Grid item>
                <Switch
                    id={'deadline-input'}
                    name="switch"
                    color="default"
                    checked={enabled}
                    onChange={handleChange}
                    classes={switchClasses}
                />
            </Grid>
            <Grid item className={classes.label}>
                Latest first
            </Grid>
        </Grid>

    )

});

export default SwitchOrder;