function setup() {
    loadJSON("https://time.com", getData, 'jsonp');

}
function getData(data) {
    console.log(data);
}
function draw() {

}