import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzEwMjg2MjY3LCJzdWIiOiJlNjBlNTI3NS1iNDg4LTRiZDAtYjMxNy04OGVlNDM4M2E5Y2R-U1RBR0lOR342YjRmYTg5OC1hNDMwLTRhNjEtYWJlNS01MzAwZmUxMzU1ZGQifQ.tUq8rklkCWJ_qAvLLF1o7xEKYkHFk34T5pQtm3zTJWs' });

  const LiveRenderTarget = document.getElementById('canvas') as HTMLCanvasElement;

  const session = await cameraKit.createSession({ LiveRenderTarget });
  
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  
  await session.play();

})();