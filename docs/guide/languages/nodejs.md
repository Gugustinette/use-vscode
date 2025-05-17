# Node.js

## Plain NodeJS project

Here is how to set up a simple Node.js project with a `launch.json` file for debugging.

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

This example using [tsdown](https://tsdown.dev/) to compile the TypeScript code to JavaScript.

The launch configuration is set to run the `build` task before starting the application, which compiles the TypeScript code to JavaScript. Then the compiled JavaScript code is executed.

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
