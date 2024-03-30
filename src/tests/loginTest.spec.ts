import  { test, expect } from "@playwright/test";
import {
  errorMessageLocator,
        landingPageTitle, logginButton, password, username
    } from '../pageobjects/landingPage';
    import {
      userPageTitle,loginMessageLocator, logoutButton} from '../pageobjects/userPage'
    

    test("Test 1 : Test invalid login wrong username", async ({
        page,
      }) => {
     
        //Open page
        await page.goto(process.env.URL!) ;
      
        //Assert
        await expect(page).toHaveTitle(landingPageTitle);

        await page.locator(username).fill(process.env.USERNAMEINCORECT!);
        await page.locator(password).fill(process.env.PASSWORDCORECT!);
        await page.locator(logginButton).click();
        await expect(page.locator(errorMessageLocator)).toBeAttached();
        await expect(page.locator(errorMessageLocator)).toContainText('Your username is invalid!');
      });    

      test("Test 2 : Test invalid login wrong password", async ({
        page,
      }) => {
     
        //Open page
        await page.goto(process.env.URL!) ;
      
        //Assert
        await expect(page).toHaveTitle(landingPageTitle);

        await page.locator(username).fill(process.env.USERNAMECORECT!);
        await page.locator(password).fill(process.env.PASSWORDINCORECT!);
        await page.locator(logginButton).click();
        await expect(page.locator(errorMessageLocator)).toBeAttached();
        await expect(page.locator(errorMessageLocator)).toContainText('Your password is invalid!');
      }); 

      test("Test 3 : Test invalid login wrong username and password", async ({
        page,
      }) => {
     
        //Open page
        await page.goto(process.env.URL!) ;
      
        //Assert
        await expect(page).toHaveTitle(landingPageTitle);

        await page.locator(username).fill(process.env.USERNAMEINCORECT!);
        await page.locator(password).fill(process.env.PASSWORDINCORECT!);
        await page.locator(logginButton).click();
        await expect(page.locator(errorMessageLocator)).toBeAttached();
        await expect(page.locator(errorMessageLocator)).toContainText('Your username is invalid!');
      }); 

      test("Test 3 : Test empty credentials", async ({
        page,
      }) => {
     
        //Open page
        await page.goto(process.env.URL!) ;
      
        //Assert
        await expect(page).toHaveTitle(landingPageTitle);

        await page.locator(logginButton).click();
        await expect(page.locator(errorMessageLocator)).toBeAttached();
        await expect(page.locator(errorMessageLocator)).toContainText('Your username is invalid!');
      }); 

      test("Test 4 : Test correct credentials", async ({
        page,
      }) => {
     
        //Open page
        await page.goto(process.env.URL!) ;
      
        //Assert
        await expect(page).toHaveTitle(landingPageTitle);

        await page.locator(username).fill(process.env.USERNAMECORECT!);
        await page.locator(password).fill(process.env.PASSWORDCORECT!);
        await page.locator(logginButton).click();
        expect(page).toHaveTitle(userPageTitle);
        await expect(page.locator(loginMessageLocator)).toBeAttached();
        await expect(page.locator(loginMessageLocator)).toContainText('You logged into a secure area!');

      }); 

      test("Test 5 : Test logout", async ({
        page,
      }) => {
     
        //Open page
        await page.goto(process.env.URL!) ;
      
        //Assert
        await expect(page).toHaveTitle(landingPageTitle);

        await page.locator(username).fill(process.env.USERNAMECORECT!);
        await page.locator(password).fill(process.env.PASSWORDCORECT!);
        await page.locator(logginButton).click();
        expect(page).toHaveTitle(userPageTitle);
        await expect(page.locator(loginMessageLocator)).toBeAttached();
        await expect(page.locator(loginMessageLocator)).toContainText('You logged into a secure area!');

        await page.locator(logoutButton).click();
        await expect(page).toHaveTitle(landingPageTitle);

      }); 