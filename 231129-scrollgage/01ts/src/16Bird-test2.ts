import { Bird, Fish } from "./14bird";
import { flyOrswim } from "./15bird-test";

const birdT = new Bird();
const FishT = new Fish();

[birdT, FishT].forEach(flyOrswim);
