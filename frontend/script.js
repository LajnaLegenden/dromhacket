const cameraOptions = document.querySelector(".video-options>select");
const canvas = document.querySelector("canvas");
const video = document.querySelector("video");
let streamStarted = false;

const constraints = {
  video: {
    width: {
      min: 480,
      ideal: 1920,
      max: 2560,
    },
    height: {
      min: 480,
      ideal: 1080,
      max: 1440,
    },
  },
};

const getCameraSelection = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  const videoDevices = devices.filter((device) => device.kind === "videoinput");
  if ("mediaDevices" in navigator && navigator.mediaDevices.getUserMedia) {
    const updatedConstraints = {
      ...constraints,
    };
    startStream(updatedConstraints);
  }
};

const startStream = async (constraints) => {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  handleStream(stream);
};

const handleStream = (stream) => {
  video.srcObject = stream;
  let settings = stream.getVideoTracks()[0].getSettings();
  streamStarted = true;
  canvas.width = settings.width;
  canvas.height = settings.height;
};
getCameraSelection();

document.querySelector("#cameraBtn").addEventListener("click", () => {
  video.srcObject
  let settings = stream.getVideoTracks()[0].getSettings();

  canvas
    .getContext("2d")
    .drawImage(video, 0, 0, settings.width, settings.height);
  let data = canvas.toDataURL();
  console.log(data);
});
