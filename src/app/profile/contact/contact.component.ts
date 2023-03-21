import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  model: any = {};

  name: string;
  email: string;
  subject: string;
  message: string;

  constructor(private http: HttpClient) {}


ngOnInit(): void {
  
}

  onSubmit() {
    const url = 'https://formspree.io/f/xqkodagq';
    const body = { name: this.name, replyto: this.email, _subject: this.subject, message: this.message };
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post(url, body, { headers }).toPromise().then(() => {
      alert('Votre message a été envoyé avec succès!');
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    });
  }
}



