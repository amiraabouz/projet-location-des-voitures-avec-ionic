import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import {SQLite } from '@ionic-native/sqlite';
import { AlertController} from 'ionic-angular';
const DATABASE_FILE_NAME: string = 'data.db';
@IonicPage()
@Component({
  selector: 'page-creationcompte',
  templateUrl: 'creationcompte.html',
})
export class CreationcomptePage{
private db: SQLiteObject;
// comptes: string[] = [];
// nom: string;
// prenom: string;
// email: string;
// telephone: string;
// mdp: string;
// constructor(public navCtrl: NavController, private sqlite: SQLite) {
// this.createDatabaseFile();
// }

// private createDatabaseFile(): void {
//   this.sqlite.create({
//   name: DATABASE_FILE_NAME,
//   location: 'default'
//   })
//   .then((db: SQLiteObject) => {
//   console.log('Bdd créée !');
//   this.db = db;
//   this.createTables();
//   })
//   .catch(e => console.log(e));
//   }
  
//   private createTables(): void {
//     this.db.executeSql('CREATE TABLE IF NOT EXISTS `COMPTES` ( `id` INTEGER NOT NULL, `nom` TEXT NOT NULL,`prenom` TEXT NOT NULL,`email` TEXT NOT NULL,`telephone` TEXT NOT NULL,`mdp` TEXT NOT NULL  PRIMARY KEY(`id`))',{})
//     .then(() => {
//     console.log('Table Comptes created !');
//     })
//   .catch(e => console.log(e));
//   }


//   public saveMyAccount() {
//     console.log('Nom -> ' + this.nom);
//     console.log('Prenoù -> ' + this.prenom + '/5');
//     console.log('Email -> ' + this.email);
//     console.log('Telephone -> ' + this.telephone);
//     console.log('MDP -> ' + this.mdp);

//     // INSERT INTO `CATEGORIES` (name) VALUES('Test');
//     // INSERT INTO `MOVIES`(name, eval, desc, categoryId) VALUES ('Nom film', 3, 'Description', 1)
//     this.db.executeSql('INSERT INTO `COMPTES`(nom, prenom, email, telephone, mdp ) VALUES (\'' + this.nom + '\', '+ 
//     this.prenom +', \''+ this.email +'\ '+this.telephone +'\ '+this.mdp+ '\'  , last_insert_rowid())', {})
//     .then(() => console.log('Movie inserted !'))
//     .catch(e => console.log(e));
    
//     }
    
// }




  text: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;

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
    
    this.db.executeSql('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT,`username` TEXT NOT NULL, email TEXT NOT NULL,`password` TEXT NOT NULL,`dob` TEXT NOT NULL)', {})
    .then(() => {
      console.log('Table user created successfully');
    })
    .catch((error) => {
      console.error('Error creating user table:', error);
    });
  
  }
 
  saveMyAccount() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Insert user into database
    const sql = 'INSERT INTO user (username, email,`password`, dob) VALUES (?, ?, ?, ?)';
    const values = [this.username, this.email, this.password, this.dob];
    this.db.executeSql(sql, values)
      .then(() => {
        alert('Account created successfully!');
        this.navCtrl.pop();
      })
      .catch((error) => {
        console.error('Error creating account:', error);
        alert('An error occurred while creating your account. Please try again.');
      });
  }
 
}
