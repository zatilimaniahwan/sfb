import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxinfo-form',
  templateUrl: './boxinfo-form.page.html',
  styleUrls: ['./boxinfo-form.page.scss'],
})
export class BoxinfoFormPage implements OnInit {
title='';
  constructor() { }

  ngOnInit() {
    this.title='Add New Data';
  }

}
