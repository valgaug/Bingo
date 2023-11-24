import { readFileSync } from 'fs';

type WinningCardType = {
  card: number[][];
  result: number;
};

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

// PART 2
// write a program that tells you which board to pick to guarantee a win against the giant squid
// note that to keep it simple and only answering the challenge problem I didn't considered edge cases such as:
// making sure arguments are not empty, tie situation, ...

export function calculateBingoCard(numbers: number[], ...cards: number[][][]): number[][] {
  let winningCard: WinningCardType = {
    card: [[]],
    result: numbers[numbers.length - 1],
  };
  for (let card of cards) {
    const result = checkBingo(numbers, card);
    if (result && numbers.indexOf(result) < numbers.indexOf(winningCard.result)) {
      winningCard.card = card;
      winningCard.result = result;
    }
  }
  return winningCard.card;
}

checkBingo(calledNumbers, bingoCard);
calculateBingoCard(calledNumbers, bingoCards[0], bingoCards[1], bingoCards[2]);
