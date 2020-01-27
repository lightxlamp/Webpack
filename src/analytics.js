function createAnalytics(){
    let clicksCounter = 0;
    let isDestroyed = false; 

    const listener = () => clicksCounter++;

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroyed = true;
        },
        getClicks(){
            if(isDestroyed){
                return "Analytics in unavailable";
            }
            return clicksCounter;
        }
    }
}


window.analytics = createAnalytics();
window.stasTestVariable = "Hey my name is Stas. I love JS :p";
// window.blur();
// The window object represents a window in browser. An object of window is created automatically by the browser. 
// Window is the object of browser, it is not the object of javascript. The javascript objects are string, array, date etc.
// I know... But I did not know that we can assign smth to this object 
