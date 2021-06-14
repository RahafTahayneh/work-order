import axios from 'axios';
import {Worker} from "../../bl/worker";

export declare namespace WorkerApi {
    export type WorkerResponse = {
        worker: Worker
    }
}

export class WorkerApi {
    public static async getWorker(workerId: number) {
        const response = await axios.get<WorkerApi.WorkerResponse>(`https://api.hatchways.io/assessment/workers/${workerId}`)
        return response.data.worker;
    }
}