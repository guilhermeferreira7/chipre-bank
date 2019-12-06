class MyDate {
    constructor() {
        this.time = new Date();
        this.year = this.time.getFullYear();
        this.month = this.time.getUTCMonth();
        this.day = this.time.getDate();
        this.hour = this.time.getHours();
        this.min = this.time.getMinutes();
        if (this.hour < 10) this.hour = '0' + this.hour;
        if (this.min < 10) this.min = '0' + this.min;
    }
}