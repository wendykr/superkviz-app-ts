export const declineQuestions = (count: number): string => {
  if (count === 0) {
    return 'Žádné otázky';
  } else if (count === 1) {
    return 'otázka';
  } else if (count >= 2 && count <= 4) {
    return 'otázky';
  } else {
    return 'otázek';
  }
}

export const declineResultsCount = (count: number): string => {
  if (count === 1) {
    return `z ${count} otázky`;
  } else if (count >= 2 && count <= 4) {
    return `ze ${count} otázek`;
  } else {
    return `z ${count} otázek`;
  }
}