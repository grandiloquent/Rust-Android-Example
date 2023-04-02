
function startServer() {
    NativeAndroid.startServer();
}
function playVideo() {
    NativeAndroid.playVideo();
}
function openPage() {
    NativeAndroid.openPage();
}
function serverHome() {
    NativeAndroid.serverHome();
}
function videoList() {
    NativeAndroid.videoList();
}
function switchInputMethod() {
    NativeAndroid.switchInputMethod();
}
function searchVideo() {
    const string = NativeAndroid.readText();
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(string)}+movie+online`;
}
function notes() {
    NativeAndroid.notes();
}
function settings() {
    const dialog = document.createElement('custom-dialog');
    const div = document.createElement('div');
    dialog.setAttribute('title', "添加收藏");
    div.style = `display:flex;flex-direction:column;row-gap:10px;`
    dialog.appendChild(div);
    div.innerHTML = `<style>input[type="text"]
{
    background-color: transparent;
    border: 1px solid #dadce0;
    margin: 0;
    padding: 0 0 0 16px;
    font-size: 16px;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif;
    color: rgba(0,0,0,.87);
    word-wrap: break-word;
    display: flex;
    flex: 1;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    line-height: 24px;
    padding-left: 3px;
    padding-right: 2px;
    overflow-y: hidden;
    outline: 0;
    box-sizing: border-box;
}</style>
    <input class="key" type="text" />
    <input class="value" type="text" />`;
    const key = div.querySelector('.key');
    const value = div.querySelector('.value');
    dialog.addEventListener('submit', evt => {
        const keyValue = key.value.trim();
        const valueValue = value.value.trim();
        console.log(keyValue, valueValue);
    })
    document.body.appendChild(dialog);
}
// 

bind();