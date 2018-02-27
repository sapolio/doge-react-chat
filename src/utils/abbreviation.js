export default function abbreviate(words, abbrLength) {
  try {
    return words
    .split(/\s+/, abbrLength)
    .map(word => word[0])
    .join('')
    .toUpperCase();
  } catch (err) {
    console.error(err);
    return 'error';
  }
};
