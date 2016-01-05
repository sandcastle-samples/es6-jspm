System.config({
  baseURL: ".",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "target": "es5",
    "module": "system",
    "sourceMap": true,
    "noImplicitAny": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "app": {
      "main": "index",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "typescript"
        },
        "*.js": {
          "loader": "typescript"
        }
      },
      "deps": [
        "vendor"
      ]
    },
    "vendor": {
      "main": "index",
      "defaultExtension": "js"
    }
  },
  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "lodash": "npm:lodash@3.10.1",
    "typescript": "npm:typescript@1.7.5",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
