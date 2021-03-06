/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "ignorePatterns": ["**/*.js", 'dist', '**/dist/*', 'node_modules', '**/node_modules/*'],
  "extends": [
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "tsconfigRootDir": __dirname,
    "sourceType": "script"
  },
  "plugins": [
    "eslint-plugin-jsdoc",
    "simple-import-sort",
    "eslint-plugin-no-null",
    "eslint-plugin-prefer-arrow",
    "eslint-plugin-react",
    "@typescript-eslint",
    "@typescript-eslint/tslint"
  ],
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/array-type": [
      "warn",
      {
        "default": "array-simple"
      }
    ],
    "@typescript-eslint/ban-types": [
      "warn",
      {
        "types": {
          "Object": {
            "message": "Avoid using the `Object` type. Did you mean `object`?"
          },
          "Function": {
            "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
          },
          "Boolean": {
            "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
          },
          "Number": {
            "message": "Avoid using the `Number` type. Did you mean `number`?"
          },
          "String": {
            "message": "Avoid using the `String` type. Did you mean `string`?"
          },
          "Symbol": {
            "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
          }
        }
      }
    ],
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/indent": [
      "off",
      2,
      {
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        }
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: 'default',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allowSingleOrDouble',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      }
    ],
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-new": "warn",
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "vars": "local",
        "args": "none",
        "ignoreRestSiblings": true
      }
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-redeclare": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-namespace-keyword": "warn",
    "@typescript-eslint/quotes": [
      "warn",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      },
    ],
    "@typescript-eslint/semi": [
      "warn",
      "always"
    ],
    "@typescript-eslint/triple-slash-reference": [
      "warn",
      {
        "path": "always",
        "types": "prefer-import",
        "lib": "always"
      }
    ],
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/unified-signatures": "warn",
    "arrow-body-style": [
      "off",
      "as-needed"
    ],
    "arrow-parens": [
      "warn",
      "always"
    ],
    "brace-style": [
      "warn",
      "1tbs",
      { "allowSingleLine": true }
    ],
    "comma-dangle": [
      "off",
      "always-multiline"
    ],
    "complexity": "off",
    "constructor-super": "warn",
    "curly": "warn",
    "default-case": "off",
    "eol-last": "off",
    "eqeqeq": [
      "warn",
      "always",
      { "null": "ignore" }
    ],
    "guard-for-in": "warn",
    "id-blacklist": [
      "warn",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "warn",
    "import/no-extraneous-dependencies": "off",
    "import/no-internal-modules": "off",
    "import/order": "off",
    "import-order-alphabetical/order": "off",
    "jsdoc/check-alignment": "off",
    "jsdoc/check-indentation": "off",
    "jsdoc/newline-after-description": "off",
    "max-classes-per-file": [
      "warn",
      1
    ],
    "max-len": [
      "off",
      {
        "code": 140
      }
    ],
    "new-parens": "warn",
    "no-bitwise": "warn",
    "no-caller": "warn",
    "no-cond-assign": "warn",
    "no-console": [
      "warn",
      {
        "allow": [
          "log",
          "info",
          "dirxml",
          "warn",
          "erro",
          "dir",
          "time",
          "timeEnd",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupCollapsed",
          "groupEnd",
          "table",
          "Console",
          "markTimeline",
          "profile",
          "profileEnd",
          "timeline",
          "timelineEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "warn",
    "no-duplicate-case": "warn",
    "no-duplicate-imports": "off",
    "no-empty": "warn",
    "no-eval": "warn",
    "no-extra-bind": "warn",
    "no-fallthrough": "warn",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 1
      }
    ],
    "no-new-func": "warn",
    "no-new-wrappers": "warn",
    "no-null/no-null": "off",
    "no-redeclare": "off",
    "no-return-assign": "warn",
    "no-return-await": "warn",
    "no-sequences": "warn",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
      "warn",
      {
        "hoist": "all"
      }
    ],
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-throw-literal": "warn",
    "no-trailing-spaces": "warn",
    "no-undef-init": "warn",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "warn",
    "no-unused-labels": "warn",
    "no-var": "warn",
    "object-shorthand": "warn",
    "one-var": [
      "warn",
      "never"
    ],
    "prefer-arrow/prefer-arrow-functions": [
      "warn", {
        allowStandaloneDeclarations: true,
        classPropertiesAllowed: false, // set to true if you want to never allow class methods and only allow arrows
      }
    ],
    "prefer-const": "warn",
    "prefer-object-spread": "warn",
    "quote-props": [
      "warn",
      "as-needed"
    ],
    "radix": "warn",
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-spacing": [
      "warn",
      {
        "when": "never"
      }
    ],
    "react/jsx-equals-spacing": [
      "warn",
      "never"
    ],
    "react/jsx-key": "warn",
    "react/jsx-no-bind": "off",
    "react/jsx-wrap-multilines": "warn",
    "react/prop-types": "off",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "sort-imports": [
      "off", {
        "ignoreCase": true,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "multiple", "all", "single"],
        "allowSeparatedGroups": true,
      }
    ],
    "space-before-function-paren": [
      "warn",
      {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "space-in-parens": [
      "off",
      "never"
    ],
    "spaced-comment": [
      "warn",
      "always",
      {
        "exceptions": ["//", '**'],
        "markers": [
          "/"
        ]
      }
    ],
    "use-isnan": "warn",
    "valid-typeof": "off",
    "@typescript-eslint/tslint/config": [
      "warn",
      {
        "rules": {
          "import-spacing": true,
          // disabling these until they are someday implemented
          // "jsx-alignment": true,
          // "jsx-no-string-ref": true,
          // "jsx-self-close": true,
          "jsx-no-lambda": false,
          "no-promise-as-boolean": true,
          "prefer-conditional-expression": true,
          "typedef": [
            false,
            "parameter",
            "property-declaration",
            "member-variable-declaration"
          ]
        }
      }
    ]
  },
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
    "propWrapperFunctions": [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { "property": "freeze", "object": "Object" },
      { "property": "myFavoriteWrapper" }
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { "name": "Link", "linkAttribute": "to" }
    ]
  }
};
