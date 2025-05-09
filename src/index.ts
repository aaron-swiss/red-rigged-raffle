import { RaffleEngine } from "./raffle-engine.js";
import { Prize } from "./prize.js";

export class RaffleController {
  public main() {
    const participants = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@Ronaldo7",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
    ];
    const prizes = [
      new Prize("iPhone 16 Pro", 1),
      new Prize("Trip nach Dubi", 1),
      new Prize("Stepper nach Isti", 1),
      new Prize("10 kg Haribo", 2),
      new Prize("PlayStation 5 Slim", 3),
      new Prize("gebrauchte Sneaker", 5),
    ];
    const winners = 
    new RaffleEngine(
      participants,
      prizes
    ).drawWinners();
    for (const [participant, prize] of winners.entries()) {
      console.log(`${participant} gewinnt ${prize}`);
    }
  }
}

new RaffleController().main();
