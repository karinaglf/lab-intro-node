class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    const index = this.items.indexOf(pos);
    if (this.items.indexOf(pos) === -1) {
      throw new Error("OutOfBounds");
    }
    return this.items[index];
  }
  max() {
    if (this.length === 0) {
      throw new Error("OutOfBounds");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("OutOfBounds");
    } else {
      return Math.min(...this.items);
    }
  }
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, val) => acc + val)
    }
  }
  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.floor(this.items.reduce((acc, val) => acc + val/this.length))
    }
  }
}

module.exports = SortedList;
