/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  "testEnvironment": "node",
  "roots": [
    "<rootDir>/"
  ],
  "transform": {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  "moduleNameMapper": {
      "^@interface/(.*)": "<rootDir>/lib/sdk/interface/$1",
      "^@type/(.*)": "<rootDir>/lib/sdk/type/$1",
      "^@enum/(.*)": "<rootDir>/lib/sdk/enum/$1",
      "^@/": "<rootDir>/lib/",
  },
};