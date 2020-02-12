export class Log {
  counterMessage(counter) {
    return counter ? `Found ${counter} users` : 'Not found'
  }
}