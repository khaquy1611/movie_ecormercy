module.exports = {
  '*.{js,jsx }': [
    'eslint --max-warnings=0',
    'react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests',
    () => 'tsc-files --noEmit',
  ],
  '*.{js,jsx,json,css,js}': ['prettier --write'],
};
