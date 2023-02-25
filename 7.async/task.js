class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(id, time, callback) {
        if (!id) {
            throw new Error('id не был указан');
        }
        if (this.alarmCollection.some(v => v.id === id)){
            console.error('Такой id уже существует');
            return;
        } else {
            this.alarmCollection.push({id, time, callback});
        }
    }
    removeClock(id) {
        let index = this.alarmCollection.findIndex(i => i.id === id);
        if (index != 1) {
            this.alarmCollection.splice(index, 1);
            return true;
        }
        return false;
    }
    getCurrentFormattedTime() {
        let nowDate = new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});
        return nowDate;
    }
    start() {
        if (this.timerId != null) {
            return
        }
        let interval = setInterval( () => {
            this.alarmCollection.forEach((el) => checkClock(el));
        }, 3000);
        this.timerId = interval;

        const checkClock = (el) => {
            if (this.getCurrentFormattedTime() === el.time) {
                return el.callback();
            }
        };
    }
    stop () {
        if (this.timerId == null) {
            return
        }
        cleanInterval(this.timerId);
        this.timerId == null;
    }
    printAlarms() {
        this.alarmCollection.map((el) => {
            console.log("Будильник: ${item.id} заведён на: ${item.time}");
        })

    }
    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}


let phoneClock = new AlarmClock();
phoneClock.addClock("09:03",() => {console.log("Пора идти")},1);
phoneClock.addClock("07:24",() => {console.log("Пора на работу")},2);
phoneClock.addClock("07:24",() => {console.log("Привет")},3);
phoneClock.removeClock(1);
phoneClock.stop();
phoneClock.start();
phoneClock.printAlarms();