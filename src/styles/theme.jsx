const a11yHidden = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); /* 구형 브라우저를 위해 사용 */
  clip-path: polygon(0 0, 0 0, 0 0); /* inset(50%) 와 동일한 표현 */
  border: 0;
`

const fontWeight = {
  medium: 'font-weight: 500;',
  semibold: 'font-weight: 600;',
  bold: 'font-weight: 700;',
}

const fontSize = {
  // headline
  h1: `font-size: 3.2rem; line-height: 1; ${fontWeight.semibold};`,
  h2: `font-size: 2.4rem; line-height: 1; ${fontWeight.semibold};`,
  h3_b: `font-size: 2rem; line-height: 1.2; ${fontWeight.bold};`,
  h3_m: `font-size: 2rem; line-height: 1.2; ${fontWeight.medium};`,
  h4_m: `font-size: 1.8rem; line-height: 1.2; ${fontWeight.medium};`,
  h4_sb: `font-size: 1.8rem; line-height: 1.2; ${fontWeight.semibold};`,

  // label
  label_l: 'font-size: 1.8rem; line-height: 1;',
  label_m_m: `font-size: 1.6rem; line-height: 1; ${fontWeight.medium};`,
  label_m_sb: `font-size: 1.6rem; line-height: 1; ${fontWeight.semibold};`,
  label_s_m: `font-size: 1.4rem; line-height: 1; ${fontWeight.medium};`,
  label_s_sb: `font-size: 1.4rem; line-height: 1; ${fontWeight.semibold};`,

  // body
  b1: 'font-size: 1.6rem; line-height: 1.6;',
  b2: 'font-size: 1.4rem; line-height: 1.6;',
}

const theme = {
  fontWeight,
  fontSize,
  a11yHidden,
  // color
  white: '#FFFFFF',
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
  black: '#000000',

  blue300: '#BDE4FF',
  blue500: '#79C7FF',
  blue700: '#1B7EC5',
  blue800: '#175F92',

  pink300: '#FFE9F3',
  pink400: '#FFAFBE',
  pink700: '#F85675',
  pink800: '#DD3F5D',

  kakao: '#FBE34D',
}

export default theme
