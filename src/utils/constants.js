export const QUESTION_TYPE = {
  RANGE: 'RANGE',
  SCORE: 'SCORE',
  CHOICE: 'CHOICE',
  YN: 'YN',
  INPUT: 'INPUT',
  SELECT: 'SELECT',
}

export const ERR_CODE = {
  U001: 'U001',
}

export const THUMBNAIL_URL = {
  BASIC:
    'https://firebasestorage.googleapis.com/v0/b/love-document.appspot.com/o/love-document.png?alt=media&token=a9922bcf-1c8a-46d4-a054-2e0e07e4a296',
  ACCEPT:
    'https://firebasestorage.googleapis.com/v0/b/love-document.appspot.com/o/love-document-accept.png?alt=media&token=7c6e16e4-b7b2-4b7b-8793-f07751f6d60e',
  REJECT:
    'https://firebasestorage.googleapis.com/v0/b/love-document.appspot.com/o/love-document-reject.png?alt=media&token=847386bd-25fd-4c16-b5e6-f08257b546f2',
}

export const SELECT_OPTIONS = {
  나이: [
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40,
  ],

  키: [150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200],
}

export function createSelectOptions(dataType) {
  const options = []
  let start
  let end

  if (dataType === '나이') {
    start = 1980
    end = 2010
  } else if (dataType === '키') {
    start = 100
    end = 230
  }

  for (let i = start; i <= end; i++) {
    options.push(i)
  }

  return options
}
