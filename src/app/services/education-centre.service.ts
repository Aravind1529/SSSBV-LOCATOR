import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EducationCentre } from '../models/education-centre.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationCentreService {
  // constructor(private http: HttpClient) {

  // }
  private mockCentres: EducationCentre[] = [
    {     id: 1,
      name: 'Vignesh Flats Balvikas Centre',
	  samithiName: 'Valmiki Nagar Samithi',
	  guruName: 'Usha Ramachandran',
      address: 'A2, Vignesh Flats, South Mada Street, Thiruvanmiyur',
      area: 'Thiruvanmiyur',
      pincode: '600041',
      type: 'Residential Balvikas',
      contact: '9444620106'
    },{     id: 2,
      name: 'Kottivakkam Balvikas Centre',
	  samithiName: 'Valmiki Nagar Samithi',
	  guruName: 'Anusha Veeraraghavan, Rajeswari Swaminathan',
      address: '2/414 AGS Colony 3rd cross street Kottivakkam',
      area: 'Kottivakkam',
      pincode: '600041',
      type: 'Residential Balvikas',
      contact: '9363444980, 9087280713'
    },{     id: 3,
      name: 'Kottivakkam Balvikas Centre',
	  samithiName: 'Valmiki Nagar Samithi',
	  guruName: 'Anuradha Kumar',
      address: '2/414 AGS Colony 3rd cross street Kottivakkam',
      area: 'Kottivakkam',
      pincode: '600041',
      type: 'Residential Balvikas',
      contact: '9840535823'
    },{     id: 4,
      name: 'Appaswamy Springs Balvikas Centre',
	  samithiName: 'Valmiki Nagar Samithi',
	  guruName: 'Gayatri Krishnamoorthy, Shruthi S',
      address: 'Appaswamy Springs Rajaji Nagar Thiruvanmiyur ',
      area: 'Thiruvanmiyur',
      pincode: '600041',
      type: 'Residential Balvikas',
      contact: '9677054292, 9150954585'
    },{     id: 5,
      name: 'Indira Nagar Balvikas Centre',
	  samithiName: 'Indira Nagar Samithi',
	  guruName: 'G. Sai Veena', 
      address: 'Olympiad Jayanthi, LB Road, Thiruvanmiyur',
      area: 'Thiruvanmiyur',
      pincode: '600041',
      type: 'Residential Balvikas',
      contact: '9840056200'
    },{     id: 6,
      name: 'Indira Nagar Balvikas Centre',
	  samithiName: 'Indira Nagar Samithi',
	  guruName: 'Ms. Bhavya', 
      address: 'Prime Terrace Apartments, LB Road, Thiruvanmiyur',
      area: 'Adayar',
      pincode: '600041',
      type: 'Residential Balvikas',
      contact: '9840056200'
    },
  ];

  getCentres() {
    console.log(JSON.stringify(this.mockCentres));
  }

  searchCentres(area: string, pincode: string): Observable<EducationCentre[]> {
    this.getCentres();
    return of(this.mockCentres.filter(centre => 
      centre.area.toLowerCase().includes(area.toLowerCase()) &&
      centre.pincode.includes(pincode)
    ));
  }
  
}