address = {
    btc: 'bc1qzdjcskxtylm0ujz5xxqgzdn504dhkh2ml4g2yx',
    eth: '0x5a08a4110283E4D8F2adDDaC603CC4f06397b5D8'
}

function copy(type) {
    var input = document.createElement('input');
    if (type in address) {
        input.value = address[type];
    } else {
        input.value = address['btc'];
    }
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}