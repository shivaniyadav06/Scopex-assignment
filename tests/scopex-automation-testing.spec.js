const { test, expect } = require('@playwright/test');

test('Sign up functionality test', async ({ page }) => {
  // Navigate to the sign up page
  await page.goto('https://scopex.money/signup');

//  fill the name and email
  await page.getByLabel('Email').fill('enter-your-email');
  await page.getByLabel('Password').fill('enter-your-paasword');




  // Click the "Sign Up" button
  await page.click("//button[normalize-space()='Sign Up']");

  // Optionally, wait for a navigation or a success message to confirm sign up
  await page.waitForNavigation();
  await expect(page).toHaveURL("https://scopex.money/Dashboard");

});


test('Login and add recipient', async ({ page }) => {
  // Navigate to the sign up page
  await page.goto('https://scopex.money/Login');

//  fill the name and email
  await page.getByLabel('Email').fill('enter-your-email');
  await page.getByLabel('Password').fill('enter-your-paasword');


  // Click the "Sign Up" button
  await page.click("//button[normalize-space()='Log in']");

  // Optionally, wait for a navigation or a success message to confirm sign up
  await page.waitForNavigation();
  await expect(page).toHaveURL("https://scopex.money/Dashboard");

  await page.getByRole('button', { name: 'Recipients' }).click();

   // 6. Click on "Add Recipient" in the submenu
//   await page.waitForSelector('text=Add Recipient');

   // Now click "Add Recipient"
   await page.getByRole('link', { name: 'Add Recipient' }).click();

   // 7. Confirm that we navigated to the Add Recipient page
   await expect(page).toHaveURL('https://scopex.money/Add-Recipient');

});

test('Testing add recipient', async ({ page }) => {
  // Navigate to the sign up page
  await page.goto('https://scopex.money/Login');

//  fill the name and email
   await page.getByLabel('Email').fill('enter-your-email');
   await page.getByLabel('Password').fill('enter-your-paasword');


  // Click the "Sign Up" button
  await page.click("//button[normalize-space()='Log in']");

  // Optionally, wait for a navigation or a success message to confirm sign up
  await page.waitForNavigation();
  await expect(page).toHaveURL("https://scopex.money/Dashboard");

  await page.getByRole('button', { name: 'Recipients' }).click();


   // Now click "Add Recipient"
   await page.getByRole('link', { name: 'Add Recipient' }).click();

   // 7. Confirm that we navigated to the Add Recipient page
   await expect(page).toHaveURL('https://scopex.money/Add-Recipient');
    await page.fill('input[name="recipient_name"]', 'Test Recipient');
     await page.fill('input[name="recipient_nick_name"]', 'Test Nick');
     await page.fill('input[name="bank_account_number"]', '1234567890');
     await page.fill('input[name="ifsc_code"]', 'ABCD0123456');



});


test('Logout Script', async ({ page }) => {
  // 1. Go to the login page
  await page.goto('https://scopex.money/Login');

  // 2. Fill in the login form
    await page.getByLabel('Email').fill('enter-your-email');
    await page.getByLabel('Password').fill('enter-your-paasword');

  // 3. Click "Log in"
   await page.click("//button[normalize-space()='Log in']");

  // 4. Wait for the dashboard (or wherever it redirects post-login)
  await page.waitForNavigation();
  await expect(page).toHaveURL('https://scopex.money/Dashboard');


 await page.click("//*[name()='circle' and contains(@cx,'26')]");

  // or getByRole('button', { name: 'Profile' })

  // 6. Wait for the dropdown to appear, then click "Log out"
  await page.click("(//a[normalize-space()='Log out'])[1]");


  // 7. (Optional) Confirm we’re back at the login screen
//  await page.waitForNavigation();
  await expect(page).toHaveURL('https://scopex.money/#');
});

