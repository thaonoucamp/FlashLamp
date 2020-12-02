class Battery {
    constructor(energy) {

        this._energy = energy;
    }
    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }
    this.decreaseEnergy = function () {
        if(this.energy > 0) {
            this.energy--;
        }
    }
}