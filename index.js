const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

startBtn.addEventListner("click",()=>{
    document.addEventListner("keydown",handleDown);
    document.addEventListner("keyup",handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = true;
})
stopBtn.addEventListner("click",()=>{
    document.removeEventListner("keydown",handleDown);
    document.removeEventListner("keyup",handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    stopBtn.disabled = true;
    startBtn.disabled = true;
})
function handleDown(e){
    logDiv.textContent = `Key ${e.key} is pressed`;
    stateDiv.textContent = "key is down";
}
function handleUp(e){
    logDiv.textContent = `Key ${e.key} is pressed up`;
    stateDiv.textContent = "key is up";
}
