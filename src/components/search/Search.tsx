import React from 'react';
import { Grid, makeStyles, InputBase } from "@material-ui/core";
import {observer} from "mobx-react";
import {WorkersStore} from "../../store/workers";
import {OrdersStore} from "../../store/orders";
import {toJS} from "mobx";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        background: theme.palette.background.paper,
        position: 'relative'
    },
    input: {
        border: 'solid 1.5px #f05028',
        background: '#fff',
        color: '#192233',
        padding: theme.spacing(1, 2),
        borderRadius: '1.7rem',
        fontWeight: 500
    }
}))
const Search: React.FC = observer(() => {
    const classes = useStyles();
    const [value, setValue] = React.useState('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       const str = event.target.value.toLowerCase();
        if(str) {
            OrdersStore.filterWorkOrders(WorkersStore.filterByWorkerName(str))
        }else{
            void OrdersStore.init()
        }
        setValue(event.target.value)
    }
    console.log(toJS(OrdersStore.filteredOrders))

    return (
        <Grid item container>
            <InputBase
                id={"name-input"}
                fullWidth
                value={value}
                className={classes.input}
                placeholder="Filter by worker name..."
                onChange={handleChange}
            />
        </Grid>
    )
});



export default Search;