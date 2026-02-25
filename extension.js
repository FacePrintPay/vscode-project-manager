/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/commands/openSettings.ts":
/*!**************************************!*\
  !*** ./src/commands/openSettings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerOpenSettings = void 0;
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const container_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
function openSettings(kind) {
    vscode_1.commands.executeCommand("workbench.action.openSettings", kind ? `projectManager.${kind}` : "projectManager");
}
function registerOpenSettings() {
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("projectManager.openSettings#sideBarFavorites", () => openSettings()));
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("projectManager.openSettings#sideBarVSCode", () => openSettings("vscode")));
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("projectManager.openSettings#sideBarSVN", () => openSettings("svn")));
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("projectManager.openSettings#sideBarGit", () => openSettings("git")));
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("projectManager.openSettings#sideBarAny", () => openSettings("any")));
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("projectManager.openSettings#sideBarMercurial", () => openSettings("hg")));
}
exports.registerOpenSettings = registerOpenSettings;


/***/ }),

/***/ "./src/commands/revealFileInOS.ts":
/*!****************************************!*\
  !*** ./src/commands/revealFileInOS.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerRevealFileInOS = void 0;
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const container_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const remote_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/utils/remote'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
async function revealFileInOS(node) {
    if (!node) {
        return;
    }
    if ((0, remote_1.isRemotePath)(node.command.arguments[0])) {
        const revealApp = remote_1.isWindows ? "Explorer" : remote_1.isMacOS ? "Finder" : "File Manager";
        vscode_1.window.showErrorMessage(vscode_1.l10n.t("Remote projects can't be revealed in {0}", revealApp));
    }
    vscode_1.commands.executeCommand("revealFileInOS", vscode_1.Uri.file(node.command.arguments[0]));
}
function registerRevealFileInOS() {
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("_projectManager.revealInFinder#sideBar", (node) => revealFileInOS(node)));
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("_projectManager.revealInExplorer#sideBar", (node) => revealFileInOS(node)));
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("_projectManager.revealInFileManager#sideBar", (node) => revealFileInOS(node)));
}
exports.registerRevealFileInOS = registerRevealFileInOS;


/***/ }),

/***/ "./src/commands/supportProjectManager.ts":
/*!***********************************************!*\
  !*** ./src/commands/supportProjectManager.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerSupportProjectManager = void 0;
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const container_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
function registerSupportProjectManager() {
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("projectManager.supportProjectManager", async () => {
        const actions = [
            { title: 'Become a Sponsor' },
            { title: 'Donate via PayPal' }
        ];
        const option = await vscode_1.window.showInformationMessage(vscode_1.l10n.t(`While Project Manager is offered for free, if you 
        find it useful, please consider supporting it. Thank you!`), ...actions);
        let uri;
        if (option === actions[0]) {
            uri = vscode_1.Uri.parse('https://github.com/sponsors/alefragnani');
        }
        if (option === actions[1]) {
            uri = vscode_1.Uri.parse('https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=US&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted');
        }
        if (uri) {
            await vscode_1.env.openExternal(uri);
        }
    }));
}
exports.registerSupportProjectManager = registerSupportProjectManager;


/***/ }),

/***/ "./src/commands/walkthrough.ts":
/*!*************************************!*\
  !*** ./src/commands/walkthrough.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*----------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*---------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerWalkthrough = void 0;
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const container_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
function openSideBar() {
    vscode_1.commands.executeCommand("projectsExplorerFavorites.focus");
}
function registerWalkthrough() {
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("_projectManager.openSideBar", () => openSideBar()));
}
exports.registerWalkthrough = registerWalkthrough;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfirmSwitchOnActiveWindowMode = exports.OpenInCurrentWindowIfEmptyMode = exports.CommandLocation = exports.PROJECTS_FILE = void 0;
exports.PROJECTS_FILE = "projects.json";
var CommandLocation;
(function (CommandLocation) {
    CommandLocation[CommandLocation["CommandPalette"] = 0] = "CommandPalette";
    CommandLocation[CommandLocation["SideBar"] = 1] = "SideBar";
    CommandLocation[CommandLocation["StatusBar"] = 2] = "StatusBar";
})(CommandLocation = exports.CommandLocation || (exports.CommandLocation = {}));
var OpenInCurrentWindowIfEmptyMode;
(function (OpenInCurrentWindowIfEmptyMode) {
    OpenInCurrentWindowIfEmptyMode["always"] = "always";
    OpenInCurrentWindowIfEmptyMode["onlyUsingCommandPalette"] = "onlyUsingCommandPalette";
    OpenInCurrentWindowIfEmptyMode["onlyUsingSideBar"] = "onlyUsingSideBar";
    OpenInCurrentWindowIfEmptyMode["never"] = "never";
})(OpenInCurrentWindowIfEmptyMode = exports.OpenInCurrentWindowIfEmptyMode || (exports.OpenInCurrentWindowIfEmptyMode = {}));
var ConfirmSwitchOnActiveWindowMode;
(function (ConfirmSwitchOnActiveWindowMode) {
    ConfirmSwitchOnActiveWindowMode["never"] = "never";
    ConfirmSwitchOnActiveWindowMode["onlyUsingCommandPalette"] = "onlyUsingCommandPalette";
    ConfirmSwitchOnActiveWindowMode["onlyUsingSideBar"] = "onlyUsingSideBar";
    ConfirmSwitchOnActiveWindowMode["always"] = "always";
})(ConfirmSwitchOnActiveWindowMode = exports.ConfirmSwitchOnActiveWindowMode || (exports.ConfirmSwitchOnActiveWindowMode = {}));


/***/ }),

/***/ "./src/quickpick/projectsPicker.ts":
/*!*****************************************!*\
  !*** ./src/quickpick/projectsPicker.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.openPickedProject = exports.canSwitchOnActiveWindow = exports.shouldOpenInNewWindow = exports.pickProjects = void 0;
const fs = __webpack_require__(/*! fs */ "fs");
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const vscode_ext_codicons_1 = __webpack_require__(/*! vscode-ext-codicons */ "./node_modules/vscode-ext-codicons/lib/index.js");
const container_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const path_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/utils/path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const remote_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/utils/remote'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const uri_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/utils/uri'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const constants_1 = __webpack_require__(/*! ../constants */ "./src/constants.ts");
function getProjects(itemsSorted) {
    return new Promise((resolve, reject) => {
        resolve(itemsSorted);
    });
}
function folderNotFound(name, projectStorage) {
    const optionUpdateProject = {
        title: vscode_1.l10n.t("Update Project")
    };
    const optionDeleteProject = {
        title: vscode_1.l10n.t("Delete Project")
    };
    vscode_1.window.showErrorMessage(vscode_1.l10n.t("The project has an invalid path. What would you like to do?"), optionUpdateProject, optionDeleteProject).then(option => {
        // nothing selected
        if (typeof option === "undefined") {
            return;
        }
        if (option.title === vscode_1.l10n.t("Update Project")) {
            vscode_1.commands.executeCommand("projectManager.editProjects");
        }
        else { // Update Project
            projectStorage.pop(name);
            projectStorage.save();
            return;
        }
    });
}
function canPickSelectedProject(item, projectStorage) {
    if ((0, remote_1.isRemotePath)(item.description)) {
        return true;
    }
    if (fs.existsSync(item.description.toString())) {
        return true;
    }
    if (item.label.substr(0, 2) === "$(") {
        vscode_1.window.showErrorMessage(vscode_1.l10n.t("Path does not exist or is unavailable."));
        return false;
    }
    folderNotFound(item.label, projectStorage);
}
function getProjectsFromLocator(folders, locators, locatorToFilter, locatorToGetFrom) {
    if (locatorToFilter && locatorToFilter !== locatorToGetFrom) {
        return folders;
    }
    if (!locators) {
        return folders;
    }
    return locators.getLocatorProjects(folders, locatorToGetFrom);
}
class OpenInNewWindowButton {
    constructor(iconPath, tooltip) {
        this.iconPath = iconPath;
        this.tooltip = tooltip;
    }
}
const openInNewWindowButton = new OpenInNewWindowButton(vscode_ext_codicons_1.ThemeIcons.link_external, vscode_1.l10n.t('Open in New Window'));
async function pickProjects(projectStorage, locators, showOpenInNewWindowButton, locatorToFilter) {
    const disposables = [];
    try {
        return await new Promise((resolve, reject) => {
            let items = [];
            const filterByTags = container_1.Container.context.globalState.get("filterByTags", []);
            if (projectStorage) {
                items = projectStorage.getProjectsByTags(filterByTags);
                if (locators) {
                    items = locators?.sortGroupedList(items);
                }
            }
            getProjects(items)
                .then((folders) => {
                return getProjectsFromLocator(folders, locators, locatorToFilter, locators?.vscLocator);
            })
                .then((folders) => {
                return getProjectsFromLocator(folders, locators, locatorToFilter, locators?.gitLocator);
            })
                .then((folders) => {
                return getProjectsFromLocator(folders, locators, locatorToFilter, locators?.mercurialLocator);
            })
                .then((folders) => {
                return getProjectsFromLocator(folders, locators, locatorToFilter, locators?.svnLocator);
            })
                .then((folders) => {
                return getProjectsFromLocator(folders, locators, locatorToFilter, locators?.anyLocator);
            })
                .then((folders) => {
                if (folders.length === 0) {
                    vscode_1.window.showInformationMessage(vscode_1.l10n.t("No projects saved yet!"));
                    return resolve(undefined);
                }
                else {
                    if (!vscode_1.workspace.getConfiguration("projectManager").get("groupList", false)) {
                        if (locators) {
                            folders = locators?.sortProjectList(folders);
                        }
                    }
                    vscode_1.commands.executeCommand("setContext", "inProjectManagerList", true);
                    //
                    folders = folders.map(folder => {
                        return {
                            label: folder.label,
                            description: folder.description,
                            buttons: showOpenInNewWindowButton ? [openInNewWindowButton] : []
                        };
                    });
                    const input = vscode_1.window.createQuickPick();
                    input.placeholder = vscode_1.l10n.t("Loading projects (pick one)...");
                    input.matchOnDescription = vscode_1.workspace.getConfiguration("projectManager").get("filterOnFullPath", false);
                    input.matchOnDetail = false;
                    input.items = folders;
                    input.onDidChangeSelection(items => {
                        const item = items[0];
                        if (item) {
                            if (!canPickSelectedProject(item, projectStorage)) {
                                resolve(undefined);
                                input.hide();
                                return;
                            }
                            resolve({
                                item: {
                                    name: item.label,
                                    rootPath: path_1.PathUtils.normalizePath(item.description)
                                }, button: undefined
                            });
                            input.hide();
                            return;
                        }
                    }),
                        input.onDidTriggerItemButton(item => {
                            if (item) {
                                if (!canPickSelectedProject(item.item, projectStorage)) {
                                    resolve(undefined);
                                    input.hide();
                                    return;
                                }
                                resolve({
                                    item: {
                                        name: item.item.label,
                                        rootPath: path_1.PathUtils.normalizePath(item.item.description)
                                    }, button: item.button
                                });
                                input.hide();
                                return;
                            }
                        }),
                        input.onDidHide(() => {
                            vscode_1.commands.executeCommand("setContext", "inProjectManagerList", false);
                            resolve(undefined);
                            input.dispose();
                            return;
                        });
                    input.show();
                }
            });
        });
    }
    finally {
        disposables.forEach(d => d.dispose());
    }
}
exports.pickProjects = pickProjects;
function shouldOpenInNewWindow(openInNewWindow, calledFrom) {
    if (!openInNewWindow) {
        return false;
    }
    if (vscode_1.workspace.workspaceFolders || vscode_1.window.activeTextEditor) {
        return openInNewWindow;
    }
    // Check for setting name before and after typo was corrected
    const oldValue = vscode_1.workspace.getConfiguration("projectManager").inspect("openInCurrenWindowIfEmpty");
    const newValue = vscode_1.workspace.getConfiguration("projectManager").inspect("openInCurrentWindowIfEmpty");
    let config;
    if (oldValue.globalValue) {
        config = newValue.globalValue === undefined ? oldValue.globalValue : newValue.globalValue;
    }
    else {
        config = vscode_1.workspace.getConfiguration("projectManager").get("openInCurrentWindowIfEmpty");
    }
    if (config === constants_1.OpenInCurrentWindowIfEmptyMode.always) {
        return false;
    }
    if (config === constants_1.OpenInCurrentWindowIfEmptyMode.never) {
        return openInNewWindow;
    }
    switch (config) {
        case constants_1.OpenInCurrentWindowIfEmptyMode.always:
            return false;
        case constants_1.OpenInCurrentWindowIfEmptyMode.never:
            return openInNewWindow;
        case constants_1.OpenInCurrentWindowIfEmptyMode.onlyUsingCommandPalette:
            return calledFrom !== constants_1.CommandLocation.CommandPalette;
        case constants_1.OpenInCurrentWindowIfEmptyMode.onlyUsingSideBar:
            return calledFrom !== constants_1.CommandLocation.SideBar;
    }
}
exports.shouldOpenInNewWindow = shouldOpenInNewWindow;
function shouldConfirmSwitchOnActiveWindow(calledFrom) {
    if (!vscode_1.workspace.workspaceFolders || !vscode_1.window.activeTextEditor) {
        return false;
    }
    const config = vscode_1.workspace.getConfiguration("projectManager").get("confirmSwitchOnActiveWindow", constants_1.ConfirmSwitchOnActiveWindowMode.never);
    switch (config) {
        case constants_1.ConfirmSwitchOnActiveWindowMode.never:
            return false;
        case constants_1.ConfirmSwitchOnActiveWindowMode.onlyUsingCommandPalette:
            return calledFrom === constants_1.CommandLocation.CommandPalette;
        case constants_1.ConfirmSwitchOnActiveWindowMode.onlyUsingSideBar:
            return calledFrom === constants_1.CommandLocation.SideBar;
        case constants_1.ConfirmSwitchOnActiveWindowMode.always:
            return true;
    }
}
async function canSwitchOnActiveWindow(calledFrom) {
    const showConfirmation = shouldConfirmSwitchOnActiveWindow(calledFrom);
    if (!showConfirmation) {
        return true;
    }
    const optionOpenProject = {
        title: vscode_1.l10n.t("Open Project")
    };
    const answer = await vscode_1.window.showWarningMessage(vscode_1.l10n.t("Do you want to open the project in the active window?"), { modal: true }, optionOpenProject);
    return answer === optionOpenProject;
}
exports.canSwitchOnActiveWindow = canSwitchOnActiveWindow;
async function openPickedProject(picked, forceNewWindow, calledFrom) {
    if (!picked) {
        return;
    }
    if (!picked.button) {
        if (!forceNewWindow && !await canSwitchOnActiveWindow(calledFrom)) {
            return;
        }
    }
    container_1.Container.stack.push(picked.item.name);
    container_1.Container.context.globalState.update("recent", container_1.Container.stack.toString());
    const openInNewWindow = shouldOpenInNewWindow(forceNewWindow || !!picked.button, calledFrom);
    const uri = (0, uri_1.buildProjectUri)(picked.item.rootPath);
    vscode_1.commands.executeCommand("vscode.openFolder", uri, openInNewWindow)
        .then(() => ({}), // done
    () => vscode_1.window.showInformationMessage(vscode_1.l10n.t("Could not open the project!")));
}
exports.openPickedProject = openPickedProject;


/***/ }),

/***/ "./src/sidebar/helpAndFeedbackView.ts":
/*!********************************************!*\
  !*** ./src/sidebar/helpAndFeedbackView.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerHelpAndFeedbackView = void 0;
const vscode_ext_help_and_feedback_view_1 = __webpack_require__(/*! vscode-ext-help-and-feedback-view */ "./node_modules/vscode-ext-help-and-feedback-view/lib/index.js");
function registerHelpAndFeedbackView(context) {
    const items = new Array();
    const predefinedProvider = new vscode_ext_help_and_feedback_view_1.StandardLinksProvider('alefragnani.project-manager');
    items.push(predefinedProvider.getGetStartedLink());
    items.push(new vscode_ext_help_and_feedback_view_1.ProvideFeedbackLink('project-manager'));
    items.push(predefinedProvider.getReviewIssuesLink());
    items.push(predefinedProvider.getReportIssueLink());
    items.push({
        icon: 'heart',
        title: 'Support',
        command: 'projectManager.supportProjectManager'
    });
    new vscode_ext_help_and_feedback_view_1.HelpAndFeedbackView(context, "projectManagerHelpAndFeedback", items);
}
exports.registerHelpAndFeedbackView = registerHelpAndFeedbackView;


/***/ }),

/***/ "./src/statusBar.ts":
/*!**************************!*\
  !*** ./src/statusBar.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateStatusBar = exports.showStatusBar = void 0;
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const vscode_ext_codicons_1 = __webpack_require__(/*! vscode-ext-codicons */ "./node_modules/vscode-ext-codicons/lib/index.js");
const remote_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/utils/remote'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const icons_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let statusItem;
function showStatusBar(projectStorage, locators, projectName) {
    const showStatusConfig = vscode_1.workspace.getConfiguration("projectManager").get("showProjectNameInStatusBar");
    // multi-root - decide do use the "first folder" as the original "rootPath"
    // let currentProjectPath = vscode.workspace.rootPath;
    //   const workspace0 = workspace.workspaceFolders ? workspace.workspaceFolders[0] : undefined;
    //   const currentProjectPath = workspace0 ? workspace0.uri.fsPath : undefined;
    const workspace0 = vscode_1.workspace.workspaceFile ? vscode_1.workspace.workspaceFile :
        vscode_1.workspace.workspaceFolders ? vscode_1.workspace.workspaceFolders[0].uri :
            undefined;
    const currentProjectPath = workspace0 ? workspace0.fsPath : undefined;
    if (!showStatusConfig || !currentProjectPath) {
        return;
    }
    if (!statusItem) {
        statusItem = vscode_1.window.createStatusBarItem("projectManager.statusBar", vscode_1.StatusBarAlignment.Left);
        statusItem.name = "Project Manager";
    }
    statusItem.text = (0, icons_1.getCodiconFromUri)(workspace0) + " ";
    statusItem.tooltip = currentProjectPath;
    const openInNewWindow = vscode_1.workspace.getConfiguration("projectManager").get("openInNewWindowWhenClickingInStatusBar", false);
    if (openInNewWindow) {
        statusItem.command = "projectManager.listProjectsNewWindow";
    }
    else {
        statusItem.command = "projectManager.listProjects";
    }
    // if we have a projectName, we don't need to search.
    if (projectName) {
        statusItem.text += projectName;
        statusItem.show();
        return;
    }
    let foundProject;
    if ((0, remote_1.isRemoteUri)(workspace0)) {
        foundProject = projectStorage.existsRemoteWithRootPath(workspace0);
    }
    else {
        foundProject = projectStorage.existsWithRootPath(currentProjectPath);
        if (!foundProject) {
            foundProject = locators.vscLocator.existsWithRootPath(currentProjectPath);
        }
        if (!foundProject) {
            foundProject = locators.gitLocator.existsWithRootPath(currentProjectPath);
        }
        if (!foundProject) {
            foundProject = locators.mercurialLocator.existsWithRootPath(currentProjectPath);
        }
        if (!foundProject) {
            foundProject = locators.svnLocator.existsWithRootPath(currentProjectPath);
        }
        if (!foundProject) {
            foundProject = locators.anyLocator.existsWithRootPath(currentProjectPath);
        }
    }
    if (foundProject) {
        statusItem.text += foundProject.name;
        statusItem.show();
    }
}
exports.showStatusBar = showStatusBar;
function updateStatusBar(oldName, oldPath, newName) {
    if (statusItem.text === vscode_ext_codicons_1.codicons.file_directory + " " + oldName && statusItem.tooltip === oldPath) {
        statusItem.text = vscode_ext_codicons_1.codicons.file_directory + " " + newName;
    }
}
exports.updateStatusBar = updateStatusBar;


/***/ }),

/***/ "./src/whats-new/commands.ts":
/*!***********************************!*\
  !*** ./src/whats-new/commands.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerWhatsNew = void 0;
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const container_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-project-manager-core/src/container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const Manager_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-whats-new/src/Manager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const contentProvider_1 = __webpack_require__(/*! ./contentProvider */ "./src/whats-new/contentProvider.ts");
function registerWhatsNew() {
    const provider = new contentProvider_1.ProjectManagerContentProvider();
    const viewer = new Manager_1.WhatsNewManager(container_1.Container.context)
        .registerContentProvider("alefragnani", "project-manager", provider)
        .registerSocialMediaProvider(new contentProvider_1.ProjectManagerSocialMediaProvider())
        .registerSponsorProvider(new contentProvider_1.ProjectManagerSponsorProvider());
    viewer.showPageInActivation();
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("projectManager.whatsNew", () => viewer.showPage()));
    container_1.Container.context.subscriptions.push(vscode_1.commands.registerCommand("_projectManager.whatsNewContextMenu", () => viewer.showPage()));
}
exports.registerWhatsNew = registerWhatsNew;


/***/ }),

/***/ "./src/whats-new/contentProvider.ts":
/*!******************************************!*\
  !*** ./src/whats-new/contentProvider.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectManagerSocialMediaProvider = exports.ProjectManagerSponsorProvider = exports.ProjectManagerContentProvider = void 0;
// tslint:disable-next-line:max-line-length
const ContentProvider_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../vscode-whats-new/src/ContentProvider'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
class ProjectManagerContentProvider {
    provideHeader(logoUrl) {
        return { logo: { src: logoUrl, height: 50, width: 50 },
            message: `<b>Project Manager</b> helps you to easily access your <b>projects</b>,
            no matter where they are located. <i>Don't miss those important projects anymore</i>.
            <br><br>You can define your own <b>Projects</b> (also called <b>Favorites</b>), or choose 
            for auto-detect <b>Git</b>, <b>Mercurial</b> or <b>SVN</b> repositories, <b>VSCode</b> 
            folders or <b>any</b> other folder.` };
    }
    provideChangeLog() {
        const changeLog = [];
        changeLog.push({ kind: ContentProvider_1.ChangeLogKind.VERSION, detail: { releaseNumber: "12.7.0", releaseDate: "August 2022" } });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Improve <b>List</b> performance",
                id: 628,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Filter project in Activity Bar",
                id: 213,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Accept case changes during project rename",
                id: 622,
                kind: ContentProvider_1.IssueKind.PR,
                kudos: "@gdh1995"
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.FIXED,
            detail: {
                message: "Wrong description for <b>File Manager</b> in Linux",
                id: 618,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.FIXED,
            detail: {
                message: "Projects not being auto-detected if cache is false",
                id: 448,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.INTERNAL,
            detail: {
                message: "Improve extension startup",
                id: 625,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({ kind: ContentProvider_1.ChangeLogKind.VERSION, detail: { releaseNumber: "12.6.1", releaseDate: "June 2022" } });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.INTERNAL,
            detail: "Add <b>GitHub Sponsors</b> support"
        });
        changeLog.push({ kind: ContentProvider_1.ChangeLogKind.VERSION, detail: { releaseNumber: "12.6.0", releaseDate: "May 2022" } });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Setting to decide if switching projects on same window should ask for confirmation",
                id: 346,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "<b>Open in New Window</b> button in Project List picker",
                id: 570,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Support Settings Categories API",
                id: 554,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.FIXED,
            detail: {
                message: "Typo in <b>openInCurrenWindowIfEmpty</b> setting",
                id: 587,
                kind: ContentProvider_1.IssueKind.PR,
                kudos: "@apettenati"
            }
        });
        changeLog.push({ kind: ContentProvider_1.ChangeLogKind.VERSION, detail: { releaseNumber: "12.5.0", releaseDate: "January 2022" } });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "New setting to support symlinks on baseFolder setting",
                id: 583,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Support new MacOS File Menu API",
                id: 555,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Support new createStatusBarItem API",
                id: 521,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.CHANGED,
            detail: {
                message: "Remove watchFile interval",
                id: 575,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.INTERNAL,
            detail: "<b>Duckly</b> becomes a Sponsor"
        });
        changeLog.push({ kind: ContentProvider_1.ChangeLogKind.VERSION, detail: { releaseNumber: "12.4.0", releaseDate: "August 2021" } });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Adds <b>View as</b> option to Favorites View",
                id: 484,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Adds <b>Sort by</b> option to Favorites View",
                id: 484,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.NEW,
            detail: {
                message: "Adds setting to display the parent folder on duplicate (same-name) projects",
                id: 306,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.CHANGED,
            detail: {
                message: "Side Bar tooltips now in Markdown",
                id: 540,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.CHANGED,
            detail: {
                message: "Side Bar following <b>sortList</b> setting",
                id: 366,
                kind: ContentProvider_1.IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ContentProvider_1.ChangeLogKind.FIXED,
            detail: {
                message: "Typos in README",
                id: 532,
                kind: ContentProvider_1.IssueKind.PR,
                kudos: "@kant"
            }
        });
        return changeLog;
    }
    provideSupportChannels() {
        const supportChannels = [];
        supportChannels.push({
            title: "Become a sponsor on GitHub",
            link: "https://www.github.com/sponsors/alefragnani",
            message: "Become a Sponsor"
        });
        supportChannels.push({
            title: "Donate via PayPal",
            link: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=US&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted",
            message: "Donate via PayPal"
        });
        return supportChannels;
    }
}
exports.ProjectManagerContentProvider = ProjectManagerContentProvider;
class ProjectManagerSponsorProvider {
    provideSponsors() {
        const sponsors = [];
        const sponsorCodeStream = {
            title: "Learn more about CodeStream",
            link: "https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=projectmanager&utm_medium=banner",
            image: {
                dark: "https://alt-images.codestream.com/codestream_logo_projectmanager.png",
                light: "https://alt-images.codestream.com/codestream_logo_projectmanager.png"
            },
            width: 35,
            message: `<p>Eliminate context switching and costly distractions. 
                Create and merge PRs and perform code reviews from inside your 
                IDE while using jump-to-definition, your keybindings, and other IDE favorites.</p>`,
            extra: `<a title="Learn more about CodeStream" href="https://sponsorlink.codestream.com/?utm_source=vscmarket&utm_campaign=projectmanager&utm_medium=banner">
                 Learn more</a>`
        };
        sponsors.push(sponsorCodeStream);
        return sponsors;
    }
}
exports.ProjectManagerSponsorProvider = ProjectManagerSponsorProvider;
class ProjectManagerSocialMediaProvider {
    provideSocialMedias() {
        return [{
                title: "Follow me on Twitter",
                link: "https://www.twitter.com/alefragnani"
            }];
    }
}
exports.ProjectManagerSocialMediaProvider = ProjectManagerSocialMediaProvider;


/***/ }),

/***/ "./node_modules/vscode-ext-codicons/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vscode-ext-codicons/lib/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.codicons = exports.ThemeIcons = void 0;
var vscode_1 = __webpack_require__(/*! vscode */ "vscode");
var ThemeIcons = {
    account: new vscode_1.ThemeIcon('account'),
    activate_breakpoints: new vscode_1.ThemeIcon('activate-breakpoints'),
    add: new vscode_1.ThemeIcon('add'),
    alert: new vscode_1.ThemeIcon('alert'),
    archive: new vscode_1.ThemeIcon('archive'),
    array: new vscode_1.ThemeIcon('array'),
    arrow_both: new vscode_1.ThemeIcon('arrow-both'),
    arrow_down: new vscode_1.ThemeIcon('arrow-down'),
    arrow_left: new vscode_1.ThemeIcon('arrow-left'),
    arrow_right: new vscode_1.ThemeIcon('arrow-right'),
    arrow_small_down: new vscode_1.ThemeIcon('arrow-small-down'),
    arrow_small_left: new vscode_1.ThemeIcon('arrow-small-left'),
    arrow_small_right: new vscode_1.ThemeIcon('arrow-small-right'),
    arrow_small_up: new vscode_1.ThemeIcon('arrow-small-up'),
    arrow_swap: new vscode_1.ThemeIcon('arrow-swap'),
    arrow_up: new vscode_1.ThemeIcon('arrow-up'),
    beaker: new vscode_1.ThemeIcon('beaker'),
    bell_dot: new vscode_1.ThemeIcon('bell-dot'),
    bell: new vscode_1.ThemeIcon('bell'),
    bold: new vscode_1.ThemeIcon('bold'),
    book: new vscode_1.ThemeIcon('book'),
    bookmark: new vscode_1.ThemeIcon('bookmark'),
    briefcase: new vscode_1.ThemeIcon('briefcase'),
    broadcast: new vscode_1.ThemeIcon('broadcast'),
    browser: new vscode_1.ThemeIcon('browser'),
    bug: new vscode_1.ThemeIcon('bug'),
    calendar: new vscode_1.ThemeIcon('calendar'),
    call_incoming: new vscode_1.ThemeIcon('call-incoming'),
    call_outgoing: new vscode_1.ThemeIcon('call-outgoing'),
    case_sensitive: new vscode_1.ThemeIcon('case-sensitive'),
    check: new vscode_1.ThemeIcon('check'),
    check_all: new vscode_1.ThemeIcon('check-all'),
    checklist: new vscode_1.ThemeIcon('checklist'),
    chevron_down: new vscode_1.ThemeIcon('chevron-down'),
    chevron_left: new vscode_1.ThemeIcon('chevron-left'),
    chevron_right: new vscode_1.ThemeIcon('chevron-right'),
    chevron_up: new vscode_1.ThemeIcon('chevron-up'),
    chrome_close: new vscode_1.ThemeIcon('chrome-close'),
    chrome_maximize: new vscode_1.ThemeIcon('chrome-maximize'),
    chrome_minimize: new vscode_1.ThemeIcon('chrome-minimize'),
    chrome_restore: new vscode_1.ThemeIcon('chrome-restore'),
    circle_filled: new vscode_1.ThemeIcon('circle-filled'),
    circle_outline: new vscode_1.ThemeIcon('circle-outline'),
    circle_slash: new vscode_1.ThemeIcon('circle-slash'),
    circle_large_filled: new vscode_1.ThemeIcon('circle-large-filled'),
    circle_large_outline: new vscode_1.ThemeIcon('circle-large-outline'),
    circuit_board: new vscode_1.ThemeIcon('circuit-board'),
    clear_all: new vscode_1.ThemeIcon('clear-all'),
    clippy: new vscode_1.ThemeIcon('clippy'),
    clock: new vscode_1.ThemeIcon('clock'),
    clone: new vscode_1.ThemeIcon('clone'),
    close_all: new vscode_1.ThemeIcon('close-all'),
    close_dirty: new vscode_1.ThemeIcon('close-dirty'),
    close: new vscode_1.ThemeIcon('close'),
    cloud: new vscode_1.ThemeIcon('cloud'),
    cloud_download: new vscode_1.ThemeIcon('cloud-download'),
    cloud_upload: new vscode_1.ThemeIcon('cloud-upload'),
    copy: new vscode_1.ThemeIcon('copy'),
    code: new vscode_1.ThemeIcon('code'),
    combine: new vscode_1.ThemeIcon('combine'),
    collapse_all: new vscode_1.ThemeIcon('collapse-all'),
    color_mode: new vscode_1.ThemeIcon('color-mode'),
    comment_add: new vscode_1.ThemeIcon('comment-add'),
    comment_discussion: new vscode_1.ThemeIcon('comment-discussion'),
    comment: new vscode_1.ThemeIcon('comment'),
    console: new vscode_1.ThemeIcon('console'),
    credit_card: new vscode_1.ThemeIcon('credit-card'),
    dash: new vscode_1.ThemeIcon('dash'),
    dashboard: new vscode_1.ThemeIcon('dashboard'),
    database: new vscode_1.ThemeIcon('database'),
    debug_alt: new vscode_1.ThemeIcon('debug-alt'),
    debug_alt_small: new vscode_1.ThemeIcon('debug-alt-small'),
    debug_breakpoint_conditional_unverified: new vscode_1.ThemeIcon('debug-breakpoint-conditional-unverified'),
    debug_breakpoint_conditional: new vscode_1.ThemeIcon('debug-breakpoint-conditional'),
    debug_breakpoint_data_unverified: new vscode_1.ThemeIcon('debug-breakpoint-data-unverified'),
    debug_breakpoint_data: new vscode_1.ThemeIcon('debug-breakpoint-data'),
    debug_breakpoint_disabled: new vscode_1.ThemeIcon('debug-breakpoint-disabled'),
    debug_breakpoint_function_unverified: new vscode_1.ThemeIcon('debug-breakpoint-function-unverified'),
    debug_breakpoint_function: new vscode_1.ThemeIcon('debug-breakpoint-function'),
    debug_breakpoint_log_unverified: new vscode_1.ThemeIcon('debug-breakpoint-log-unverified'),
    debug_breakpoint_log: new vscode_1.ThemeIcon('debug-breakpoint-log'),
    debug_breakpoint_unsupported: new vscode_1.ThemeIcon('debug-breakpoint-unsupported'),
    debug_breakpoint: new vscode_1.ThemeIcon('debug-breakpoint'),
    debug_console: new vscode_1.ThemeIcon('debug-console'),
    debug_continue: new vscode_1.ThemeIcon('debug-continue'),
    debug_disconnect: new vscode_1.ThemeIcon('debug-disconnect'),
    debug_hint: new vscode_1.ThemeIcon('debug-hint'),
    debug_line_by_line: new vscode_1.ThemeIcon('debug-line-by-line'),
    debug_pause: new vscode_1.ThemeIcon('debug-pause'),
    debug_restart_frame: new vscode_1.ThemeIcon('debug-restart-frame'),
    debug_restart: new vscode_1.ThemeIcon('debug-restart'),
    debug_reverse_continue: new vscode_1.ThemeIcon('debug-reverse-continue'),
    debug_rerun: new vscode_1.ThemeIcon('debug-rerun'),
    debug_stackframe_active: new vscode_1.ThemeIcon('debug-stackframe-active'),
    debug_stackframe_dot: new vscode_1.ThemeIcon('debug-stackframe-dot'),
    debug_stackframe: new vscode_1.ThemeIcon('debug-stackframe'),
    debug_start: new vscode_1.ThemeIcon('debug-start'),
    debug_step_back: new vscode_1.ThemeIcon('debug-step-back'),
    debug_step_into: new vscode_1.ThemeIcon('debug-step-into'),
    debug_step_out: new vscode_1.ThemeIcon('debug-step-out'),
    debug_step_over: new vscode_1.ThemeIcon('debug-step-over'),
    debug_stop: new vscode_1.ThemeIcon('debug-stop'),
    debug: new vscode_1.ThemeIcon('debug'),
    desktop_download: new vscode_1.ThemeIcon('desktop-download'),
    device_camera_video: new vscode_1.ThemeIcon('device-camera-video'),
    device_camera: new vscode_1.ThemeIcon('device-camera'),
    device_desktop: new vscode_1.ThemeIcon('device-desktop'),
    device_mobile: new vscode_1.ThemeIcon('device-mobile'),
    diff_added: new vscode_1.ThemeIcon('diff-added'),
    diff_ignored: new vscode_1.ThemeIcon('diff-ignored'),
    diff_modified: new vscode_1.ThemeIcon('diff-modified'),
    diff_removed: new vscode_1.ThemeIcon('diff-removed'),
    diff_renamed: new vscode_1.ThemeIcon('diff-renamed'),
    diff: new vscode_1.ThemeIcon('diff'),
    discard: new vscode_1.ThemeIcon('discard'),
    edit: new vscode_1.ThemeIcon('edit'),
    editor_layout: new vscode_1.ThemeIcon('editor-layout'),
    ellipsis: new vscode_1.ThemeIcon('ellipsis'),
    empty_window: new vscode_1.ThemeIcon('empty-window'),
    error: new vscode_1.ThemeIcon('error'),
    exclude: new vscode_1.ThemeIcon('exclude'),
    expand_all: new vscode_1.ThemeIcon('expand-all'),
    export: new vscode_1.ThemeIcon('export'),
    extensions: new vscode_1.ThemeIcon('extensions'),
    eye_closed: new vscode_1.ThemeIcon('eye-closed'),
    eye_unwatch: new vscode_1.ThemeIcon('eye-unwatch'),
    eye_watch: new vscode_1.ThemeIcon('eye-watch'),
    eye: new vscode_1.ThemeIcon('eye'),
    feedback: new vscode_1.ThemeIcon('feedback'),
    file_add: new vscode_1.ThemeIcon('file-add'),
    file_binary: new vscode_1.ThemeIcon('file-binary'),
    file_code: new vscode_1.ThemeIcon('file-code'),
    file_directory_create: new vscode_1.ThemeIcon('file-directory-create'),
    file_directory: new vscode_1.ThemeIcon('file-directory'),
    file_media: new vscode_1.ThemeIcon('file-media'),
    file_pdf: new vscode_1.ThemeIcon('file-pdf'),
    file_submodule: new vscode_1.ThemeIcon('file-submodule'),
    file_symlink_directory: new vscode_1.ThemeIcon('file-symlink-directory'),
    file_symlink_file: new vscode_1.ThemeIcon('file-symlink-file'),
    file_text: new vscode_1.ThemeIcon('file-text'),
    file_zip: new vscode_1.ThemeIcon('file-zip'),
    file: new vscode_1.ThemeIcon('file'),
    files: new vscode_1.ThemeIcon('files'),
    filter: new vscode_1.ThemeIcon('filter'),
    filter_filled: new vscode_1.ThemeIcon('filter-filled'),
    flame: new vscode_1.ThemeIcon('flame'),
    fold_down: new vscode_1.ThemeIcon('fold-down'),
    fold_up: new vscode_1.ThemeIcon('fold-up'),
    fold: new vscode_1.ThemeIcon('fold'),
    folder_active: new vscode_1.ThemeIcon('folder-active'),
    folder_opened: new vscode_1.ThemeIcon('folder-opened'),
    folder: new vscode_1.ThemeIcon('folder'),
    gather: new vscode_1.ThemeIcon('gather'),
    gear: new vscode_1.ThemeIcon('gear'),
    gift: new vscode_1.ThemeIcon('gift'),
    gist_fork_private: new vscode_1.ThemeIcon('gist-fork-private'),
    gist_fork: new vscode_1.ThemeIcon('gist-fork'),
    gist_new: new vscode_1.ThemeIcon('gist-new'),
    gist_private: new vscode_1.ThemeIcon('gist-private'),
    gist_secret: new vscode_1.ThemeIcon('gist-secret'),
    gist: new vscode_1.ThemeIcon('gist'),
    git_branch_create: new vscode_1.ThemeIcon('git-branch-create'),
    git_branch_delete: new vscode_1.ThemeIcon('git-branch-delete'),
    git_branch: new vscode_1.ThemeIcon('git-branch'),
    git_commit: new vscode_1.ThemeIcon('git-commit'),
    git_compare: new vscode_1.ThemeIcon('git-compare'),
    git_merge: new vscode_1.ThemeIcon('git-merge'),
    git_pull_request: new vscode_1.ThemeIcon('git-pull-request'),
    git_pull_request_create: new vscode_1.ThemeIcon('git-pull-request-create'),
    github_action: new vscode_1.ThemeIcon('github-action'),
    github_alt: new vscode_1.ThemeIcon('github-alt'),
    github_inverted: new vscode_1.ThemeIcon('github-inverted'),
    github: new vscode_1.ThemeIcon('github'),
    globe: new vscode_1.ThemeIcon('globe'),
    go_to_file: new vscode_1.ThemeIcon('go-to-file'),
    grabber: new vscode_1.ThemeIcon('grabber'),
    graph: new vscode_1.ThemeIcon('graph'),
    graph_left: new vscode_1.ThemeIcon('graph-left'),
    gripper: new vscode_1.ThemeIcon('gripper'),
    group_by_ref_type: new vscode_1.ThemeIcon('group-by-ref-type'),
    heart: new vscode_1.ThemeIcon('heart'),
    history: new vscode_1.ThemeIcon('history'),
    home: new vscode_1.ThemeIcon('home'),
    horizontal_rule: new vscode_1.ThemeIcon('horizontal-rule'),
    hubot: new vscode_1.ThemeIcon('hubot'),
    inbox: new vscode_1.ThemeIcon('inbox'),
    info: new vscode_1.ThemeIcon('info'),
    issue_closed: new vscode_1.ThemeIcon('issue-closed'),
    issue_opened: new vscode_1.ThemeIcon('issue-opened'),
    issue_reopened: new vscode_1.ThemeIcon('issue-reopened'),
    issues: new vscode_1.ThemeIcon('issues'),
    italic: new vscode_1.ThemeIcon('italic'),
    jersey: new vscode_1.ThemeIcon('jersey'),
    json: new vscode_1.ThemeIcon('json'),
    kebab_horizontal: new vscode_1.ThemeIcon('kebab-horizontal'),
    kebab_vertical: new vscode_1.ThemeIcon('kebab-vertical'),
    key: new vscode_1.ThemeIcon('key'),
    keyboard: new vscode_1.ThemeIcon('keyboard'),
    law: new vscode_1.ThemeIcon('law'),
    library: new vscode_1.ThemeIcon('library'),
    light_bulb: new vscode_1.ThemeIcon('light-bulb'),
    lightbulb_autofix: new vscode_1.ThemeIcon('lightbulb-autofix'),
    lightbulb: new vscode_1.ThemeIcon('lightbulb'),
    link_external: new vscode_1.ThemeIcon('link-external'),
    link: new vscode_1.ThemeIcon('link'),
    list_filter: new vscode_1.ThemeIcon('list-filter'),
    list_flat: new vscode_1.ThemeIcon('list-flat'),
    list_ordered: new vscode_1.ThemeIcon('list-ordered'),
    list_selection: new vscode_1.ThemeIcon('list-selection'),
    list_tree: new vscode_1.ThemeIcon('list-tree'),
    list_unordered: new vscode_1.ThemeIcon('list-unordered'),
    live_share: new vscode_1.ThemeIcon('live-share'),
    loading: new vscode_1.ThemeIcon('loading'),
    location: new vscode_1.ThemeIcon('location'),
    lock: new vscode_1.ThemeIcon('lock'),
    log_in: new vscode_1.ThemeIcon('log-in'),
    log_out: new vscode_1.ThemeIcon('log-out'),
    logo_github: new vscode_1.ThemeIcon('logo-github'),
    magnet: new vscode_1.ThemeIcon('magnet'),
    mail_read: new vscode_1.ThemeIcon('mail-read'),
    mail_reply: new vscode_1.ThemeIcon('mail-reply'),
    mail: new vscode_1.ThemeIcon('mail'),
    mark_github: new vscode_1.ThemeIcon('mark-github'),
    markdown: new vscode_1.ThemeIcon('markdown'),
    megaphone: new vscode_1.ThemeIcon('megaphone'),
    mention: new vscode_1.ThemeIcon('mention'),
    menu: new vscode_1.ThemeIcon('menu'),
    merge: new vscode_1.ThemeIcon('merge'),
    microscope: new vscode_1.ThemeIcon('microscope'),
    milestone: new vscode_1.ThemeIcon('milestone'),
    mirror_private: new vscode_1.ThemeIcon('mirror-private'),
    mirror_public: new vscode_1.ThemeIcon('mirror-public'),
    mirror: new vscode_1.ThemeIcon('mirror'),
    more: new vscode_1.ThemeIcon('more'),
    mortar_board: new vscode_1.ThemeIcon('mortar-board'),
    move: new vscode_1.ThemeIcon('move'),
    multiple_windows: new vscode_1.ThemeIcon('multiple-windows'),
    mute: new vscode_1.ThemeIcon('mute'),
    new_file: new vscode_1.ThemeIcon('new-file'),
    new_folder: new vscode_1.ThemeIcon('new-folder'),
    no_newline: new vscode_1.ThemeIcon('no-newline'),
    note: new vscode_1.ThemeIcon('note'),
    notebook: new vscode_1.ThemeIcon('notebook'),
    notebook_template: new vscode_1.ThemeIcon('notebook-template'),
    octoface: new vscode_1.ThemeIcon('octoface'),
    open_preview: new vscode_1.ThemeIcon('open-preview'),
    organization_filled: new vscode_1.ThemeIcon('organization-filled'),
    organization_outline: new vscode_1.ThemeIcon('organization-outline'),
    organization: new vscode_1.ThemeIcon('organization'),
    output: new vscode_1.ThemeIcon('output'),
    package: new vscode_1.ThemeIcon('package'),
    paintcan: new vscode_1.ThemeIcon('paintcan'),
    pass: new vscode_1.ThemeIcon('pass'),
    pass_filled: new vscode_1.ThemeIcon('pass-filled'),
    pencil: new vscode_1.ThemeIcon('pencil'),
    person_add: new vscode_1.ThemeIcon('person-add'),
    person_filled: new vscode_1.ThemeIcon('person-filled'),
    person_follow: new vscode_1.ThemeIcon('person-follow'),
    person_outline: new vscode_1.ThemeIcon('person-outline'),
    person: new vscode_1.ThemeIcon('person'),
    pin: new vscode_1.ThemeIcon('pin'),
    pinned: new vscode_1.ThemeIcon('pinned'),
    pinned_dirty: new vscode_1.ThemeIcon('pinned-dirty'),
    play_circle: new vscode_1.ThemeIcon('play-circle'),
    play: new vscode_1.ThemeIcon('play'),
    plug: new vscode_1.ThemeIcon('plug'),
    plus: new vscode_1.ThemeIcon('plus'),
    preserve_case: new vscode_1.ThemeIcon('preserve-case'),
    preview: new vscode_1.ThemeIcon('preview'),
    primitive_dot: new vscode_1.ThemeIcon('primitive-dot'),
    primitive_square: new vscode_1.ThemeIcon('primitive-square'),
    project: new vscode_1.ThemeIcon('project'),
    pulse: new vscode_1.ThemeIcon('pulse'),
    question: new vscode_1.ThemeIcon('question'),
    quote: new vscode_1.ThemeIcon('quote'),
    radio_tower: new vscode_1.ThemeIcon('radio-tower'),
    reactions: new vscode_1.ThemeIcon('reactions'),
    record_keys: new vscode_1.ThemeIcon('record-keys'),
    record: new vscode_1.ThemeIcon('record'),
    redo: new vscode_1.ThemeIcon('redo'),
    references: new vscode_1.ThemeIcon('references'),
    refresh: new vscode_1.ThemeIcon('refresh'),
    regex: new vscode_1.ThemeIcon('regex'),
    remote_explorer: new vscode_1.ThemeIcon('remote-explorer'),
    remote: new vscode_1.ThemeIcon('remote'),
    remove_close: new vscode_1.ThemeIcon('remove-close'),
    remove: new vscode_1.ThemeIcon('remove'),
    repl: new vscode_1.ThemeIcon('repl'),
    replace_all: new vscode_1.ThemeIcon('replace-all'),
    replace: new vscode_1.ThemeIcon('replace'),
    reply: new vscode_1.ThemeIcon('reply'),
    repo_clone: new vscode_1.ThemeIcon('repo-clone'),
    repo_create: new vscode_1.ThemeIcon('repo-create'),
    repo_delete: new vscode_1.ThemeIcon('repo-delete'),
    repo_force_push: new vscode_1.ThemeIcon('repo-force-push'),
    repo_forked: new vscode_1.ThemeIcon('repo-forked'),
    repo_pull: new vscode_1.ThemeIcon('repo-pull'),
    repo_push: new vscode_1.ThemeIcon('repo-push'),
    repo_sync: new vscode_1.ThemeIcon('repo-sync'),
    repo: new vscode_1.ThemeIcon('repo'),
    report: new vscode_1.ThemeIcon('report'),
    request_changes: new vscode_1.ThemeIcon('request-changes'),
    rocket: new vscode_1.ThemeIcon('rocket'),
    root_folder_opened: new vscode_1.ThemeIcon('root-folder-opened'),
    root_folder: new vscode_1.ThemeIcon('root-folder'),
    rss: new vscode_1.ThemeIcon('rss'),
    ruby: new vscode_1.ThemeIcon('ruby'),
    run_above: new vscode_1.ThemeIcon('run-above'),
    run_all: new vscode_1.ThemeIcon('run-all'),
    run_below: new vscode_1.ThemeIcon('run-below'),
    save_all: new vscode_1.ThemeIcon('save-all'),
    save_as: new vscode_1.ThemeIcon('save-as'),
    save: new vscode_1.ThemeIcon('save'),
    screen_full: new vscode_1.ThemeIcon('screen-full'),
    screen_normal: new vscode_1.ThemeIcon('screen-normal'),
    search_save: new vscode_1.ThemeIcon('search-save'),
    search_stop: new vscode_1.ThemeIcon('search-stop'),
    search: new vscode_1.ThemeIcon('search'),
    server_environment: new vscode_1.ThemeIcon('server-environment'),
    server_process: new vscode_1.ThemeIcon('server-process'),
    server: new vscode_1.ThemeIcon('server'),
    settings_gear: new vscode_1.ThemeIcon('settings-gear'),
    settings: new vscode_1.ThemeIcon('settings'),
    shield: new vscode_1.ThemeIcon('shield'),
    sign_in: new vscode_1.ThemeIcon('sign-in'),
    sign_out: new vscode_1.ThemeIcon('sign-out'),
    smiley: new vscode_1.ThemeIcon('smiley'),
    sort_precedence: new vscode_1.ThemeIcon('sort-precedence'),
    source_control: new vscode_1.ThemeIcon('source-control'),
    split_horizontal: new vscode_1.ThemeIcon('split-horizontal'),
    split_vertical: new vscode_1.ThemeIcon('split-vertical'),
    squirrel: new vscode_1.ThemeIcon('squirrel'),
    star_empty: new vscode_1.ThemeIcon('star-empty'),
    star_full: new vscode_1.ThemeIcon('star-full'),
    star_half: new vscode_1.ThemeIcon('star-half'),
    star: new vscode_1.ThemeIcon('star'),
    stop_circle: new vscode_1.ThemeIcon('stop-circle'),
    stop: new vscode_1.ThemeIcon('stop'),
    symbol_array: new vscode_1.ThemeIcon('symbol-array'),
    symbol_boolean: new vscode_1.ThemeIcon('symbol-boolean'),
    symbol_class: new vscode_1.ThemeIcon('symbol-class'),
    symbol_color: new vscode_1.ThemeIcon('symbol-color'),
    symbol_constant: new vscode_1.ThemeIcon('symbol-constant'),
    symbol_constructor: new vscode_1.ThemeIcon('symbol-constructor'),
    symbol_enum_member: new vscode_1.ThemeIcon('symbol-enum-member'),
    symbol_enum: new vscode_1.ThemeIcon('symbol-enum'),
    symbol_event: new vscode_1.ThemeIcon('symbol-event'),
    symbol_field: new vscode_1.ThemeIcon('symbol-field'),
    symbol_file: new vscode_1.ThemeIcon('symbol-file'),
    symbol_folder: new vscode_1.ThemeIcon('symbol-folder'),
    symbol_function: new vscode_1.ThemeIcon('symbol-function'),
    symbol_interface: new vscode_1.ThemeIcon('symbol-interface'),
    symbol_key: new vscode_1.ThemeIcon('symbol-key'),
    symbol_keyword: new vscode_1.ThemeIcon('symbol-keyword'),
    symbol_method: new vscode_1.ThemeIcon('symbol-method'),
    symbol_misc: new vscode_1.ThemeIcon('symbol-misc'),
    symbol_module: new vscode_1.ThemeIcon('symbol-module'),
    symbol_namespace: new vscode_1.ThemeIcon('symbol-namespace'),
    symbol_null: new vscode_1.ThemeIcon('symbol-null'),
    symbol_number: new vscode_1.ThemeIcon('symbol-number'),
    symbol_numeric: new vscode_1.ThemeIcon('symbol-numeric'),
    symbol_object: new vscode_1.ThemeIcon('symbol-object'),
    symbol_operator: new vscode_1.ThemeIcon('symbol-operator'),
    symbol_package: new vscode_1.ThemeIcon('symbol-package'),
    symbol_parameter: new vscode_1.ThemeIcon('symbol-parameter'),
    symbol_property: new vscode_1.ThemeIcon('symbol-property'),
    symbol_reference: new vscode_1.ThemeIcon('symbol-reference'),
    symbol_ruler: new vscode_1.ThemeIcon('symbol-ruler'),
    symbol_snippet: new vscode_1.ThemeIcon('symbol-snippet'),
    symbol_string: new vscode_1.ThemeIcon('symbol-string'),
    symbol_struct: new vscode_1.ThemeIcon('symbol-struct'),
    symbol_structure: new vscode_1.ThemeIcon('symbol-structure'),
    symbol_text: new vscode_1.ThemeIcon('symbol-text'),
    symbol_type_parameter: new vscode_1.ThemeIcon('symbol-type_parameter'),
    symbol_unit: new vscode_1.ThemeIcon('symbol-unit'),
    symbol_value: new vscode_1.ThemeIcon('symbol-value'),
    symbol_variable: new vscode_1.ThemeIcon('symbol-variable'),
    sync_ignored: new vscode_1.ThemeIcon('sync-ignored'),
    sync: new vscode_1.ThemeIcon('sync'),
    table: new vscode_1.ThemeIcon('table'),
    tag_add: new vscode_1.ThemeIcon('tag-add'),
    tag_remove: new vscode_1.ThemeIcon('tag-remove'),
    tag: new vscode_1.ThemeIcon('tag'),
    tasklist: new vscode_1.ThemeIcon('tasklist'),
    telescope: new vscode_1.ThemeIcon('telescope'),
    terminal: new vscode_1.ThemeIcon('terminal'),
    terminal_cmd: new vscode_1.ThemeIcon('terminal-cmd'),
    terminal_debian: new vscode_1.ThemeIcon('terminal-debian'),
    terminal_linux: new vscode_1.ThemeIcon('terminal-linux'),
    terminal_powershell: new vscode_1.ThemeIcon('terminal-powershell'),
    terminal_tmux: new vscode_1.ThemeIcon('terminal-tmux'),
    terminal_ubuntu: new vscode_1.ThemeIcon('terminal-ubuntu'),
    terminal_bash: new vscode_1.ThemeIcon('terminal-bash'),
    text_size: new vscode_1.ThemeIcon('text-size'),
    three_bars: new vscode_1.ThemeIcon('three-bars'),
    thumbsdown: new vscode_1.ThemeIcon('thumbsdown'),
    thumbsup: new vscode_1.ThemeIcon('thumbsup'),
    tools: new vscode_1.ThemeIcon('tools'),
    trash: new vscode_1.ThemeIcon('trash'),
    trashcan: new vscode_1.ThemeIcon('trashcan'),
    triangle_down: new vscode_1.ThemeIcon('triangle-down'),
    triangle_left: new vscode_1.ThemeIcon('triangle-left'),
    triangle_right: new vscode_1.ThemeIcon('triangle-right'),
    triangle_up: new vscode_1.ThemeIcon('triangle-up'),
    type_hierarchy: new vscode_1.ThemeIcon('type-hierarchy'),
    type_hierarchy_sub: new vscode_1.ThemeIcon('type-hierarchy-sub'),
    type_hierarchy_super: new vscode_1.ThemeIcon('type-hierarchy-super'),
    twitter: new vscode_1.ThemeIcon('twitter'),
    unfold: new vscode_1.ThemeIcon('unfold'),
    ungroup_by_ref_type: new vscode_1.ThemeIcon('ungroup-by-ref-type'),
    unlock: new vscode_1.ThemeIcon('unlock'),
    unmute: new vscode_1.ThemeIcon('unmute'),
    unverified: new vscode_1.ThemeIcon('unverified'),
    variable: new vscode_1.ThemeIcon('variable'),
    variable_group: new vscode_1.ThemeIcon('variable-group'),
    verified: new vscode_1.ThemeIcon('verified'),
    versions: new vscode_1.ThemeIcon('versions'),
    vm_active: new vscode_1.ThemeIcon('vm-active'),
    vm_connect: new vscode_1.ThemeIcon('vm-connect'),
    vm_outline: new vscode_1.ThemeIcon('vm-outline'),
    vm_running: new vscode_1.ThemeIcon('vm-running'),
    vm: new vscode_1.ThemeIcon('vm'),
    wand: new vscode_1.ThemeIcon('wand'),
    warning: new vscode_1.ThemeIcon('warning'),
    watch: new vscode_1.ThemeIcon('watch'),
    whitespace: new vscode_1.ThemeIcon('whitespace'),
    whole_word: new vscode_1.ThemeIcon('whole-word'),
    window: new vscode_1.ThemeIcon('window'),
    workspace_trusted: new vscode_1.ThemeIcon('workspace-trusted'),
    workspace_untrusted: new vscode_1.ThemeIcon('workspace-untrusted'),
    workspace_unknown: new vscode_1.ThemeIcon('workspace-trusted'),
    word_wrap: new vscode_1.ThemeIcon('word-wrap'),
    x: new vscode_1.ThemeIcon('x'),
    zap: new vscode_1.ThemeIcon('symbol-event'),
    zoom_in: new vscode_1.ThemeIcon('zoom-in'),
    zoom_out: new vscode_1.ThemeIcon('zoom-out'),
};
exports.ThemeIcons = ThemeIcons;
var codicons = {
    account: '$(account)',
    activate_breakpoints: '$(activate-breakpoints)',
    add: '$(add)',
    alert: '$(alert)',
    archive: '$(archive)',
    array: '$(array)',
    arrow_both: '$(arrow-both)',
    arrow_down: '$(arrow-down)',
    arrow_left: '$(arrow-left)',
    arrow_right: '$(arrow-right)',
    arrow_small_down: '$(arrow-small-down)',
    arrow_small_left: '$(arrow-small-left)',
    arrow_small_right: '$(arrow-small-right)',
    arrow_small_up: '$(arrow-small-up)',
    arrow_swap: '$(arrow-swap)',
    arrow_up: '$(arrow-up)',
    beaker: '$(beaker)',
    bell_dot: '$(bell-dot)',
    bell: '$(bell)',
    bold: '$(bold)',
    book: '$(book)',
    bookmark: '$(bookmark)',
    briefcase: '$(briefcase)',
    broadcast: '$(broadcast)',
    browser: '$(browser)',
    bug: '$(bug)',
    calendar: '$(calendar)',
    call_incoming: '$(call-incoming)',
    call_outgoing: '$(call-outgoing)',
    case_sensitive: '$(case-sensitive)',
    check: '$(check)',
    check_all: '$(check-all)',
    checklist: '$(checklist)',
    chevron_down: '$(chevron-down)',
    chevron_left: '$(chevron-left)',
    chevron_right: '$(chevron-right)',
    chevron_up: '$(chevron-up)',
    chrome_close: '$(chrome-close)',
    chrome_maximize: '$(chrome-maximize)',
    chrome_minimize: '$(chrome-minimize)',
    chrome_restore: '$(chrome-restore)',
    circle_filled: '$(circle-filled)',
    circle_outline: '$(circle-outline)',
    circle_slash: '$(circle-slash)',
    circle_large_filled: '$(circle-large-filled)',
    circle_large_outline: '$(circle-large-outline)',
    circuit_board: '$(circuit-board)',
    clear_all: '$(clear-all)',
    clippy: '$(clippy)',
    clock: '$(clock)',
    clone: '$(clone)',
    close_all: '$(close-all)',
    close_dirty: '$(close-dirty)',
    close: '$(close)',
    cloud: '$(cloud)',
    cloud_download: '$(cloud-download)',
    cloud_upload: '$(cloud-upload)',
    copy: '$(copy)',
    code: '$(code)',
    combine: '$(combine)',
    collapse_all: '$(collapse-all)',
    color_mode: '$(color-mode)',
    comment_add: '$(comment-add)',
    comment_discussion: '$(comment-discussion)',
    comment: '$(comment)',
    console: '$(console)',
    credit_card: '$(credit-card)',
    dash: '$(dash)',
    dashboard: '$(dashboard)',
    database: '$(database)',
    debug_alt: '$(debug-alt)',
    debug_alt_small: '$(debug-alt-small)',
    debug_breakpoint_conditional_unverified: '$(debug-breakpoint-conditional-unverified)',
    debug_breakpoint_conditional: '$(debug-breakpoint-conditional)',
    debug_breakpoint_data_unverified: '$(debug-breakpoint-data-unverified)',
    debug_breakpoint_data: '$(debug-breakpoint-data)',
    debug_breakpoint_disabled: '$(debug-breakpoint-disabled)',
    debug_breakpoint_function_unverified: '$(debug-breakpoint-function-unverified)',
    debug_breakpoint_function: '$(debug-breakpoint-function)',
    debug_breakpoint_log_unverified: '$(debug-breakpoint-log-unverified)',
    debug_breakpoint_log: '$(debug-breakpoint-log)',
    debug_breakpoint_unsupported: '$(debug-breakpoint-unsupported)',
    debug_breakpoint: '$(debug-breakpoint)',
    debug_console: '$(debug-console)',
    debug_continue: '$(debug-continue)',
    debug_disconnect: '$(debug-disconnect)',
    debug_hint: '$(debug-hint)',
    debug_line_by_line: '$(debug-line-by-line)',
    debug_pause: '$(debug-pause)',
    debug_restart_frame: '$(debug-restart-frame)',
    debug_restart: '$(debug-restart)',
    debug_reverse_continue: '$(debug-reverse-continue)',
    debug_rerun: '$(debug-rerun)',
    debug_stackframe_active: '$(debug-stackframe-active)',
    debug_stackframe_dot: '$(debug-stackframe-dot)',
    debug_stackframe: '$(debug-stackframe)',
    debug_start: '$(debug-start)',
    debug_step_back: '$(debug-step-back)',
    debug_step_into: '$(debug-step-into)',
    debug_step_out: '$(debug-step-out)',
    debug_step_over: '$(debug-step-over)',
    debug_stop: '$(debug-stop)',
    debug: '$(debug)',
    desktop_download: '$(desktop-download)',
    device_camera_video: '$(device-camera-video)',
    device_camera: '$(device-camera)',
    device_desktop: '$(device-desktop)',
    device_mobile: '$(device-mobile)',
    diff_added: '$(diff-added)',
    diff_ignored: '$(diff-ignored)',
    diff_modified: '$(diff-modified)',
    diff_removed: '$(diff-removed)',
    diff_renamed: '$(diff-renamed)',
    diff: '$(diff)',
    discard: '$(discard)',
    edit: '$(edit)',
    editor_layout: '$(editor-layout)',
    ellipsis: '$(ellipsis)',
    empty_window: '$(empty-window)',
    error: '$(error)',
    exclude: '$(exclude)',
    expand_all: '$(expand-all)',
    export: '$(export)',
    extensions: '$(extensions)',
    eye_closed: '$(eye-closed)',
    eye_unwatch: '$(eye-unwatch)',
    eye_watch: '$(eye-watch)',
    eye: '$(eye)',
    feedback: '$(feedback)',
    file_add: '$(file-add)',
    file_binary: '$(file-binary)',
    file_code: '$(file-code)',
    file_directory_create: '$(file-directory-create)',
    file_directory: '$(file-directory)',
    file_media: '$(file-media)',
    file_pdf: '$(file-pdf)',
    file_submodule: '$(file-submodule)',
    file_symlink_directory: '$(file-symlink-directory)',
    file_symlink_file: '$(file-symlink-file)',
    file_text: '$(file-text)',
    file_zip: '$(file-zip)',
    file: '$(file)',
    files: '$(files)',
    filter: '$(filter)',
    filter_filled: '$(filter-filled)',
    flame: '$(flame)',
    fold_down: '$(fold-down)',
    fold_up: '$(fold-up)',
    fold: '$(fold)',
    folder_active: '$(folder-active)',
    folder_opened: '$(folder-opened)',
    folder: '$(folder)',
    gather: '$(gather)',
    gear: '$(gear)',
    gift: '$(gift)',
    gist_fork_private: '$(gist-fork-private)',
    gist_fork: '$(gist-fork)',
    gist_new: '$(gist-new)',
    gist_private: '$(gist-private)',
    gist_secret: '$(gist-secret)',
    gist: '$(gist)',
    git_branch_create: '$(git-branch-create)',
    git_branch_delete: '$(git-branch-delete)',
    git_branch: '$(git-branch)',
    git_commit: '$(git-commit)',
    git_compare: '$(git-compare)',
    git_merge: '$(git-merge)',
    git_pull_request: '$(git-pull-request)',
    git_pull_request_create: '$(git-pull-request-create)',
    github_action: '$(github-action)',
    github_alt: '$(github-alt)',
    github_inverted: '$(github-inverted)',
    github: '$(github)',
    globe: '$(globe)',
    go_to_file: '$(go-to-file)',
    grabber: '$(grabber)',
    graph: '$(graph)',
    graph_left: '$(graph-left)',
    gripper: '$(gripper)',
    group_by_ref_type: '$(group-by-ref-type)',
    heart: '$(heart)',
    history: '$(history)',
    home: '$(home)',
    horizontal_rule: '$(horizontal-rule)',
    hubot: '$(hubot)',
    inbox: '$(inbox)',
    info: '$(info)',
    issue_closed: '$(issue-closed)',
    issue_opened: '$(issue-opened)',
    issue_reopened: '$(issue-reopened)',
    issues: '$(issues)',
    italic: '$(italic)',
    jersey: '$(jersey)',
    json: '$(json)',
    kebab_horizontal: '$(kebab-horizontal)',
    kebab_vertical: '$(kebab-vertical)',
    key: '$(key)',
    keyboard: '$(keyboard)',
    law: '$(law)',
    library: '$(library)',
    light_bulb: '$(light-bulb)',
    lightbulb_autofix: '$(lightbulb-autofix)',
    lightbulb: '$(lightbulb)',
    link_external: '$(link-external)',
    link: '$(link)',
    list_filter: '$(list-filter)',
    list_flat: '$(list-flat)',
    list_ordered: '$(list-ordered)',
    list_selection: '$(list-selection)',
    list_tree: '$(list-tree)',
    list_unordered: '$(list-unordered)',
    live_share: '$(live-share)',
    loading: '$(loading)',
    location: '$(location)',
    lock: '$(lock)',
    log_in: '$(log-in)',
    log_out: '$(log-out)',
    logo_github: '$(logo-github)',
    magnet: '$(magnet)',
    mail_read: '$(mail-read)',
    mail_reply: '$(mail-reply)',
    mail: '$(mail)',
    mark_github: '$(mark-github)',
    markdown: '$(markdown)',
    megaphone: '$(megaphone)',
    mention: '$(mention)',
    menu: '$(menu)',
    merge: '$(merge)',
    microscope: '$(microscope)',
    milestone: '$(milestone)',
    mirror_private: '$(mirror-private)',
    mirror_public: '$(mirror-public)',
    mirror: '$(mirror)',
    more: '$(more)',
    mortar_board: '$(mortar-board)',
    move: '$(move)',
    multiple_windows: '$(multiple-windows)',
    mute: '$(mute)',
    new_file: '$(new-file)',
    new_folder: '$(new-folder)',
    no_newline: '$(no-newline)',
    note: '$(note)',
    notebook: '$(notebook)',
    notebook_template: '$(notebook-template)',
    octoface: '$(octoface)',
    open_preview: '$(open-preview)',
    organization_filled: '$(organization-filled)',
    organization_outline: '$(organization-outline)',
    organization: '$(organization)',
    output: '$(output)',
    package: '$(package)',
    paintcan: '$(paintcan)',
    pass: '$(pass)',
    pass_filled: '$(pass-filled)',
    pencil: '$(pencil)',
    person_add: '$(person-add)',
    person_filled: '$(person-filled)',
    person_follow: '$(person-follow)',
    person_outline: '$(person-outline)',
    person: '$(person)',
    pin: '$(pin)',
    pinned: '$(pinned)',
    pinned_dirty: '$(pinned-dirty)',
    play_circle: '$(play-circle)',
    play: '$(play)',
    plug: '$(plug)',
    plus: '$(plus)',
    preserve_case: '$(preserve-case)',
    preview: '$(preview)',
    primitive_dot: '$(primitive-dot)',
    primitive_square: '$(primitive-square)',
    project: '$(project)',
    pulse: '$(pulse)',
    question: '$(question)',
    quote: '$(quote)',
    radio_tower: '$(radio-tower)',
    reactions: '$(reactions)',
    record_keys: '$(record-keys)',
    record: '$(record)',
    redo: '$(redo)',
    references: '$(references)',
    refresh: '$(refresh)',
    regex: '$(regex)',
    remote_explorer: '$(remote-explorer)',
    remote: '$(remote)',
    remove_close: '$(remove-close)',
    remove: '$(remove)',
    repl: '$(repl)',
    replace_all: '$(replace-all)',
    replace: '$(replace)',
    reply: '$(reply)',
    repo_clone: '$(repo-clone)',
    repo_create: '$(repo-create)',
    repo_delete: '$(repo-delete)',
    repo_force_push: '$(repo-force-push)',
    repo_forked: '$(repo-forked)',
    repo_pull: '$(repo-pull)',
    repo_push: '$(repo-push)',
    repo_sync: '$(repo-sync)',
    repo: '$(repo)',
    report: '$(report)',
    request_changes: '$(request-changes)',
    rocket: '$(rocket)',
    root_folder_opened: '$(root-folder-opened)',
    root_folder: '$(root-folder)',
    rss: '$(rss)',
    ruby: '$(ruby)',
    run_above: '$(run-above)',
    run_all: '$(run-all)',
    run_below: '$(run-below)',
    save_all: '$(save-all)',
    save_as: '$(save-as)',
    save: '$(save)',
    screen_full: '$(screen-full)',
    screen_normal: '$(screen-normal)',
    search_save: '$(search-save)',
    search_stop: '$(search-stop)',
    search: '$(search)',
    server_environment: '$(server-environment)',
    server_process: '$(server-process)',
    server: '$(server)',
    settings_gear: '$(settings-gear)',
    settings: '$(settings)',
    shield: '$(shield)',
    sign_in: '$(sign-in)',
    sign_out: '$(sign-out)',
    smiley: '$(smiley)',
    sort_precedence: '$(sort-precedence)',
    source_control: '$(source-control)',
    split_horizontal: '$(split-horizontal)',
    split_vertical: '$(split-vertical)',
    squirrel: '$(squirrel)',
    star_empty: '$(star-empty)',
    star_full: '$(star-full)',
    star_half: '$(star-half)',
    star: '$(star)',
    stop_circle: '$(stop-circle)',
    stop: '$(stop)',
    symbol_array: '$(symbol-array)',
    symbol_boolean: '$(symbol-boolean)',
    symbol_class: '$(symbol-class)',
    symbol_color: '$(symbol-color)',
    symbol_constant: '$(symbol-constant)',
    symbol_constructor: '$(symbol-constructor)',
    symbol_enum_member: '$(symbol-enum-member)',
    symbol_enum: '$(symbol-enum)',
    symbol_event: '$(symbol-event)',
    symbol_field: '$(symbol-field)',
    symbol_file: '$(symbol-file)',
    symbol_folder: '$(symbol-folder)',
    symbol_function: '$(symbol-function)',
    symbol_interface: '$(symbol-interface)',
    symbol_key: '$(symbol-key)',
    symbol_keyword: '$(symbol-keyword)',
    symbol_method: '$(symbol-method)',
    symbol_misc: '$(symbol-misc)',
    symbol_module: '$(symbol-module)',
    symbol_namespace: '$(symbol-namespace)',
    symbol_null: '$(symbol-null)',
    symbol_number: '$(symbol-number)',
    symbol_numeric: '$(symbol-numeric)',
    symbol_object: '$(symbol-object)',
    symbol_operator: '$(symbol-operator)',
    symbol_package: '$(symbol-package)',
    symbol_parameter: '$(symbol-parameter)',
    symbol_property: '$(symbol-property)',
    symbol_reference: '$(symbol-reference)',
    symbol_ruler: '$(symbol-ruler)',
    symbol_snippet: '$(symbol-snippet)',
    symbol_string: '$(symbol-string)',
    symbol_struct: '$(symbol-struct)',
    symbol_structure: '$(symbol-structure)',
    symbol_text: '$(symbol-text)',
    symbol_type_parameter: '$(symbol-type_parameter)',
    symbol_unit: '$(symbol-unit)',
    symbol_value: '$(symbol-value)',
    symbol_variable: '$(symbol-variable)',
    sync_ignored: '$(sync-ignored)',
    sync: '$(sync)',
    table: '$(table)',
    tag_add: '$(tag-add)',
    tag_remove: '$(tag-remove)',
    tag: '$(tag)',
    tasklist: '$(tasklist)',
    telescope: '$(telescope)',
    terminal: '$(terminal)',
    terminal_cmd: '$(terminal-cmd)',
    terminal_debian: '$(terminal-debian)',
    terminal_linux: '$(terminal-linux)',
    terminal_powershell: '$(terminal-powershell)',
    terminal_tmux: '$(terminal-tmux)',
    terminal_ubuntu: '$(terminal-ubuntu)',
    terminal_bash: '$(terminal-bash)',
    text_size: '$(text-size)',
    three_bars: '$(three-bars)',
    thumbsdown: '$(thumbsdown)',
    thumbsup: '$(thumbsup)',
    tools: '$(tools)',
    trash: '$(trash)',
    trashcan: '$(trashcan)',
    triangle_down: '$(triangle-down)',
    triangle_left: '$(triangle-left)',
    triangle_right: '$(triangle-right)',
    triangle_up: '$(triangle-up)',
    type_hierarchy: '$(type-hierarchy)',
    type_hierarchy_sub: '$(type-hierarchy-sub)',
    type_hierarchy_super: '$(type-hierarchy-super)',
    twitter: '$(twitter)',
    unfold: '$(unfold)',
    ungroup_by_ref_type: '$(ungroup-by-ref-type)',
    unlock: '$(unlock)',
    unmute: '$(unmute)',
    unverified: '$(unverified)',
    variable: '$(variable)',
    variable_group: '$(variable_group)',
    verified: '$(verified)',
    versions: '$(versions)',
    vm_active: '$(vm-active)',
    vm_connect: '$(vm-connect)',
    vm_outline: '$(vm-outline)',
    vm_running: '$(vm-running)',
    vm: '$(vm)',
    wand: '$(wand)',
    warning: '$(warning)',
    watch: '$(watch)',
    whitespace: '$(whitespace)',
    whole_word: '$(whole-word)',
    window: '$(window)',
    workspace_trusted: '$(workspace-trusted)',
    workspace_untrusted: '$(workspace-untrusted)',
    workspace_unknown: '$(workspace-trusted)',
    word_wrap: '$(word-wrap)',
    x: '$(x)',
    zap: '$(symbol-event)',
    zoom_in: '$(zoom-in)',
    zoom_out: '$(zoom-out)',
};
exports.codicons = codicons;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vscode-ext-help-and-feedback-view/lib/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vscode-ext-help-and-feedback-view/lib/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
var view_1 = __webpack_require__(/*! ./view */ "./node_modules/vscode-ext-help-and-feedback-view/lib/view.js");
Object.defineProperty(exports, "HelpAndFeedbackView", ({ enumerable: true, get: function () { return view_1.HelpAndFeedbackView; } }));
var standardLinks_1 = __webpack_require__(/*! ./standardLinks */ "./node_modules/vscode-ext-help-and-feedback-view/lib/standardLinks.js");
Object.defineProperty(exports, "GetStartedLink", ({ enumerable: true, get: function () { return standardLinks_1.GetStartedLink; } }));
Object.defineProperty(exports, "ReadDocumentationLink", ({ enumerable: true, get: function () { return standardLinks_1.ReadDocumentationLink; } }));
Object.defineProperty(exports, "ProvideFeedbackLink", ({ enumerable: true, get: function () { return standardLinks_1.ProvideFeedbackLink; } }));
Object.defineProperty(exports, "ReviewIssuesLink", ({ enumerable: true, get: function () { return standardLinks_1.ReviewIssuesLink; } }));
Object.defineProperty(exports, "ReportIssueLink", ({ enumerable: true, get: function () { return standardLinks_1.ReportIssueLink; } }));
Object.defineProperty(exports, "SupportLink", ({ enumerable: true, get: function () { return standardLinks_1.SupportLink; } }));
Object.defineProperty(exports, "StandardLinksProvider", ({ enumerable: true, get: function () { return standardLinks_1.StandardLinksProvider; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vscode-ext-help-and-feedback-view/lib/items.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vscode-ext-help-and-feedback-view/lib/items.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isLink = void 0;
function isLink(item) {
    return item.url !== undefined;
}
exports.isLink = isLink;
//# sourceMappingURL=items.js.map

/***/ }),

/***/ "./node_modules/vscode-ext-help-and-feedback-view/lib/node.js":
/*!********************************************************************!*\
  !*** ./node_modules/vscode-ext-help-and-feedback-view/lib/node.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Node = void 0;
var vscode_1 = __webpack_require__(/*! vscode */ "vscode");
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node(label, icon, command) {
        var _this = _super.call(this, label) || this;
        _this.label = label;
        _this.icon = icon;
        _this.command = command;
        _this.command = command;
        _this.iconPath = new vscode_1.ThemeIcon(icon);
        return _this;
    }
    return Node;
}(vscode_1.TreeItem));
exports.Node = Node;
//# sourceMappingURL=node.js.map

/***/ }),

/***/ "./node_modules/vscode-ext-help-and-feedback-view/lib/openUrl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vscode-ext-help-and-feedback-view/lib/openUrl.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerOpenUrlCommand = void 0;
var vscode_1 = __webpack_require__(/*! vscode */ "vscode");
function registerOpenUrlCommand(viewId) {
    vscode_1.commands.registerCommand(viewId + ".openHelpLink", function (url) {
        vscode_1.env.openExternal(vscode_1.Uri.parse(url));
    });
}
exports.registerOpenUrlCommand = registerOpenUrlCommand;
//# sourceMappingURL=openUrl.js.map

/***/ }),

/***/ "./node_modules/vscode-ext-help-and-feedback-view/lib/provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/vscode-ext-help-and-feedback-view/lib/provider.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataProvider = void 0;
var vscode_1 = __webpack_require__(/*! vscode */ "vscode");
var items_1 = __webpack_require__(/*! ./items */ "./node_modules/vscode-ext-help-and-feedback-view/lib/items.js");
var node_1 = __webpack_require__(/*! ./node */ "./node_modules/vscode-ext-help-and-feedback-view/lib/node.js");
var DataProvider = /** @class */ (function () {
    function DataProvider(context, viewId, items) {
        this._onDidChangeTreeData = new vscode_1.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.context = context;
        this.viewId = viewId;
        this.items = items;
    }
    DataProvider.prototype.getTreeItem = function (element) {
        return element;
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    DataProvider.prototype.getChildren = function (element) {
        var _this = this;
        return new Promise(function (resolve) {
            var links = [];
            _this.items.forEach(function (item) {
                if (items_1.isLink(item)) {
                    links.push(new node_1.Node(item.title, item.icon, { title: item.title, command: _this.viewId + ".openHelpLink", arguments: [item.url] }));
                }
                else {
                    links.push(new node_1.Node(item.title, item.icon, { title: item.title, command: item.command }));
                }
            });
            resolve(links);
        });
    };
    DataProvider.prototype.refresh = function () {
        this._onDidChangeTreeData.fire(undefined);
    };
    return DataProvider;
}());
exports.DataProvider = DataProvider;
//# sourceMappingURL=provider.js.map

/***/ }),

/***/ "./node_modules/vscode-ext-help-and-feedback-view/lib/standardLinks.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/vscode-ext-help-and-feedback-view/lib/standardLinks.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StandardLinksProvider = exports.SupportLink = exports.ReportIssueLink = exports.ReviewIssuesLink = exports.ProvideFeedbackLink = exports.ReadDocumentationLink = exports.GetStartedLink = void 0;
var vscode_1 = __webpack_require__(/*! vscode */ "vscode");
var StandardLink = /** @class */ (function () {
    function StandardLink(icon, title, url) {
        this.icon = icon;
        this.title = title;
        this.url = url;
    }
    return StandardLink;
}());
var GetStartedLink = /** @class */ (function (_super) {
    __extends(GetStartedLink, _super);
    function GetStartedLink(url) {
        return _super.call(this, 'star', 'Get Started', url) || this;
    }
    return GetStartedLink;
}(StandardLink));
exports.GetStartedLink = GetStartedLink;
var ReadDocumentationLink = /** @class */ (function (_super) {
    __extends(ReadDocumentationLink, _super);
    function ReadDocumentationLink(url) {
        return _super.call(this, 'book', 'Read Documentation', url) || this;
    }
    return ReadDocumentationLink;
}(StandardLink));
exports.ReadDocumentationLink = ReadDocumentationLink;
var ProvideFeedbackLink = /** @class */ (function (_super) {
    __extends(ProvideFeedbackLink, _super);
    function ProvideFeedbackLink(url) {
        return _super.call(this, 'twitter', 'Provide Feedback', "https://twitter.com/intent/tweet?hashtags=" + url + "&text=%40code") || this;
    }
    return ProvideFeedbackLink;
}(StandardLink));
exports.ProvideFeedbackLink = ProvideFeedbackLink;
var ReviewIssuesLink = /** @class */ (function (_super) {
    __extends(ReviewIssuesLink, _super);
    function ReviewIssuesLink(url) {
        return _super.call(this, 'info', 'Review Issues', url) || this;
    }
    return ReviewIssuesLink;
}(StandardLink));
exports.ReviewIssuesLink = ReviewIssuesLink;
var ReportIssueLink = /** @class */ (function (_super) {
    __extends(ReportIssueLink, _super);
    function ReportIssueLink(url) {
        var _this = _super.call(this, 'comment', 'Report Issue', url) || this;
        _this.url = url;
        return _this;
    }
    return ReportIssueLink;
}(StandardLink));
exports.ReportIssueLink = ReportIssueLink;
var SupportLink = /** @class */ (function (_super) {
    __extends(SupportLink, _super);
    function SupportLink(url) {
        var _this = _super.call(this, 'heart', 'Support', url) || this;
        _this.url = url;
        return _this;
    }
    return SupportLink;
}(StandardLink));
exports.SupportLink = SupportLink;
var StandardLinksProvider = /** @class */ (function () {
    function StandardLinksProvider(extensionId) {
        this.extensionId = extensionId;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.extension = vscode_1.extensions.getExtension(this.extensionId);
    }
    StandardLinksProvider.prototype.getGetStartedLink = function () {
        return new GetStartedLink(this.extension.packageJSON.homepage);
    };
    StandardLinksProvider.prototype.getReadDocumentation = function () {
        return new ReadDocumentationLink(this.extension.packageJSON.homepage);
    };
    StandardLinksProvider.prototype.getReviewIssuesLink = function () {
        return new ReviewIssuesLink(this.extension.packageJSON.bugs.url);
    };
    StandardLinksProvider.prototype.getReportIssueLink = function () {
        return new ReportIssueLink(this.extension.packageJSON.bugs.url + "/new/choose");
    };
    return StandardLinksProvider;
}());
exports.StandardLinksProvider = StandardLinksProvider;
//# sourceMappingURL=standardLinks.js.map

/***/ }),

/***/ "./node_modules/vscode-ext-help-and-feedback-view/lib/view.js":
/*!********************************************************************!*\
  !*** ./node_modules/vscode-ext-help-and-feedback-view/lib/view.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HelpAndFeedbackView = void 0;
var vscode_1 = __webpack_require__(/*! vscode */ "vscode");
var openUrl_1 = __webpack_require__(/*! ./openUrl */ "./node_modules/vscode-ext-help-and-feedback-view/lib/openUrl.js");
var provider_1 = __webpack_require__(/*! ./provider */ "./node_modules/vscode-ext-help-and-feedback-view/lib/provider.js");
var HelpAndFeedbackView = /** @class */ (function () {
    function HelpAndFeedbackView(context, viewId, items) {
        openUrl_1.registerOpenUrlCommand(viewId);
        this.treeDataProvider = new provider_1.DataProvider(context, viewId, items);
        this.helpViewer = vscode_1.window.createTreeView(viewId, {
            treeDataProvider: this.treeDataProvider,
            showCollapseAll: false
        });
    }
    HelpAndFeedbackView.prototype.getProvider = function () {
        return this.treeDataProvider;
    };
    return HelpAndFeedbackView;
}());
exports.HelpAndFeedbackView = HelpAndFeedbackView;
//# sourceMappingURL=view.js.map

/***/ }),

/***/ "vscode":
/*!*************************!*\
  !*** external "vscode" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/extension.ts ***!
  \**************************/

/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const fs = __webpack_require__(/*! fs */ "fs");
const path = __webpack_require__(/*! path */ "path");
const vscode = __webpack_require__(/*! vscode */ "vscode");
const locators_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/autodetect/locators'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const storage_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/storage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const path_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/utils/path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const providers_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/sidebar/providers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const statusBar_1 = __webpack_require__(/*! ./statusBar */ "./src/statusBar.ts");
const suggestion_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/suggestion'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const constants_1 = __webpack_require__(/*! ./constants */ "./src/constants.ts");
const remote_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/utils/remote'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const uri_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/utils/uri'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const container_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const commands_1 = __webpack_require__(/*! ./whats-new/commands */ "./src/whats-new/commands.ts");
const supportProjectManager_1 = __webpack_require__(/*! ./commands/supportProjectManager */ "./src/commands/supportProjectManager.ts");
const helpAndFeedbackView_1 = __webpack_require__(/*! ./sidebar/helpAndFeedbackView */ "./src/sidebar/helpAndFeedbackView.ts");
const revealFileInOS_1 = __webpack_require__(/*! ./commands/revealFileInOS */ "./src/commands/revealFileInOS.ts");
const openSettings_1 = __webpack_require__(/*! ./commands/openSettings */ "./src/commands/openSettings.ts");
const tagsPicker_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/quickpick/tagsPicker'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const constants_2 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/sidebar/constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const sortBy_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../vscode-project-manager-core/src/commands/sortBy'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const projectsPicker_1 = __webpack_require__(/*! ./quickpick/projectsPicker */ "./src/quickpick/projectsPicker.ts");
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const walkthrough_1 = __webpack_require__(/*! ./commands/walkthrough */ "./src/commands/walkthrough.ts");
let locators;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
async function activate(context) {
    container_1.Container.initialize(context);
    // Sets storage path if recommended path provided by current version of VS Code.  
    path_1.PathUtils.setExtensionContext(context);
    // load the projects
    locators = new locators_1.Locators();
    const projectStorage = new storage_1.ProjectStorage(getProjectFilePath());
    const providerManager = new providers_1.Providers(locators, projectStorage);
    locators.setProviderManager(providerManager);
    (0, revealFileInOS_1.registerRevealFileInOS)();
    (0, openSettings_1.registerOpenSettings)();
    (0, supportProjectManager_1.registerSupportProjectManager)();
    (0, helpAndFeedbackView_1.registerHelpAndFeedbackView)(context);
    (0, sortBy_1.registerSortBy)();
    await (0, walkthrough_1.registerWalkthrough)();
    (0, commands_1.registerWhatsNew)();
    context.subscriptions.push(vscode.commands.registerCommand("_projectManager.openFolderWelcome", () => {
        const openFolderCommand = remote_1.isWindows || remote_1.isMacOS ? "workbench.action.files.openFolder" : "workbench.action.files.openFileFolder";
        vscode.commands.executeCommand(openFolderCommand);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("projectManager.hideGitWelcome", () => {
        context.globalState.update("hideGitWelcome", true);
        providerManager.showTreeViewFromAllProviders();
        vscode.commands.executeCommand("setContext", "projectManager.hiddenGitWelcome", true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("projectManager.showGitWelcome", () => {
        context.globalState.update("hideGitWelcome", false);
        providerManager.showTreeViewFromAllProviders();
        vscode.commands.executeCommand("setContext", "projectManager.hiddenGitWelcome", false);
    }));
    const hideGitWelcome = context.globalState.get("hideGitWelcome", false);
    vscode.commands.executeCommand("setContext", "projectManager.hiddenGitWelcome", hideGitWelcome);
    vscode.commands.registerCommand("_projectManager.open", async (node) => {
        const uri = typeof node === "string"
            ? (0, uri_1.buildProjectUri)(node)
            : (0, uri_1.buildProjectUri)(node.command.arguments[0]);
        if (!await (0, projectsPicker_1.canSwitchOnActiveWindow)(constants_1.CommandLocation.SideBar)) {
            return;
        }
        vscode.commands.executeCommand("vscode.openFolder", uri, false)
            .then(value => ({}), // done
        // done
        value => vscode.window.showInformationMessage(vscode_1.l10n.t("Could not open the project!")));
    });
    vscode.commands.registerCommand("_projectManager.openInNewWindow", node => {
        const uri = (0, uri_1.buildProjectUri)(node.command.arguments[0]);
        const openInNewWindow = (0, projectsPicker_1.shouldOpenInNewWindow)(true, constants_1.CommandLocation.SideBar);
        vscode.commands.executeCommand("vscode.openFolder", uri, openInNewWindow)
            .then(value => ({}), // done
        // done
        value => vscode.window.showInformationMessage(vscode_1.l10n.t("Could not open the project!")));
    });
    // register commands (here, because it needs to be used right below if an invalid JSON is present)
    vscode.commands.registerCommand("projectManager.saveProject", () => saveProject());
    vscode.commands.registerCommand("projectManager.refreshProjects", () => refreshProjects(true, true));
    locators.registerCommands();
    vscode.commands.registerCommand("projectManager.editProjects", () => editProjects());
    vscode.commands.registerCommand("projectManager.listProjects", () => listProjects(false));
    vscode.commands.registerCommand("projectManager.listProjectsNewWindow", () => listProjects(true));
    vscode.commands.registerCommand("projectManager.listFavoriteProjects#sideBarFavorites", () => listStorageProjects());
    vscode.commands.registerCommand("projectManager.listGitProjects#sideBarGit", () => listAutoDetectedProjects(locators.gitLocator));
    vscode.commands.registerCommand("projectManager.listVSCodeProjects#sideBarVSCode", () => listAutoDetectedProjects(locators.vscLocator));
    vscode.commands.registerCommand("projectManager.listSVNProjects#sideBarSVN", () => listAutoDetectedProjects(locators.svnLocator));
    vscode.commands.registerCommand("projectManager.listMercurialProjects#sideBarMercurial", () => listAutoDetectedProjects(locators.mercurialLocator));
    vscode.commands.registerCommand("projectManager.listAnyProjects#sideBarAny", () => listAutoDetectedProjects(locators.anyLocator));
    // new commands (ActivityBar)
    vscode.commands.registerCommand("projectManager.addToWorkspace#sideBar", (node) => addProjectToWorkspace(node));
    vscode.commands.registerCommand("projectManager.addToWorkspace", () => addProjectToWorkspace(undefined));
    vscode.commands.registerCommand("_projectManager.deleteProject", (node) => deleteProject(node));
    vscode.commands.registerCommand("_projectManager.renameProject", (node) => renameProject(node));
    vscode.commands.registerCommand("_projectManager.editTags", (node) => editTags(node));
    vscode.commands.registerCommand("projectManager.addToFavorites", (node) => saveProject(node));
    vscode.commands.registerCommand("_projectManager.toggleProjectEnabled", (node) => toggleProjectEnabled(node));
    const viewAsList = container_1.Container.context.globalState.get("viewAsList", true);
    vscode.commands.executeCommand("setContext", "projectManager.viewAsList", viewAsList);
    vscode.commands.registerCommand("_projectManager.viewAsTags#sideBarFavorites", () => toggleViewAsFavoriteProjects(constants_2.ViewFavoritesAs.VIEW_AS_TAGS));
    vscode.commands.registerCommand("_projectManager.viewAsList#sideBarFavorites", () => toggleViewAsFavoriteProjects(constants_2.ViewFavoritesAs.VIEW_AS_LIST));
    vscode.commands.registerCommand("projectManager.filterProjectsByTag", () => filterProjectsByTag());
    vscode.commands.registerCommand("projectManager.filterProjectsByTag#sideBar", () => filterProjectsByTag());
    function toggleViewAsFavoriteProjects(view) {
        if (view === constants_2.ViewFavoritesAs.VIEW_AS_LIST) {
            vscode.commands.executeCommand("setContext", "projectManager.viewAsList", true);
        }
        else {
            vscode.commands.executeCommand("setContext", "projectManager.viewAsList", false);
        }
        container_1.Container.context.globalState.update("viewAsList", view === constants_2.ViewFavoritesAs.VIEW_AS_LIST);
        providerManager.refreshTreeViews();
    }
    async function filterProjectsByTag() {
        const filterByTags = container_1.Container.context.globalState.get("filterByTags", []);
        const tags = await (0, tagsPicker_1.pickTags)(projectStorage, filterByTags, {
            useDefaultTags: false,
            useNoTagsDefined: true,
            showWarningWhenHasNoTagsToPick: true
        });
        if (!tags) {
            return;
        }
        container_1.Container.context.globalState.update("filterByTags", tags);
        providerManager.refreshStorageTreeView();
    }
    loadProjectsFile();
    // // new place to register TreeView
    await providerManager.showTreeViewFromAllProviders();
    fs.watchFile(getProjectFilePath(), (prev, next) => {
        loadProjectsFile();
        providerManager.storageProvider.refresh();
        providerManager.updateTreeViewStorage();
    });
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(cfg => {
        if (cfg.affectsConfiguration("projectManager.git") || cfg.affectsConfiguration("projectManager.hg") ||
            cfg.affectsConfiguration("projectManager.vscode") || cfg.affectsConfiguration("projectManager.svn") ||
            cfg.affectsConfiguration("projectManager.any") ||
            cfg.affectsConfiguration("projectManager.ignoreProjectsWithinProjects") ||
            cfg.affectsConfiguration("projectManager.supportSymlinksOnBaseFolders")) {
            refreshProjects();
        }
        if (cfg.affectsConfiguration("workbench.iconTheme")) {
            providerManager.refreshTreeViews();
        }
        if (cfg.affectsConfiguration("projectManager.sortList")) {
            (0, sortBy_1.updateSortByContext)();
            providerManager.storageProvider.refresh();
            providerManager.updateTreeViewStorage();
        }
        if (cfg.affectsConfiguration("projectManager.showParentFolderInfoOnDuplicates")) {
            providerManager.refreshTreeViews();
        }
    }));
    (0, statusBar_1.showStatusBar)(projectStorage, locators);
    function refreshProjects(showMessage, forceRefresh) {
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: vscode_1.l10n.t("Refreshing Projects"),
            cancellable: false
        }, async (progress) => {
            progress.report({ message: "VSCode" });
            const rvscode = await locators.vscLocator.refreshProjects(forceRefresh);
            progress.report({ message: "Git" });
            const rgit = await locators.gitLocator.refreshProjects(forceRefresh);
            progress.report({ message: "Mercurial" });
            const rmercurial = await locators.mercurialLocator.refreshProjects(forceRefresh);
            progress.report({ message: "SVN" });
            const rsvn = await locators.svnLocator.refreshProjects(forceRefresh);
            progress.report({ message: "Any" });
            const rany = await locators.anyLocator.refreshProjects(forceRefresh);
            if (rvscode || rgit || rmercurial || rsvn || rany || forceRefresh) {
                progress.report({ message: "Activity Bar" });
                if (rvscode || forceRefresh) {
                    providerManager.vscodeProvider.refresh();
                }
                if (rgit || forceRefresh) {
                    providerManager.gitProvider.refresh();
                }
                if (rmercurial || forceRefresh) {
                    providerManager.mercurialProvider.refresh();
                }
                if (rsvn || forceRefresh) {
                    providerManager.svnProvider.refresh();
                }
                if (rany || forceRefresh) {
                    providerManager.anyProvider.refresh();
                }
                providerManager.showTreeViewFromAllProviders();
            }
            if (showMessage) {
                vscode.window.showInformationMessage(vscode_1.l10n.t("The projects have been refreshed!"));
            }
        });
    }
    function editProjects() {
        if (fs.existsSync(getProjectFilePath())) {
            vscode.workspace.openTextDocument(getProjectFilePath()).then(doc => {
                vscode.window.showTextDocument(doc);
            });
        }
        else {
            const optionEditProject = {
                title: "Yes, edit manually"
            };
            vscode.window.showErrorMessage(vscode_1.l10n.t("No projects saved yet! You should open a folder and use Save Project instead. Do you really want to edit manually? "), optionEditProject).then(option => {
                // nothing selected
                if (typeof option === "undefined") {
                    return;
                }
                if (option.title === vscode_1.l10n.t("Yes, edit manually")) {
                    projectStorage.push("Project Name", "Root Path");
                    projectStorage.save();
                    providerManager.updateTreeViewStorage();
                    vscode.commands.executeCommand("projectManager.editProjects");
                }
                else {
                    return;
                }
            });
        }
    }
    async function saveProject(node) {
        let wpath;
        let rootPath;
        if (node) {
            wpath = node.label;
            rootPath = node.command.arguments[0];
        }
        else {
            const projectDetails = await (0, suggestion_1.getProjectDetails)();
            if (!projectDetails) {
                return;
            }
            rootPath = projectDetails.path;
            wpath = projectDetails.name;
        }
        // ask the PROJECT NAME (suggest the )
        const ibo = {
            prompt: vscode_1.l10n.t("Project Name"),
            placeHolder: vscode_1.l10n.t("Type a name for your project"),
            value: wpath
        };
        vscode.window.showInputBox(ibo).then(projectName => {
            if (typeof projectName === "undefined") {
                return;
            }
            // 'empty'
            if (projectName === "") {
                vscode.window.showWarningMessage(vscode_1.l10n.t("You must define a name for the project."));
                return;
            }
            if (!projectStorage.exists(projectName)) {
                container_1.Container.stack.push(projectName);
                context.globalState.update("recent", container_1.Container.stack.toString());
                projectStorage.push(projectName, rootPath);
                projectStorage.save();
                providerManager.updateTreeViewStorage();
                vscode.window.showInformationMessage(vscode_1.l10n.t("Project saved!"));
                if (!node) {
                    (0, statusBar_1.showStatusBar)(projectStorage, locators, projectName);
                }
            }
            else {
                const optionUpdate = {
                    title: vscode_1.l10n.t("Update")
                };
                const optionCancel = {
                    title: vscode_1.l10n.t("Cancel")
                };
                vscode.window.showInformationMessage(vscode_1.l10n.t("Project already exists!"), optionUpdate, optionCancel).then(option => {
                    // nothing selected
                    if (typeof option === "undefined") {
                        return;
                    }
                    if (option.title === vscode_1.l10n.t("Update")) {
                        container_1.Container.stack.push(projectName);
                        context.globalState.update("recent", container_1.Container.stack.toString());
                        projectStorage.updateRootPath(projectName, rootPath);
                        projectStorage.save();
                        providerManager.updateTreeViewStorage();
                        vscode.window.showInformationMessage(vscode_1.l10n.t("Project saved!"));
                        if (!node) {
                            (0, statusBar_1.showStatusBar)(projectStorage, locators, projectName);
                        }
                        return;
                    }
                    else {
                        return;
                    }
                });
            }
        });
    }
    async function listProjects(forceNewWindow) {
        const pick = await (0, projectsPicker_1.pickProjects)(projectStorage, locators, !forceNewWindow, undefined);
        (0, projectsPicker_1.openPickedProject)(pick, forceNewWindow, constants_1.CommandLocation.CommandPalette);
    }
    async function listAutoDetectedProjects(locator) {
        const pick = await (0, projectsPicker_1.pickProjects)(undefined, locators, true, locator);
        (0, projectsPicker_1.openPickedProject)(pick, false, constants_1.CommandLocation.SideBar);
    }
    async function listStorageProjects() {
        const pick = await (0, projectsPicker_1.pickProjects)(projectStorage, undefined, true, undefined);
        (0, projectsPicker_1.openPickedProject)(pick, false, constants_1.CommandLocation.SideBar);
    }
    function loadProjectsFile() {
        const errorLoading = projectStorage.load();
        // how to handle now, since the extension starts 'at load'?
        if (errorLoading !== "") {
            const optionOpenFile = {
                title: vscode_1.l10n.t("Open File")
            };
            vscode.window.showErrorMessage(vscode_1.l10n.t("Error loading projects.json file. Message: {0}", errorLoading), optionOpenFile).then(option => {
                // nothing selected
                if (typeof option === "undefined") {
                    return;
                }
                if (option.title === vscode_1.l10n.t("Open File")) {
                    vscode.commands.executeCommand("projectManager.editProjects");
                }
                else {
                    return;
                }
            });
            return null;
        }
    }
    function getProjectFilePath() {
        let projectFile;
        const projectsLocation = vscode.workspace.getConfiguration("projectManager").get("projectsLocation");
        if (projectsLocation !== "") {
            projectFile = path.join(path_1.PathUtils.expandHomePath(projectsLocation), constants_1.PROJECTS_FILE);
        }
        else {
            projectFile = path_1.PathUtils.getFilePathFromAppData(constants_1.PROJECTS_FILE);
        }
        return projectFile;
    }
    function addProjectPathToWorkspace(projectPath) {
        if (path.extname(projectPath) === ".code-workspace") {
            vscode.window.showWarningMessage(vscode_1.l10n.t("You can't add a Workspace to another Workspace."));
            return;
        }
        vscode.workspace.updateWorkspaceFolders(vscode.workspace.workspaceFolders ?
            vscode.workspace.workspaceFolders.length : 0, null, { uri: vscode.Uri.file(projectPath) });
    }
    async function addProjectToWorkspace(node) {
        if (node) {
            addProjectPathToWorkspace(node.command.arguments[0]);
            return;
        }
        const pick = await (0, projectsPicker_1.pickProjects)(projectStorage, locators, false, undefined);
        if (pick) {
            addProjectPathToWorkspace(pick.item.rootPath);
        }
    }
    function deleteProject(node) {
        container_1.Container.stack.pop(node.command.arguments[1]);
        projectStorage.pop(node.command.arguments[1]);
        projectStorage.save();
        providerManager.updateTreeViewStorage();
        vscode.window.showInformationMessage(vscode_1.l10n.t("Project successfully deleted!"));
    }
    function renameProject(node) {
        const oldName = node.command.arguments[1];
        // Display a message box to the user
        // ask the NEW PROJECT NAME ()
        const ibo = {
            prompt: vscode_1.l10n.t("New Project Name"),
            placeHolder: vscode_1.l10n.t("Type a new name for the project"),
            value: oldName
        };
        vscode.window.showInputBox(ibo).then(newName => {
            if (typeof newName === "undefined" || newName === oldName) {
                return;
            }
            // 'empty'
            if (newName === "") {
                vscode.window.showWarningMessage(vscode_1.l10n.t("You must define a new name for the project."));
                return;
            }
            if (!projectStorage.exists(newName) || newName.toLowerCase() === oldName.toLowerCase()) {
                container_1.Container.stack.rename(oldName, newName);
                projectStorage.rename(oldName, newName);
                projectStorage.save();
                vscode.window.showInformationMessage(vscode_1.l10n.t("Project renamed!"));
                (0, statusBar_1.updateStatusBar)(oldName, node.command.arguments[0], newName);
            }
            else {
                vscode.window.showErrorMessage(vscode_1.l10n.t("Project already exists!"));
            }
        });
    }
    async function editTags(node) {
        const project = projectStorage.existsWithRootPath(node.command.arguments[0]);
        if (!project) {
            return;
        }
        const picked = await (0, tagsPicker_1.pickTags)(projectStorage, project.tags, {
            useDefaultTags: true,
            useNoTagsDefined: false
        });
        if (picked) {
            projectStorage.editTags(project.name, picked);
            projectStorage.save();
            vscode.window.showInformationMessage(vscode_1.l10n.t("Project updated!"));
        }
    }
    function toggleProjectEnabled(node, askForUndo = true) {
        const projectName = node.command.arguments[1];
        const enabled = projectStorage.toggleEnabled(projectName);
        if (enabled === undefined) {
            return;
        }
        projectStorage.save();
        providerManager.updateTreeViewStorage();
        if (!askForUndo) {
            return;
        }
        if (enabled) {
            vscode.window.showInformationMessage(vscode_1.l10n.t("Project \"{0}\" enabled.", projectName), "Undo").then(undo => {
                if (undo) {
                    toggleProjectEnabled(node, false);
                }
            });
        }
        else {
            vscode.window.showInformationMessage(vscode_1.l10n.t("Project \"{0}\" disabled.", projectName), "Undo").then(undo => {
                if (undo) {
                    toggleProjectEnabled(node, false);
                }
            });
        }
    }
}
exports.activate = activate;
function deactivate() {
    // if (vscode.workspace.getConfiguration("projectManager").get("cacheProjectsBetweenSessions", true)) { 
    //     return; 
    // }
    locators.dispose();
}
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map