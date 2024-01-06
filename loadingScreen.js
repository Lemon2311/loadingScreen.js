export class LoadingScreen {
    constructor() {
        // Create the loading screen div
        this.loadingScreen = document.createElement("div");
        this.loadingScreen.style.position = "fixed";
        this.loadingScreen.style.top = "0";
        this.loadingScreen.style.left = "0";
        this.loadingScreen.style.width = "100%";
        this.loadingScreen.style.height = "100%";
        this.loadingScreen.style.backgroundColor = "white";
        this.loadingScreen.style.display = "flex";
        this.loadingScreen.style.justifyContent = "center";
        this.loadingScreen.style.alignItems = "center";
        this.loadingScreen.style.zIndex = "9999";

        // Create the spinner div
        this.spinner = document.createElement("div");
        this.spinner.style.border = "4px solid rgba(0, 0, 0, 0.3)";
        this.spinner.style.borderTop = "4px solid #3498db";
        this.spinner.style.borderRadius = "50%";
        this.spinner.style.width = "40px";
        this.spinner.style.height = "40px";
        this.spinner.style.animation = "spin 1s linear infinite";

        // Append spinner to the loading screen
        this.loadingScreen.appendChild(this.spinner);

        // Define the CSS animation for the spinner
        const style = document.createElement("style");
        style.innerHTML = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }`;
        document.head.appendChild(style);

        // Show the loading screen
        document.documentElement.appendChild(this.loadingScreen);
    }

    hide() {
        this.loadingScreen.style.display = "none";
    }

    show(){
        this.loadingScreen.style.display = "flex";
    }

    simulateLoading(delay) {
        setTimeout(() => {
            this.hide();
        }, delay);
    }

    hideOnJsLoad() {
        window.onload = () => {
            this.hide();
        };
    }
}
