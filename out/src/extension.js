'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const appModel_1 = require("./appModel");
console.log("hello!!!!");

function activate (context) {
    // const projectLanguage = vscode.workspace.projectLanguage;
    const appModel = new appModel_1.AppModel();
    context.subscriptions.push(vscode.commands.registerCommand('dart-new-file.createFile', (file) => {
        appModel.createFileOrFolder('file', file ? appModel.findDir(file.fsPath) : '/');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('dart-new-file.createFolder', (file) => {
        appModel.createFileOrFolder('folder', file ? appModel.findDir(file.fsPath) : '/');
    }));

}
exports.activate = activate;
function deactivate () {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
