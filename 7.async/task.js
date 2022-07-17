class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, fn, id) {

    const newClock = {};

    if (id === undefined) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.')
    }
    if (this.alarmCollection.some(alarm => alarm.id === id)) {
      return console.error('Будильник с таким id уже существует')
    }

    newClock.id = id;
    newClock.time = time;
    newClock.callback = fn;

    this.alarmCollection.push(newClock)
  }

  removeClock(id) {
    const lengthBefore = this.alarmCollection.length
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id)
    const lengthAfter = this.alarmCollection.length

    console.log(lengthBefore !== lengthAfter)  }

  getCurrentFormattedTime() {
    const currentDate = new Date();

    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    
    return `${hours}:${minutes}`
  }

  start() {
    const checkClock = (clock) => {
      if (clock.time === this.getCurrentFormattedTime()) {
        console.log(clock.callback)
      } 
    }

    if (this.timerId === null) {
      this.timerId = setInterval(() => this.alarmCollection.forEach((item) => checkClock(item)), 1000);
      
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`)
    this.alarmCollection.forEach((item) => console.log(`Будильник №${item.id} заведен на ${item.time}`))
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

}

// test

const testCase = () => {
  const alarm01 = new AlarmClock()

  alarm01.addClock(`${alarm01.getCurrentFormattedTime()}`, 'Rise and shine', 1)
  // alarm01.addClock(`${alarm01.getCurrentFormattedTime()}`, 'Rise and shine')
  alarm01.addClock(`${alarm01.getCurrentFormattedTime()}`, 'Wake up, Neo', 2)
  alarm01.addClock('13:13', 'Goog morning', 1)
  alarm01.addClock('15:15', 'I got you babe', 3)

  console.log(alarm01);
  alarm01.printAlarms();

  alarm01.removeClock(1);

  console.log(alarm01);
  console.log(alarm01.getCurrentFormattedTime())
  alarm01.printAlarms();
  alarm01.start()
  console.log(alarm01);
  // alarm01.stop()
}
testCase()