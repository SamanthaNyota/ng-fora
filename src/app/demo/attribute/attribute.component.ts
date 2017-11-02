import {Component, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'rc-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  buttonDisabled = true;
  inputType='number';
  i =0;
  constructor(private zone:NgZone) { }

  ngOnInit() {

  }
  changeType(event){
    const value = event.target.value;
    this.inputType = value;
  }

  changePlaceholder(){

  }

  display(obj){
    console.log(obj.value);
  }


  updateZone(){

    this.zone.run(()=>{
      console.log('updating view for the '+ ++this.i+'e time');
    })
  }

}
