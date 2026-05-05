import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-homepage',
  imports: [FormsModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
   public name: string = "Angular Index!" ;
   public inputText: string = '';

    btnClick(){
    this.name = this.inputText;
    
  }
}
