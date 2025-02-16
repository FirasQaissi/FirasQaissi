//***********BitcoinPrice *************/
let wsBitcoin = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
const bitcoinPrice = document.querySelector('.Bitcoin-price')
let bitCoinLastPrice = null;
const iconBitcoin = document.getElementById('iconBitcoin')
const inShekels = document.getElementById('inShekels')
const afterConvert = document.getElementById('afterConvert')
const usdils = document.querySelector('.usdils')
const main = document.querySelector('.main')

wsBitcoin.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);


    bitcoinPrice.innerText = price
    bitcoinPrice.style.fontSize = '25px'
    bitcoinPrice.style.fontFamily = 'fantasy'
    bitcoinPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';

    bitCoinLastPrice = price


    afterConvert.style.color = 'Blue'
    afterConvert.style.fontFamily = 'fantasy'



    inShekels.addEventListener('click', () => {
        const convert = parseFloat(bitCoinLastPrice * 3.55).toFixed(2)
        afterConvert.textContent = convert
        afterConvert.style.color = 'Blue'
        afterConvert.style.fontSize = '22px'

        usdils.style.display = "inline";


    })

}
//********************Eth-Price ***********************/
let wsEth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
const priceElement = document.querySelector('.eth-price')
let lastPrice = null;

wsEth.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    priceElement.innerText = price
    priceElement.style.fontSize = '25px'
    priceElement.style.fontFamily = 'fantasy'
    priceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';

    const afterConvert2 = document.getElementById('afterConvert2')
    lastPrice = price

    const usdils2 = document.querySelector('.usdils2')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(lastPrice * 3.55).toFixed(2)
        afterConvert2.textContent = convert
        afterConvert2.style.color = 'Blue'
        afterConvert2.style.fontSize = '22px'

        usdils2.style.display = "inline";
    })



}
//********************XRP-Price ***************************/
let wsXRP = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
const XrpPrice = document.querySelector('.xrp-price')
let xrpLastPrice = null;

wsXRP.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    XrpPrice.innerText = price
    XrpPrice.style.fontSize = '25px'
    XrpPrice.style.fontFamily = 'fantasy'
    XrpPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    xrpLastPrice = price
    const afterConvert3 = document.getElementById('afterConvert3')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(xrpLastPrice * 3.55).toFixed(2)
        afterConvert3.textContent = convert
        afterConvert3.style.color = 'Blue'
        afterConvert3.style.fontSize = '20px'
        const usdils3 = document.querySelector('.usdils3')

        usdils3.style.display = "inline";
    })


}

//************************Solona-Price ************************/

let wsSolona = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
const solonaPrice = document.querySelector('.sol-price')
let solonaLastPrice = null;

wsSolona.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    solonaPrice.innerText = price
    solonaPrice.style.fontSize = '25px'
    solonaPrice.style.fontFamily = 'fantasy'
    solonaPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    solonaLastPrice = price

    const afterConvert4 = document.getElementById('afterConvert4')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(solonaLastPrice * 3.55).toFixed(2)
        afterConvert4.textContent = convert
        afterConvert4.style.color = 'Blue'
        afterConvert4.style.fontSize = '20px'
        const usdils4 = document.querySelector('.usdils4')

        usdils4.style.display = "inline";
    })



}
//***************************BNB-Price ********************************************/
let wsBNB = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
const bNBPrice = document.querySelector('.bnb-price')
let bnbLastPrice = null;

wsBNB.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    bNBPrice.innerText = price
    bNBPrice.style.fontSize = '25px'
    bNBPrice.style.fontFamily = 'fantasy'
    bNBPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    bnbLastPrice = price


    const afterConvert5 = document.getElementById('afterConvert5')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(bnbLastPrice * 3.55).toFixed(2)
        afterConvert5.textContent = convert
        afterConvert5.style.color = 'Blue'
        afterConvert5.style.fontSize = '20px'

        const usdils5 = document.querySelector('.usdils5')

        usdils5.style.display = "inline";
    })

}
//**************************DOG-Price *****************************/
let wsDOG = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
const dogPrice = document.querySelector('.dog-price')
let dogLastPrice = null;

wsDOG.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    dogPrice.innerText = price
    dogPrice.style.fontSize = '25px'
    dogPrice.style.fontFamily = 'fantasy'
    dogPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    dogLastPrice = price


    const afterConvert6 = document.getElementById('afterConvert6')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(dogLastPrice * 3.55).toFixed(2)
        afterConvert6.textContent = convert
        afterConvert6.style.color = 'Blue'
        afterConvert6.style.fontSize = '20px'

        const usdils6 = document.querySelector('.usdils6')

        usdils6.style.display = "inline";
    })

}
//*********************Cardano-Price ******************************/
let wsCAR = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
const cargPrice = document.querySelector('.car-price')
let carLastPrice = null;

wsCAR.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    cargPrice.innerText = price
    cargPrice.style.fontSize = '25px'
    cargPrice.style.fontFamily = 'fantasy'
    cargPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    carLastPrice = price

    const afterConvert7 = document.getElementById('afterConvert7')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(carLastPrice * 3.55).toFixed(2)
        afterConvert7.textContent = convert
        afterConvert7.style.color = 'Blue'
        afterConvert7.style.fontSize = '20px'


        const usdils7 = document.querySelector('.usdils7')

        usdils7.style.display = "inline";
    }
    )
}
/**********************Tron-Price **************************/
let wsTRX = new WebSocket('wss://stream.binance.com:9443/ws/trxusdt@trade');
const trxPrice = document.querySelector('.trx-price')
let trxLastPrice = null;

wsTRX.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    trxPrice.innerText = price
    trxPrice.style.fontSize = '25px'
    trxPrice.style.fontFamily = 'fantasy'
    trxPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    trxLastPrice = price


    const afterConvert8 = document.getElementById('afterConvert8')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(trxLastPrice * 3.55).toFixed(2)
        afterConvert8.textContent = convert
        afterConvert8.style.color = 'Blue'
        afterConvert8.style.fontSize = '20px'

        const usdils8 = document.querySelector('.usdils8')

        usdils8.style.display = "inline";
    }
    )


}
//***********ChainLink-Price *************/
let wsLINK = new WebSocket('wss://stream.binance.com:9443/ws/linkusdt@trade');
const linkPrice = document.querySelector('.link-price')
let linkLastPrice = null;

wsLINK.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    linkPrice.innerText = price
    linkPrice.style.fontSize = '25px'
    linkPrice.style.fontFamily = 'fantasy'
    linkPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    linkLastPrice = price

    const afterConvert9 = document.getElementById('afterConvert9')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(linkLastPrice * 3.55).toFixed(2)
        afterConvert9.textContent = convert
        afterConvert9.style.color = 'Blue'
        afterConvert9.style.fontSize = '20px'

        const usdils9 = document.querySelector('.usdils9')

        usdils9.style.display = "inline";
    }
    )



}
//***********Avax-Price *************/
let wsAvax = new WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@trade');
const avaxPrice = document.querySelector('.avax-price')
let avaxLastPrice = null;
wsAvax.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    avaxPrice.innerText = price
    avaxPrice.style.fontSize = '25px'
    avaxPrice.style.fontFamily = 'fantasy'
    avaxPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    avaxLastPrice = price

    const afterConvert10 = document.getElementById('afterConvert10')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(avaxLastPrice * 3.55).toFixed(2)
        afterConvert10.textContent = convert
        afterConvert10.style.color = 'Blue'
        afterConvert10.style.fontSize = '20px'

        const usdils10 = document.querySelector('.usdils10')

        usdils10.style.display = "inline";
    }
    )



}
//***********PolKadot-Price *************/
let wsPOL = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@trade');
const polPrice = document.querySelector('.pol-price')
let polLastPrice = null;
wsPOL.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    polPrice.innerText = price
    polPrice.style.fontSize = '25px'
    polPrice.style.fontFamily = 'fantasy'
    polPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    polLastPrice = price


    const afterConvert11 = document.getElementById('afterConvert11')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(polLastPrice * 3.55).toFixed(2)
        afterConvert11.textContent = convert
        afterConvert11.style.color = 'Blue'
        afterConvert11.style.fontSize = '20px'
        const usdils11 = document.querySelector('.usdils11')

        usdils11.style.display = "inline";
    }
    )


}
//***********Hedera-Price *************/
let wsHBAR = new WebSocket('wss://stream.binance.com:9443/ws/hbarusdt@trade');
const hbarPrice = document.querySelector('.HBAR-price')
let hbarLastPrice = null;
wsHBAR.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    hbarPrice.innerText = price
    hbarPrice.style.fontSize = '25px'
    hbarPrice.style.fontFamily = 'fantasy'
    hbarPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    hbarLastPrice = price



    const afterConvert12 = document.getElementById('afterConvert12')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(hbarLastPrice * 3.55).toFixed(2)
        afterConvert12.textContent = convert
        afterConvert12.style.color = 'Blue'
        afterConvert12.style.fontSize = '20px'
        const usdils12 = document.querySelector('.usdils12')

        usdils12.style.display = "inline";
    }
    )

}
//***********LiteCoin-Price *************/
let wsLite = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');
const litePrice = document.querySelector('.Litecoin-price')
let liteLastPrice = null;
wsLite.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    litePrice.innerText = price
    litePrice.style.fontSize = '25px'
    litePrice.style.fontFamily = 'fantasy'
    litePrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    liteLastPrice = price

    const afterConvert13 = document.getElementById('afterConvert13')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(liteLastPrice * 3.55).toFixed(2)
        afterConvert13.textContent = convert
        afterConvert13.style.color = 'Blue'
        afterConvert13.style.fontSize = '20px'
        const usdils13 = document.querySelector('.usdils13')

        usdils13.style.display = "inline";
    }
    )


}

//***********OM-Price *************/
let wsOM = new WebSocket('wss://stream.binance.com:9443/ws/omusdt@trade');
const omPrice = document.querySelector('.om-price')
let omLastPrice = null;

wsOM.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    omPrice.innerText = price
    omPrice.style.fontSize = '25px'
    omPrice.style.fontFamily = 'fantasy'
    omPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    omLastPrice = price

    const afterConvert14 = document.getElementById('afterConvert14')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(omLastPrice * 3.55).toFixed(2)
        afterConvert14.textContent = convert
        afterConvert14.style.color = 'Blue'
        afterConvert14.style.fontSize = '20px'

        const usdils14 = document.querySelector('.usdils14')

        usdils14.style.display = "inline";
    }
    )

}
//***********UNI-Price *************/
let wsUNI = new WebSocket('wss://stream.binance.com:9443/ws/uniusdt@trade');
const uniPrice = document.querySelector('.uni-price')
let uniLastPrice = null;

wsUNI.onmessage = (event) => {
    let stockObject = JSON.parse(event.data)
    let price = parseFloat(stockObject.p).toFixed(2);

    uniPrice.innerText = price
    uniPrice.style.fontSize = '25px'
    uniPrice.style.fontFamily = 'fantasy'
    uniPrice.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';


    uniLastPrice = price

    const afterConvert15 = document.getElementById('afterConvert15')
    inShekels.addEventListener('click', () => {
        const convert = parseFloat(uniLastPrice * 3.55).toFixed(2)
        afterConvert15.textContent = convert
        afterConvert15.style.color = 'Blue'
        afterConvert15.style.fontSize = '20px'

        const usdils15 = document.querySelector('.usdils15')

        usdils15.style.display = "inline";

    }
    )

}








