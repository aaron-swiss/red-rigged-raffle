export class Prize {
  constructor(
    private name: string,
    private quantity: number,
  ) {}

  public get prizeName(): string {
    return this.name;
  }

  public get prizeQuantity(): number {
    return this.quantity;
  }

  public set prizeQuantity(newQuantity: number) {
    this.quantity = newQuantity;
  }
}
