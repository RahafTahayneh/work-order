import axios from 'axios';
import {Order} from "../../bl/order";

export declare namespace OrderApi {
    export type OrdersResponse = {
        orders: Order[] | []
    }
}

export class OrderApi {
    public static async getOrders() {
        const response = await axios.get<OrderApi.OrdersResponse>('https://api.hatchways.io/assessment/work_orders')
        return response.data.orders;
    }
}