// Sync function, because async is not working in the Worker
function sleep(ms) {
    const end = new Date().getTime() + ms;
    while (new Date().getTime() < end) {
    }
}

// Post back a number in each second
onmessage = function(e) {
    if (e.data === 'start') {
        for (let i = 0; i <= 5; i++) {
            postMessage(i);
            sleep(1000);
        }
    }
}
