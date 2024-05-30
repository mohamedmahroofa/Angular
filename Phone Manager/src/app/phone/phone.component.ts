import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../phone.service';
import { Phone } from '../phone.model';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrl: './phone.component.scss',
})
export class PhoneComponent implements OnInit {
  phone: Phone = {
    id: '',
    name: '',
    manufacturer: '',
    price: 0,
    operatingSystem: '',
  }; //Initialize phone object

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private phoneService: PhoneService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Get phone id from route
    // Fetch phone details if id exist
    if (id) {
      this.phoneService.getPhone(id).subscribe((data) => {
        this.phone = data;
      });
    }
  }

  //Save Phone details
  savePhone() {
    if (this.phone.id) {
      this.phoneService.updatePhone(this.phone).subscribe(() => this.goBack());
    } else {
      this.phoneService.addPhone(this.phone).subscribe(() => this.goBack());
    }
  }

  // Delete Phone
  deletePhone() {
    if (this.phone.id) {
      this.phoneService
        .deletePhone(this.phone.id)
        .subscribe(() => this.goBack());
    }
  }

  // Navigate back to phone list
  goBack() {
    this.router.navigate(['/phones']);
  }
}
