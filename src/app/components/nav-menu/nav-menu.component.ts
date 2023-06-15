import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  public featuresActive:boolean = false;
  public featuresIconShown:any = 'down';
  public companyActive:boolean = false;
  public companyIconShown = 'down';
  public menuOpen: boolean = false;

  openFeatures(){
    this.featuresActive = !this.featuresActive;

    if(this.featuresActive){
      this.featuresIconShown = "up"
    }else this.featuresIconShown = "down"
  }

  openCompany(){
    this.companyActive = !this.companyActive;

    if(this.companyActive){
      this.companyIconShown = "up"
    }else this.companyIconShown = "down"
  }

  showMenu(){
    this.menuOpen = !this.menuOpen
  }

}
