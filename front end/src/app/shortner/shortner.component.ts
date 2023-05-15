import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-shortner',
  templateUrl: './shortner.component.html',
  styleUrls: ['./shortner.component.css']
})
export class ShortnerComponent {
  
url : string = "";
originalUrl :string = "";
isUrlGenerated : boolean = false;
isErrorGenerated : boolean = false;
shortUrl : string ="";
constructor(private urlShortnerService : UrlService) { }

ngOnInit(): void {
  this.isUrlGenerated = false;
}

generateShortUrl() {
  this.urlShortnerService.generateShortUrl(this.url).subscribe((res:any)=>{
    if(res == null) {
      this.isErrorGenerated = true; 
    } else {
      this.isUrlGenerated = true;
      this.isErrorGenerated = false;
      this.shortUrl = res.shortUrl;
      this.originalUrl = res.originalUrl;
    }
  
})
}

}
