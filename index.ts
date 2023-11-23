import { readFileSync } from 'fs';

const calledNumbers: number[] = readFileSync('calledNumbers.txt', 'utf8').split(',').map(Number);

const bingoCard: number[][] = readFileSync('bingoCard.txt', 'utf8')
  .split('\n')
  .map((row: string) => row.trim().split(/\s+/).map(Number));

const bingoCards: number[][][] = readFileSync('bingoCards.txt', 'utf8')
  .split('\n\n')
  .map((card: string) => card.split('\n').map((row: string) => row.trim().split(/\s+/).map(Number)));

// PART 1
// Write a program that determines whether this card will ever get Bingo
export function checkBingo(numbers: number[], card: number[][]): number | false {
  const markedNumbers: Set<number> = new Set();

  for (let number of numbers) {
    markedNumbers.add(number);
    for (let i = 0; i < 5; i++) {
      if (card[i].every((val: number) => markedNumbers.has(val)) || card.every((row: number[]) => markedNumbers.has(row[i]))) {
        return number;
      }
    }
  }
  return false;
}