class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, fn, id) {
    
    if (this.id == 'undefined') {
      throw new Error('Невозможно идентифицировать будильник. Параметр id на передан.')
    }
    
    this.id = id;
    this.time = time;
    this.callback = fn;

    this.alarmCollection.push(this.addClock)
  }

  removeClock(id) {

  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes(); 

    console.log(`${hours}:${minutes}`)
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

