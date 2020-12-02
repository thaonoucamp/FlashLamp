class FlashLamp {
    constructor(status, battery) {
        this._status = status;
        this._battery = battery;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

}