
export function cursorToColor(cursorFile) {
  if (cursorFile === '/blue-saber.cur') {
    return '#0077FF';
  } else if (cursorFile === '/red-saber.cur') {
    return '#FF0000';
  } else if (cursorFile === '/green-saber.cur') {
    return '#01EB14';
  } else if (cursorFile === '/purple-saber.cur') {
    return '#D000FF';
  }
}

export function jediOrSith(cursorFile) {
  if (cursorFile === '/blue-saber.cur' || cursorFile === '/green-saber.cur' || cursorFile === '/purple-saber.cur') {
    return 'Jedi';
  } else if (cursorFile === '/red-saber.cur') {
    return 'Sith';
  }
}