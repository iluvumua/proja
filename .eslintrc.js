module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
    'prettier/prettier': ['error', {'endOfLine': 'auto'}], // Or 'lf' or 'crlf' based on your OS/preference
  },
};
