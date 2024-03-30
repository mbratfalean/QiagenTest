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
(0, test_1.test)("Test 1 : Test wrong username correct password", (_a) => __awaiter(void 0, [_a], void 0, function* ({ page, browser, }) {
    //Open page
    yield page.goto(process.env.URL);
    //Assert
    yield (0, test_1.expect)(page).toHaveTitle(landingPage_1.landingPageTitle);
    yield page.locator(landingPage_1.username).fill(process.env.USERNAMEINCORECT);
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toBeAttached();
    yield (0, test_1.expect)(page.locator(landingPage_1.errorMessageLocator)).toContainText('Your username is invalid!');
}));
