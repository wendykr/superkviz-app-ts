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