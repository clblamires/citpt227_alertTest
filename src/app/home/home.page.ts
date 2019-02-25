import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string;

  constructor( 
    public alertCtrl: AlertController, 
    public toastCtrl: ToastController 
  ){
    this.getName();
  }

  async getName(){
    let prompt = await this.alertCtrl.create({
      header: 'Who are you?',
      message: 'Please enter your name',
      inputs: [{
        name: 'username',
        type: 'text'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Save',
        handler: data => {
          this.name = data.username;
          toast.present();
        }
      }]
    });

    let toast = await this.toastCtrl.create({
      message: "Name saved!",
      duration: 5000,
      showCloseButton: true,
      color: 'dark'
    });
    


    prompt.present();
  }


  ngOnInit(){}

}
