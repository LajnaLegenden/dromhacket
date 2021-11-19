import { IEvent } from "./types/types";
export declare class Storage {
    data: IStorage;
    constructor();
    createEvent(event: IEvent): void;
    saveImage(event: any, data: any, title: any, uploader: any, time: any): void;
}
interface IStorage {
    events: IEvent[];
}
export declare const storage: Storage;
export {};
