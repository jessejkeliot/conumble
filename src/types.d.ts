export interface TryMap {
    Square: number;
    Double: number;
    Increment: number;
    Decrement: number;
  }
  
  export interface Question {
    startValue: number;
    targetValue: number;
    tryMap: TryMap;
  }