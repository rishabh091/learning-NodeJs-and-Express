var x = 10;

async function pr() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            x = 20;
            console.log('Inside Async : ' + x);

            resolve(x);
        }, 3000);
    })
}
pr().then(() => {
    console.log('Outside Async : ' + x);
})
.catch(() => {
    console.log('Error');
});