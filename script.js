import { LoadingScreen } from './loadingScreen.js';

const loadingScreen = new LoadingScreen();

loadingScreen.hideOnJsLoad();

performHeavyComputation();

function performHeavyComputation() {
    let result = 0;
    for (let i = 0; i < 50000000; i++) {
        result += Math.sin(i) * Math.cos(i);
    }
    return result;
}
