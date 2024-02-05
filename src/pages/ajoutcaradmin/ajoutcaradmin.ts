import { Component } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { IonicPage, NavController } from 'ionic-angular';
import {SQLite } from '@ionic-native/sqlite';
import { AlertController} from 'ionic-angular';
const DATABASE_FILE_NAME: string = 'data.db';
@IonicPage()
@Component({
  selector: 'page-ajoutcaradmin',
  templateUrl: 'ajoutcaradmin.html',
})
export class AjoutcaradminPage {
  private db: SQLiteObject;

  text: string;
  nomv: string;
  url: string;
  type: string;
  prix: string;
  nombreportes: string;

  constructor(public navCtrl: NavController, private sqlite: SQLite, private alertCtrl: AlertController) {this.createDatabaseFile();}

  retour(){
    this.navCtrl.pop();
}
  private createDatabaseFile(): void {
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      this.createTables();
     
    }).catch(e => console.log(e));
  }

  private createTables(): void {
    
    this.db.executeSql('CREATE TABLE IF NOT EXISTS car (id INTEGER PRIMARY KEY AUTOINCREMENT,`nomv` TEXT NOT NULL, `prix` TEXT NOT NULL,`url` TEXT NOT NULL,`type` TEXT NOT NULL, `nombreportes` TEXT NOT NULL)', {})
    .then(() => {
      console.log('Table car created successfully');
    })
    .catch((error) => {
      console.error('Error creating car table:', error);
    });
  
  }
 
  saveMyCar() {
   

    // Insert car into database
    const sql = 'INSERT INTO car (nomv, prix,url,type,nombreportes) VALUES (?, ?, ?, ?,?)';
    const values = [this.nomv, this.prix, this.url, this.type,this.nombreportes];
    this.db.executeSql(sql, values)
      .then(() => {
        alert('car added successfully!');
        this.navCtrl.pop();
      })
      .catch((error) => {
        console.error('Error creating car:', error);
        alert('An error occurred while adding a car. Please try again.');
      });
  }
 
}