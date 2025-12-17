interface QueueInterface<T> {
  push(item: T): void;
  // pop(): T | undefined;
  // isEmpty(): boolean;
  // isFull(): boolean;
  size(): number;
  // print(): void;
}

class Queue<T> implements QueueInterface<T> {
  private storage: T[] = [];
  private capacity: number;

  constructor(capacity: number = Infinity) {
    this.capacity = capacity;
  }

  push(item: T): void {
    if (this.size() == this.capacity) {
      throw Error("too much capacity")
    } else {
      this.storage.push(item);
    }
  }

  size(): number {
    return this.storage.length
  }
}

export type { QueueInterface, Queue };