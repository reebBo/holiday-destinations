import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  today: Date = new Date();
  season!: string;
  pictures: any = [];
  places: any = [];


  constructor(private placesS: PlacesService) { }

  ngOnInit() {
    this.getSeason();
    // this.placesS.getCities().subscribe(
    //   city => {
    //     alert(JSON.stringify(city))

    //   }
    // )
    // this.placesS.getPics().subscribe(
    //   pics => {
    //     // alert(JSON.stringify(pics))
    //   })

    this.placesS.getResources().subscribe(x => {
      this.places = x;
      // alert(JSON.stringify(this.places));
    })
  }

  getSeason() {
    const month = this.today.getMonth();

    if (month < 2 || month == 11) {
      this.season = "Winter";
    }
    else if (month > 2 && month < 5) {
      this.season = "Spring";
    }
    else if (month > 4 && month < 8) {
      this.season = "Summer";
    }
    else if (month > 8 && month < 11) {
      this.season = "Autumn";
    }
  }



}