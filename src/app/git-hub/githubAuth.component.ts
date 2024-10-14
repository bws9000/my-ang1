import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'github-app',
  templateUrl: 'githubAuth.component.html',
  styleUrls: ['githubAuth.component.scss'],
  standalone: true,
})
export class GithubAuthComponent implements OnChanges {
  @Input() title: string = 'Default Title';
  @Input() messageFromReact: string = '';
  @Output() dataSent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['messageFromReact']) {
      console.log(
        'Message from React:',
        changes['messageFromReact'].currentValue
      );
    }
  }

  sendData() {
    this.dataSent.emit('This is data from the Angular web component!');
  }
}
