import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Phone } from '../phone.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss',
})
export class PhoneListComponent implements OnInit {
  phones: Phone[] = []; // Array to hold list of phones

  constructor(private phoneService: PhoneService, private router: Router) {}

  ngOnInit() {
    // Fetch phones on component initialization
    this.phoneService.getPhones().subscribe((data) => {
      this.phones = data;
    });
  }

  // Navigate to phone details component
  viewPhone(id: string) {
    this.router.navigate(['/phone', id]);
  }

  // Navigate to new phone form
  addPhone() {
    this.router.navigate(['/phone']);
  }
}
