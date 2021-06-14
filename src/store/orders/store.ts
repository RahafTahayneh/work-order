import {action, observable} from 'mobx';
import _ from 'lodash';
import {Order} from "../../bl/order";
import {OrderApi} from "../../module/order/api";

class OrdersStore {
    @observable initialized = false;

    @observable orders!: Order[];

    @observable filteredOrders!: Order[];


    constructor() {
        this.init()
    }

    @action
    public async init(): Promise<void> {
        if (_.isEmpty(this.orders)) {
            this.orders = await OrderApi.getOrders();
            this.filteredOrders = this.orders;
            this.sortLatest();
            localStorage.setItem('orders', JSON.stringify(this.orders))
        } else {
            this.orders = JSON.parse(localStorage.getItem('orders') || '{}')
            this.filteredOrders = this.orders
        }
        this.initialized = true;
    }

    @action sortLatest() {
        this.filteredOrders = this.filteredOrders.slice().sort((order1, order2) => order2.deadline - order1.deadline)
    }

    @action sortEarliest() {
        this.filteredOrders = this.filteredOrders.slice().sort((order1, order2) => order1.deadline - order2.deadline)
    }

    @action filterWorkOrders(filteredWorkersIds: number[]) {
        this.filteredOrders = _.filter(this.orders, order => _.includes(filteredWorkersIds, order.workerId))
    }

}

export default new OrdersStore();
