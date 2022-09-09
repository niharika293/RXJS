import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit , AfterViewInit{

  vidList : any = []; 
  constructor() { }

  @ViewChild('btnAdd') addBtn!: ElementRef; //refereing to HTML template variable

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    let vidCount = 0;
    let vidName = '';
    
    fromEvent(this.addBtn.nativeElement,'click').subscribe((res : any ) => {
      vidCount ++;
      vidName = "Video " + vidCount;
      this.vidList.push(vidName);
    }); //writing here, as we're accessing view child data which is available once the entire view gets rendered
  }


}
