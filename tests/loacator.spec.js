// @ts-nocheck
import { test, expect } from '@playwright/test';
import exp from 'constants';

test('TC-1 Login', async ({ page }) => {
    test.slow();
  await page.goto('https://www.saucedemo.com/');

  const inputUname = page.locator('#user-name');
  await inputUname.fill ('standard_user');
  await expect(inputUname).toHaveValue('standard_user');

  const inputPassword = page.locator ('#password');
  await inputPassword.fill ('secret_sauce');
  await expect(inputPassword).toHaveValue ('secret_sauce');

  const buttonLogin = page.locator('#login-button');
  await buttonLogin.click();
});

test('TC-2 Checkout Some Items', async ({ page }) => {
    test.slow();
    await page.goto('https://www.saucedemo.com/',{timeout: 30000 });
  
    const inputUname = page.locator('#user-name');
    await inputUname.fill ('standard_user',{timeout: 30000});
    await expect(inputUname).toHaveValue('standard_user');
    
    const inputPassword = page.locator ('#password');
    await inputPassword.fill ('secret_sauce',{timeout: 30000 });
    await expect(inputPassword).toHaveValue ('secret_sauce');
  
    const buttonLogin = page.locator('#login-button');
    await buttonLogin.click({timeout: 30000 });

    const firstItem = page.locator('#add-to-cart-sauce-labs-bike-light');
    await firstItem.click({timeout: 30000 });
    
    const secondItem = page.locator('#add-to-cart-sauce-labs-backpack');
    await secondItem.click({timeout: 30000 });
    
    const cartItem = page.locator('#shopping_cart_container > a');
    await cartItem.click({timeout: 30000 });

    const checkoutItem = page.locator ('#checkout');
    await checkoutItem.click({timeout: 30000 });

    const firstName = page.locator('#first-name');
    await firstName.fill('Helda',{timeout: 30000 });
    await expect(firstName).toHaveValue('Helda');

    const lastName = page.locator ('#last-name');
    await lastName.fill('Triyanti',{timeout: 30000 });
    await expect(lastName).toHaveValue('Triyanti');

    const postalCode = page.locator ('#postal-code');
    await postalCode.fill ('12345',{timeout: 30000 });
    await expect(postalCode).toHaveValue('12345');

    const continueButton = page.locator ('#continue');
    await continueButton.click({timeout: 30000 });

    const finishButton = page.locator ('#finish');
    await finishButton.click({timeout: 30000 });

    const backToHome = page.locator ('#back-to-products');
    await backToHome.click({timeout: 30000 });

});
