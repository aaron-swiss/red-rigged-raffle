import { Prize } from "./prize.js";

export class RaffleEngine {
  constructor(
    private participants: string[],
    private prizes: Prize[],
  ) {}

  public drawWinners(): Map<string, string> {
    const winners = new Map<string, string>();
    const shuffled = new Array<string>();
    while (this.participants.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.participants.length);
      const selected = this.participants[randomIndex];
      shuffled.push(selected);
      this.participants.splice(randomIndex, 1);
    }
    while (this.prizes.length > 0 && shuffled.length > 0) {
      const currentPrize = this.prizes[0];
      const winner = shuffled.shift();
      winners.set(winner!, currentPrize.prizeName);
      if (currentPrize.prizeQuantity <= 1) {
        this.prizes.shift();
      } else {
        currentPrize.prizeQuantity--;
      }
    }
    return winners;
  }
}