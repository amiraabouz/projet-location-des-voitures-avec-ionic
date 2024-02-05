import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreationcomptePage } from '../creationcompte/creationcompte';
import { DashboardPage } from '../dashboard/dashboard';
import { AlertController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
const DATABASE_FILE_NAME: string = 'data.db';
@Component({
selector: 'page-settings',
templateUrl: 'settings.html'
})
export class SettingsPage {
  private db: SQLiteObject;

  username: string;
  password: string;

  constructor(public navCtrl: NavController,public navParams: NavParams, private sqlite: SQLite, private alertCtrl: AlertController) {    
  }

  ngOnInit() {
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.db = db;
    })
    .catch((error) => {
      console.error('Error opening database:', error);
    });
  }
onGoToDashboard() {
    const sql = 'SELECT id FROM user WHERE username = ? AND password = ?';
    const values = [this.username, this.password];
    this.db.executeSql(sql, values)
      .then((result) => {
        if (result.rows.length > 0) {
          // Login successful, navigate to reservation page
          alert('Login successful');
        this.navCtrl.push(DashboardPage);
         
        } else {
          // Login failed, display error message
          alert('Invalid username or password.');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        alert('An error occurred while logging in. Please try again.');
      });
     
  }
onGoToCreationCompte (){
    this.navCtrl.push( CreationcomptePage );
}
  retour() {
    this.navCtrl.pop();
  }
}
