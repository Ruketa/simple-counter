/**
 *  Counter class
 */
export class Counter {
  private count!: number;

  /**
   *   constructor
   *
   *   @param {Number}  count
   */
  constructor(count = 0) {
    this.count = count;
  }

  countUp(): number {
    this.count++;
    return this.count;
  }

  countDown(): number {
    this.count--;
    return this.count;
  }

  reset(): number {
    this.count = 0;
    return this.count;
  }

  getCount(): number{
    return this.count;
  }
}
