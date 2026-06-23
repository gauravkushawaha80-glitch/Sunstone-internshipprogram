function promise() {
    return new Promise((resolve) => {
        console.log("Starting Downloading...");

        setTimeout(() => {
            resolve("Download completed");
        }, 2000);
    });
}
promise().then(result => {
    console.log(result);
})
