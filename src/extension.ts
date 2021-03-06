'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CompletionJS } from './completionJS';
import { CompletionHTML } from './completionHTML';
import registerLanguageConfigurations from './languages';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    registerLanguageConfigurations();
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let completionJS = vscode.languages.registerCompletionItemProvider({
        scheme: 'file',
        language: 'javascript'
    }, new CompletionJS(), '.');
    let completionRgl = vscode.languages.registerCompletionItemProvider({
        scheme: 'file',
        language: 'regular'
    }, new CompletionJS(), '.');
    let completionHTML = vscode.languages.registerCompletionItemProvider({
        scheme: 'file',
        language: 'html'
    }, new CompletionHTML(), '.');
    vscode.window.showInformationMessage('Regular Extension is Running');

    context.subscriptions.push(completionJS);
    context.subscriptions.push(completionRgl);
    context.subscriptions.push(completionHTML);
}

// this method is called when your extension is deactivated
export function deactivate() {
}