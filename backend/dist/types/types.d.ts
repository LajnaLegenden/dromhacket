export interface IEvent {
    name: string;
    id: string;
    users: string[];
    photos: IPhoto[];
    ended: boolean;
}
export interface IPhoto {
    data: string;
    fileName: string;
    uploadedBy: string;
    time: number;
}
