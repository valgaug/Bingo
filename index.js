import { readFileSync } from 'fs';

const calledNumbers = readFileSync('calledNumbers.txt', 'utf8').split(',').map(Number);

const bingoCard = readFileSync('bingoCard.txt', 'utf8')
  .split('\n')
  .map((row) => row.trim().split(/\s+/).map(Number));

console.log(bingoCard);

const bingoCards = readFileSync('bingoCards.txt', 'utf8')
  .split('\n\n')
  .map((card) => card.split('\n').map((row) => row.trim().split(/\s+/).map(Number)));

// PART 1
// Write a program that determines whether this card will ever get Bingo

export function checkBingo(numbers, card) {
  return 3;
}

checkBingo(calledNumbers, bingoCard);
