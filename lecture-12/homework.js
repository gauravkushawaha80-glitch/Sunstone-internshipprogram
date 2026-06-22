function downloadFile(url, callback) {
    console.log("Starting download...");
    setTimeout(() => {
        console.log("Download completed");
        callback();
    }, 2000);
}
downloadFile("file.pdf", () => {
    console.log("Opening file...");
}); 
// food delevary 
 