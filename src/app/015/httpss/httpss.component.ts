import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
// import { img } from '../../myAssets/img/day';
@Component({
  selector: 'app-httpss',
  templateUrl: './httpss.component.html',
  styleUrls: ['./httpss.component.css']
})
export class HttpssComponent implements OnInit {
  bg:string;
  showCard:boolean=false;
  temp: number;
  city: string;
  cardShow: boolean = false;
  myWeather: any = [];
  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth()
  timeH = this.date.getHours();
  timeM = this.date.getMinutes();
  weatherType: string;
  tempMin: any;
  tempMax: any;
  humidity: number;
  cityTemp: string;
  weatherObj: any = {
    0: ['clear sky', 'https://openweathermap.org/img/wn/01n.png', 'https://openweathermap.org/img/wn/01d.png','../../../assets/myAssets/img/clear.jpg'],
    1: ['few clouds', 'https://openweathermap.org/img/wn/02n.png', 'https://openweathermap.org/img/wn/02d.png','../../../assets/myAssets/img/few cloud.jpg'],
    2: ['scattered clouds', 'https://openweathermap.org/img/wn/03n.png', 'https://openweathermap.org/img/wn/03d.png','../../../assets/myAssets/img/scattered.jpg'],
    3: ['broken clouds', 'https://openweathermap.org/img/wn/04n.png', 'https://openweathermap.org/img/wn/04d.png','../../../assets/myAssets/img/broken.jpg'],
    4: ['shower rain', 'https://openweathermap.org/img/wn/05n.png', 'https://openweathermap.org/img/wn/05d.png','../../../assets/myAssets/img/shower.jpg'],
    5: ['rain', 'https://openweathermap.org/img/wn/06n.png', 'https://openweathermap.org/img/wn/06d.png','../../../assets/myAssets/img/rain.jpg'],

    6: ['thunderstorm', 'https://openweathermap.org/img/wn/07n.png', 'https://openweathermap.org/img/wn/07d.png','../../../assets/myAssets/img/thunder.jpg'],
    7: ['snow', 'https://openweathermap.org/img/wn/08n.png', 'https://openweathermap.org/img/wn/08d.png','../../../assets/myAssets/img/snow.jpg'],
    8: ['mist', 'https://openweathermap.org/img/wn/09n.png', 'https://openweathermap.org/img/wn/09d.png','../../../assets/myAssets/img/mist.jpg']
  }
  imgSrc: string;
  constructor(private weather: WeatherService) {

  }

  setData() {
// this.bg="url("+this.weatherObj[0][3]+")";
console.log("url(../../../../../assets/myAssets/img/clear.jpg)");
console.log(this.bg);


console.log(this.bg+"nbbg");

    this.showCard=true
    console.log(this.city + "this is city");

    this.cityTemp = this.city;
    this.cardShow = true;
    this.weather.getData(this.cityTemp).subscribe((data) => {
      this.myWeather = data;
      console.log(this.myWeather);
      this.humidity = this.myWeather.main.humidity;
      this.tempMin = this.myWeather.main.temp_min - 273.15;
      this.tempMax = this.myWeather.main.temp_max - 273.15;
      
      this.temp = this.myWeather.main.temp - 273.15
      this.weatherType = this.myWeather.weather[0].description;
      console.log(this.weatherType + "type");
      for (let index = 0; index <= 8; index++) {

        if (this.weatherObj[index][0] == this.weatherType) {
          console.log("here uour logic work");
          this.imgSrc = this.weatherObj[index][2]
          console.log(this.imgSrc);
          this.bg="url("+this.weatherObj[index][3]+")";

  
        }
      }
      
    });
  }
  ngOnInit(): void {
  }

 
}