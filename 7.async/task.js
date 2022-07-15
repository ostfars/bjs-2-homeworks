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

  }

  stop() {

  }

  printAlarms() {

  }

  clearAlarms() {

  }

}

// test

const alarm01 = new AlarmClock()
alarm01.addClock('11:11', 'Wake up, Neo', 1)
console.log(alarm01)
const alarm02 = new AlarmClock('14:14', 'Rise and shine!!!')
alarm02.addClock('14:14', 'Rise and shine!!!')
console.log(alarm02)
console.log(alarm01.getCurrentFormattedTime())

