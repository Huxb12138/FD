// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed





module.exports.activate = function (context) {
  context.subscriptions.push(
    vscode.languages.registerHoverProvider("javascript", {
      provideHover: (document, position) => {
        const { _line } = position;
        const lineContent = document.lineAt(_line).text;
        const regexp =
          /((https?):)?\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;
        const res = lineContent.match(regexp);
        console.log("1", res);
        if (res === null) {
          vscode.window.showInformationMessage('Hello World from jstemplate!');
          return;
        }
        const url = res[0];
        console.log("2", url);
        return new vscode.Hover(new vscode.MarkdownString(`![](${url})`));
      },
    })
  );
};

