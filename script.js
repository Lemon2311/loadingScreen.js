import { LoadingScreen } from './loadingScreen.js';

const loadingScreen = new LoadingScreen();
//loadingScreen.hideOnJsLoad(); should be used to hide the loadingScreen when js is fully loaded
loadingScreen.simulateLoading(5000);//is used here to simulate js loading
