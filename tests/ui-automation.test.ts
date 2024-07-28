import { test  } from '@playwright/test';
import { AiraloWebsiteFlow } from '../flows/airalo-website.flow';

test('User navigates to Airola website and validates Package details', async ({ page }) => { 
const airaloWebsiteFlow = new AiraloWebsiteFlow(page);
const countryname = 'japan';

const searchTerms = {
    
      title: 'Moshi Moshi',
      coverage: 'Japan',
      data: '1 GB',
      validity: '7 Days',
      price: '$4.50 USD'
}

//Navigates to the Website
  await page.goto("https://www.airalo.com/");
  await page.getByTestId('close-button').click();

//Enters and Searchs for Japan in search field   
  await airaloWebsiteFlow.fillInCountryName(countryname);
  await page.getByTestId('Japan-name').click();
  await page.getByTestId('sim-package-item').first().click();

//Verifys the Package details present in the popup 
  await airaloWebsiteFlow.verifyTitle(searchTerms.title);
  await airaloWebsiteFlow.verifyCoverage(searchTerms.coverage);
  await airaloWebsiteFlow.verifyValidity(searchTerms.validity);
  await airaloWebsiteFlow.verifyData(searchTerms.data);
  await airaloWebsiteFlow.verifyPrice(searchTerms.price);

  page.close();

});