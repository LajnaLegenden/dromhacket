import { IEvent } from "./types/types";

export class Storage {
  public data: IStorage = {
    events: [],
  };

  constructor() {
    console.log("Storage: ctor()");
  }

  createEvent(event: IEvent) {
    this.data.events.push(event);
    console.log("Storage: createEvent()");
    //Log number of events
    console.log(this.data.events.length);
  }

  saveImage(event, data, title, uploader,time) {
    let eIndex = this.data.events.findIndex((e) => e.id === event);
    this.data.events[eIndex].photos.push({
      data,
      fileName: title,
      uploadedBy: uploader,
      time
    });
  }
}

interface IStorage {
  events: IEvent[];
}
export const storage = new Storage();
