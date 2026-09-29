import type {Config} from 'tailwindcss';
const v=(n:string)=>`rgb(var(--${n}) / <alpha-value>)`;
export default {content:['./app/**/*.tsx','./components/**/*.tsx'],theme:{extend:{colors:{surface:v('surface'),surface2:v('surface2'),fg:v('fg'),accent:v('accent'),ink:'#050505',char:'#111111',bone:'#F4F1EA',ash:'#D8D5CE',acid:'#C6FF00',volt:'#2B4BFF',blood:'#B0121B'},fontFamily:{display:['var(--f-d)','Impact','sans-serif'],sans:['var(--f-s)','Helvetica','sans-serif']},transitionTimingFunction:{lf:'cubic-bezier(.16,1,.3,1)'}}},plugins:[]} satisfies Config;
