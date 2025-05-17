# Getting started

Before you start configuring your VS Code, we'll go through the basics of VS Code's configurations.

Configurations can be applied at different scopes:

- **User**: Settings that apply to all instances of VS Code on your machine. These are typically the settings you'll edit from the settings UI.
- **Project**: Settings that apply to a specific folder or workspace. These settings are stored in a `.vscode` folder within the project directory, this is what we will be focusing on in this guide.

## `settings.json`

The [`settings.json`](https://code.visualstudio.com/docs/configure/settings) file holds most common editor settings. You can customize the editor's behavior, appearance, default formatting, and more.
For example, you can set the default formatter for a specific language, or enable/disable certain features like auto-save or word wrap.

```json
{
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## `launch.json`

The `launch.json` file is used to configure launch and debug settings for your project. You can specify how to launch or attach to a program, set environment variables, and define other debugging options.

Launch configurations can then be used from the Run and Debug view in VS Code.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/src/index.js"
    }
  ]
}
```

## `tasks.json`

The `tasks.json` file is used to define custom tasks that can be run from within VS Code. You can create tasks for building, testing, or running your code, and you can specify how to run them.

Tasks can be run from the Command Palette (using the `Tasks: Run Task` command) or bound to keyboard shortcuts.

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

## `keybindings.json`

The [`keybindings.json`](https://code.visualstudio.com/docs/configure/keybindings#_advanced-customization) file is used to customize keyboard shortcuts in VS Code. You can override default keybindings or create new ones for specific commands.

```json
[
  {
    "key": "ctrl+k ctrl+c",
    "command": "editor.action.commentLine",
    "when": "editorTextFocus"
  }
]
```

## `extensions.json`

The `extensions.json` file is used to recommend extensions for your project. You can specify a list of extensions that are useful for your project, and VS Code will prompt users to install them when they open the project.

This is useful for ensuring that all team members have the same development environment, such as linters, formatters, or language support.

```json
{
  "recommendations": [
    // Eslint
    "dbaeumer.vscode-eslint",
    // Prettier
    "esbenp.prettier-vscode",
    // Pretty TypeScript Errors
    "yoavbls.pretty-ts-errors"
  ]
}
```
