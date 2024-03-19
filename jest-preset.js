const config = {
    verbose: true, // Выводить подробные сообщения о выполнении тестов
    transform: {
      // Преобразовывать JavaScript файлы с помощью Babel
      '^.+\\.js$': 'babel-jest',
    },
    roots: [
      // Указать корневые директории, в которых следует искать файлы тестов
      '<rootDir>/src',
    ],
    moduleFileExtensions: [
      // Расширения файлов, которые будут интерпретироваться как модули
      'js',
      'json',
      'jsx',
      'ts',
      'tsx',
      'node',
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$', // Регулярное выражение для поиска файлов с тестами
    coverageReporters: ['text', 'html'], // Форматы отчетов о покрытии кода тестами
    collectCoverage: true, // Собирать данные о покрытии кода тестами
  };
  
  module.exports = config;