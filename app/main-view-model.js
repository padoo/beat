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

    viewModel.onTapRed = function () {
        http.getString('http://192.168.240.1/arduino/neo/red').then(function (response) {
            console.log(response);
            this.set("message", response);
        });
    };

    viewModel.onTapGreen = function () {
        http.getString('http://192.168.240.1/arduino/neo/green');
        this.set("message", getMessage(this.counter));
    };

    viewModel.onTapBlue = function () {
        http.getString('http://192.168.240.1/arduino/neo/blue');
        this.set("message", getMessage(this.counter));
    };

    viewModel.onTapGrey = function () {
        http.getString('http://192.168.240.1/arduino/neo/reset');
        this.set("message", getMessage(this.counter));
    };

    return viewModel;
}

exports.createViewModel = createViewModel;