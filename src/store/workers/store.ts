import {action, observable, observe} from 'mobx';
import _ from 'lodash';
import {Worker} from "../../bl/worker";
import {WorkerApi} from "../../module/worker/api";
import {OrdersStore} from "../orders";

class WorkersStore {
    @observable initialized = false;
    @observable workers: Worker[] = [];
    @observable worker!: Worker;

    constructor() {
        observe(OrdersStore, 'initialized', () => {
            if (OrdersStore.initialized) {
                _.forEach(OrdersStore.orders, order => void (async () => await WorkerApi.getWorker(order.workerId).then(worker => this.workers.push(worker)))())
                this.initialized = true;
            }
        })
    }

    @action
    public async initWorker(workerId: number): Promise<void> {
        this.worker = await WorkerApi.getWorker(workerId);
    }

    @action filterByWorkerName(name: string) {
        return _.map(_.filter(this.workers, worker => worker.name.trim().toLocaleLowerCase().includes(name.trim().toLowerCase())), worker => worker.id)
    }

}

export default new WorkersStore();
