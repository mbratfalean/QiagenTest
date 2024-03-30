"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const landingPage_1 = require("../pageobjects/landingPage");
const userPage_1 = require("../pageobjects/userPage");
(0, test_1.test)("Test 1 : Test invalid login wrong username", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page, }) {
    //Open page
    yield page.goto(process.env.URL);
    //Assert
    yield (0, test_1.expect)(page).toHaveTitle(landingPage_1.landingPageTitle);
    yield page.locator(landingPage_1.username).fill(process.env.USERNAMEINCORECT);
    yield page.locator(landingPage_1.password).fill(process.env.PASSWORDCORECT);
    yield page.locator(landingPage_1.logginButton).click();
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toBeAttached();
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toContainText('Your username is invalid!');
}));
(0, test_1.test)("Test 2 : Test invalid login wrong password", (_b) => __awaiter(void 0, [_b], void 0, function* ({ page, }) {
    //Open page
    yield page.goto(process.env.URL);
    //Assert
    yield (0, test_1.expect)(page).toHaveTitle(landingPage_1.landingPageTitle);
    yield page.locator(landingPage_1.username).fill(process.env.USERNAMECORECT);
    yield page.locator(landingPage_1.password).fill(process.env.PASSWORDINCORECT);
    yield page.locator(landingPage_1.logginButton).click();
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toBeAttached();
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toContainText('Your username is invalid!');
}));
(0, test_1.test)("Test 3 : Test invalid login wrong username and password", (_c) => __awaiter(void 0, [_c], void 0, function* ({ page, }) {
    //Open page
    yield page.goto(process.env.URL);
    //Assert
    yield (0, test_1.expect)(page).toHaveTitle(landingPage_1.landingPageTitle);
    yield page.locator(landingPage_1.username).fill(process.env.USERNAMEINCORECT);
    yield page.locator(landingPage_1.password).fill(process.env.PASSWORDINCORECT);
    yield page.locator(landingPage_1.logginButton).click();
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toBeAttached();
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toContainText('Your username is invalid!');
}));
(0, test_1.test)("Test 3 : Test empty credentials", (_d) => __awaiter(void 0, [_d], void 0, function* ({ page, }) {
    //Open page
    yield page.goto(process.env.URL);
    //Assert
    yield (0, test_1.expect)(page).toHaveTitle(landingPage_1.landingPageTitle);
    yield page.locator(landingPage_1.logginButton).click();
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toBeAttached();
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toContainText('Your username is invalid!');
}));
(0, test_1.test)("Test 4 : Test correct credentials", (_e) => __awaiter(void 0, [_e], void 0, function* ({ page, }) {
    //Open page
    yield page.goto(process.env.URL);
    //Assert
    yield (0, test_1.expect)(page).toHaveTitle(landingPage_1.landingPageTitle);
    yield page.locator(landingPage_1.username).fill(process.env.USERNAMECORECT);
    yield page.locator(landingPage_1.password).fill(process.env.PASSWORDINCORECT);
    yield page.locator(landingPage_1.logginButton).click();
    (0, test_1.expect)(page).toHaveTitle(userPage_1.userPageTitle);
    yield (0, test_1.expect)(page.locator(userPage_1.loginMessageLocator)).toBeAttached();
    yield (0, test_1.expect)(page.locator(userPage_1.loginMessageLocator)).toContainText('You logged into a secure area!');
}));
(0, test_1.test)("Test 5 : Test logout", (_f) => __awaiter(void 0, [_f], void 0, function* ({ page, }) {
    //Open page
    yield page.goto(process.env.URL);
    //Assert
    yield (0, test_1.expect)(page).toHaveTitle(landingPage_1.landingPageTitle);
    yield page.locator(landingPage_1.username).fill(process.env.USERNAMECORECT);
    yield page.locator(landingPage_1.password).fill(process.env.PASSWORDINCORECT);
    yield page.locator(landingPage_1.logginButton).click();
    (0, test_1.expect)(page).toHaveTitle(userPage_1.userPageTitle);
    yield (0, test_1.expect)(page.locator(userPage_1.loginMessageLocator)).toBeAttached();
    yield (0, test_1.expect)(page.locator(userPage_1.loginMessageLocator)).toContainText('You logged into a secure area!');
    yield page.locator(userPage_1.logoutButton).click();
    yield (0, test_1.expect)(page).toHaveTitle(landingPage_1.landingPageTitle);
}));
