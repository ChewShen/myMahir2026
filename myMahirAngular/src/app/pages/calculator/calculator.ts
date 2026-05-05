import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
  public num1 = 0;
  public num2 = 0;
  public result = 0;

  btnCalculate(operator:string){
    if(operator == "+"){
      this.result = Number(this.num1) + Number(this.num2);
    } else if (operator == "-" ) {
      this.result = Number(this.num1) - Number(this.num2);
    }
  }
}
