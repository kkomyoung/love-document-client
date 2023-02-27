const calRem = (size) => `${size / 16}rem`

// const fontStyle = {
//   title: calRem(32),
// }

const theme = {
  calRem,
  bgColor: '#FFFFFF',
  gray100: '#F9F9FB',
  gray200: '#BCBCBC',
  gray300: '#F0EEF6',
  gray400: '#D7D7E4',
  gray500: '#BDBDCA',
  gray600: '#8F8F99',
  gray700: '#606062',
  gray800: '#3A393D',
  gray900: '#181818',

  blue300: '#BDE4FF',
  blue500: '#79C7FF',
  blue700: '#1B7EC5',
  blue800: '#175F92',

  pink300: '#FFE9F3',
  pink400: '#FFAFBE',
  pink700: '#F85675',
  pink800: '#DD3F5D',
}

export default theme
