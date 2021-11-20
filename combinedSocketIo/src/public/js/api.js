class API {
  constructor(baseUrl = "http://localhost:3001") {
    this.baseURL = baseUrl;
    console.log("API:ctor()");
    console.log("Baseurl: ", this.baseURL);
    //set up socket io connection
    this.socket = io(this.baseURL);
  }

  uploadPicture(event, base64Img, user) {
    base64Img = encodeURI(base64Img);
    this.socket.emit("uploadPicture", { event, base64Img, user });
  }

  createEvent(event) {
    this.socket.emit("createEvent", { name: event });
  }

  getEventList() {
    this.socket.emit("getEventList");
  }
}

const api = new API();
