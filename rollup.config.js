import html from '@rollup/plugin-html';

export default {
  input: 'index.html',
  output: {
    dir: 'dist',
  },
  plugins: [html()],
};
