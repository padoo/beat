var Observable = require("data/observable").Observable;
var http = require("http");

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);
    viewModel.stopped = true;

    /*var holdButton = viewModel.getElementById('holdBtn');
    holdButton.on(gestures.GestureTypes.touch, function (args) {
        if(args.action === 'down') {
            console.log('down');
            httpGetArduino('red');
        }

        if (args.action === 'up') {
            console.log('up');
            httpGetArduino('green');
        }
    });*/

    viewModel.onTap = function () {
        this.counter--;
        this.set("message", getMessage(this.counter));
    };

    viewModel.onTapRed = function () {
        //http.getString('http://192.168.240.1/arduino/neo/red');
        httpGetArduino('red');
    };

    viewModel.onTapGreen = function () {
        //http.getString('http://192.168.240.1/arduino/neo/green');
        httpGetArduino('green');
    };

    viewModel.onTapBlue = function () {
        //http.getString('http://192.168.240.1/arduino/neo/blue');
        httpGetArduino('blue');
    };

    viewModel.onTapGrey = function () {
        httpGetArduino('reset');
    };

    return viewModel;

    function httpGetArduino(param) {
        var url = 'http://192.168.240.1/arduino/neo/';
        http.getString(url + param);
    }
}

exports.createViewModel = createViewModel;

exports.loaded = function(args){
    console.log('hello!!');
    var page = args.object;
    var holdBtn = page.getViewById('holdBtn');
    console.log(holdBtn);
};