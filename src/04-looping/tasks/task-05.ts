/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldCount: number = 0
let silverCount: number = 0
let bronzeCOunt: number = 0
let noMedalCount: number = 0
let totalScore: number = 0

for (const score of scores) {
    totalScore+= score
 
    if (score >= 95){
        goldCount++
    } else if (score >= 85) {
        silverCount++
    } else if (score >= 75) {
        bronzeCOunt++
    } else {
        noMedalCount++
    }
}

const averageScore: number = totalScore / scores.length;

console.log(`--- Competition Results ---`);
console.log(`Gold Medalists:   ${goldCount}`);
console.log(`Silver Medalists: ${silverCount}`);
console.log(`Bronze Medalists: ${bronzeCOunt}`);
console.log(`No Medal:         ${noMedalCount}`);
console.log(`Average Score:    ${averageScore.toFixed(2)}`);