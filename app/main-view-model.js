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

    viewModel.onTap = function () {
        this.counter--;
        this.set("message", getMessage(this.counter));
    };

    viewModel.onTapHorn = function () {
        httpGetArduino('blue');
    };

    viewModel.onTapRed = function () {
        httpGetArduino('red');
    };

    viewModel.onTapGreen = function () {
        httpGetArduino('green');
    };

    viewModel.onTapBlue = function () {
        httpGetArduino('blue');
    };

    viewModel.onTapReset = function () {
        httpGetArduino('reset');
    };

    return viewModel;


    function httpGetArduino(param) {
        var url = 'http://192.168.240.1/arduino/neo/';
        http.getString(url + param);
    }
}

exports.createViewModel = createViewModel;
