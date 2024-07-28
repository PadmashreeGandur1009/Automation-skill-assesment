import { Page } from '@playwright/test';
import AiraloWebsitePage from '../pages/airalo-website.page';

export class AiraloWebsiteFlow  {
    
    readonly page: Page;
    airaloWebsitePage: AiraloWebsitePage;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    airaloWebsiteFlow: any;
  
    constructor(page: Page) {
      this.page = page;
      this.airaloWebsitePage = new AiraloWebsitePage(page);
  
    }

async closePopup() {
    await this.airaloWebsitePage.clickCloseButton();
 }

async fillInCountryName(countryname: string){
   await this.airaloWebsitePage.fillInCountryName(countryname);
}

async selectJapan(){
   await this.airaloWebsitePage.selectJapan();
}

async verifyTitle (title: string){
   await this.airaloWebsitePage.verifyTitle(title);
}

async verifyCoverage (coverage: string){
   await this.airaloWebsitePage.verifyCoverage(coverage);
 }

async verifyValidity (validity: string){
   await this.airaloWebsitePage.verifyValidity(validity);
 }

async verifyData (data: string){
   await this.airaloWebsitePage.verifyData(data);
 }

async verifyPrice (price: string){
   await this.airaloWebsitePage.verifyPrice(price);
 }
}
