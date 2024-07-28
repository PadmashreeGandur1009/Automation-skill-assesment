import { Page, expect } from '@playwright/test';

//el = Locators
const el = {

    closeButton: 'button[type="close"]',
    countryName: '[data-testid="search-input"]',
    selectJapan: '[data-testid="Japan-name"]',
    verifyTitle: '[data-testid="sim-detail-operator-title"]',
    verifyCoverage: '[data-testid="COVERAGE-value"]',
    verifyData: '[data-testid="DATA-value"]',
    verifyValidity: '[data-testid="VALIDITY-value"]',
    verifyPrice: '[data-testid="PRICE-value"]'

}


export default class AiraloWebsitePage {
    private page: Page;
    
    constructor(page: Page) {
      this.page = page;
    }

/** 
 * Actions of the Page
 */

async clickCloseButton(){
    await this.page.locator(el.closeButton).click();
}

async fillInCountryName(countryname: string){
  await this.page.locator(el.countryName).waitFor();
  await this.page.fill(el.countryName, countryname.toString());
}

async selectJapan(){
    await this.page.locator(el.selectJapan).waitFor();
}

/** 
 * Assertions of the Page
 */

async verifyTitle(title: string){
    await expect(this.page.locator(el.verifyTitle)).toHaveText(title);
}

async verifyCoverage(coverage: string){
    const val = this.page.locator(el.verifyCoverage).first();
    await expect(val).toHaveText(coverage);
}

async verifyValidity(validity: string){
    const val = this.page.locator(el.verifyValidity).first();
    await expect(val).toHaveText(validity);
}

async verifyData(data: string){
    const val = this.page.locator(el.verifyData).first();
    await expect(val).toHaveText(data);
}

async verifyPrice(price: string){
    const val = this.page.locator(el.verifyPrice).first();
    await expect(val).toHaveText(price);
}
}
