const worker = new Worker('/worker.js');
const start = document.querySelector('.start');
const terminate = document.querySelector('.terminate');
const progress = document.querySelector('.progress');

start.addEventListener('click', () => {
    worker.postMessage('start');
});

terminate.addEventListener('click', () => {
    worker.terminate();
});

worker.onmessage = (e) => {
    progress.value = e.data;
    console.log('Message received from worker ', e.data);
}
