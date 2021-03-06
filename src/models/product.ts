import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-models',
  templateUrl: 'models.html',
})

// product
export class Product {
    public id: number;
    public address_number: number;
    public street_name: string;
    public city: string;
    public zip_code: number;
    public apt_number: number;    // NULL by default bc optional
    public details: string;
    public image: string;

    public num_residents: number;
    public num_bedrooms: number;
    public num_bathrooms: number;

  
constructor() {}






}