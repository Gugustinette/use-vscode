# Node.js

## Plain NodeJS project

Here is how to set up a simple Node.js project for debugging with VSCode.

### `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Run App",
      "program": "${workspaceFolder}/src/index.js"
    }
  ]
}
```

## NodeJS with TypeScript

The launch configuration is set to run the `build` task before starting the application, which uses [tsdown](https://tsdown.dev/) to compiles the TypeScript code to JavaScript. Then the compiled JavaScript code is executed.

::: warning
In order to make debugging work, you need your bundler to generate source maps. In this example, we are using such configuration for tsdown:

```typescript
import { defineConfig } from "tsdown/config";

export default defineConfig({
  entry: "src/index.ts",
  sourcemap: true,
});
```

:::

### `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Run App",
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "build",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

### `tasks.json`

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "build",
      "type": "shell",
      "command": "npm run build",
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```
