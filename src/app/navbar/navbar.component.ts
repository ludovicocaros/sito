import { Component } from '@angular/core';
import * as $ from 'jquery';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  mioForm:FormGroup;
  mioForm2:FormGroup;


  
    
  constructor(private router: Router) {
  
  this.mioForm2 = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(2)]),
    cognome: new FormControl('', [Validators.required, Validators.minLength(5)]),
    citta: new FormControl('', [Validators.required, Validators.minLength(5)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    datadi_nascita: new FormControl('', [Validators.required]),
    residenza: new FormControl('', [Validators.required]),
    domicilio: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required])
  
  });

   this.mioForm = new FormGroup({
    username: new FormControl('', [
      Validators.required]),
    password: new FormControl('', [Validators.required])
    
  });

  }

  get username() { return this.mioForm.get('username'); }

  get password() { return this.mioForm.get('password'); }



   get nome() { return this.mioForm2.get('nome'); }

  get cognome() { return this.mioForm2.get('cognome'); }

  get datadi_nascita () { return this.mioForm2.get('datadi_nascita'); }

  get citta() { return this.mioForm2.get('citta'); }

  get mail() { return this.mioForm2.get('mail'); }

   get residenza() { return this.mioForm2.get('residenza'); }

   get domicilio() { return this.mioForm2.get('domicilio'); }

   get telefono() { return this.mioForm2.get('telefono'); }


  print() {
    console.log(this.mioForm2.value);
    console.log(this.mioForm.value);
    }



  getInfo() {
    console.log(this.mioForm2.value);
     console.log(this.mioForm.value);
  }

  login(router: Router){

  var dati={username:"jdoe", password:"jdoe"};
  var  username = $("#username").val();
  console.log(username);
  var password = $("#password").val();
  console.log(password);
  if( dati.username == username && dati.password == password){
    this.router.navigateByUrl('/modulo');
    }
    else
    {
      alert("error");
    }
  
  }
  
    
    
 
    messaggio(): void{
      if(this.mioForm2.get('nome').valid && this.mioForm2.get('citta').valid  && this.mioForm2.get('cognome').valid && this.mioForm2.get('domicilio').valid &&
      this.mioForm2.get('mail').valid && this.mioForm2.get('residenza').valid && this.mioForm2.get('telefono').valid && this.mioForm2.get('datadi_nascita').valid)  {
      alert("Registrazione completata!")};
    }
  
    

  
  }
  
 
  $(function(){
    $("#form").css("display","none")
    });
    $(function(){
    $("#primo").click(function(){
    $("#form").toggle()
    });
    });

    
  $(function(){
    $("#form2").css("display","none")
    });
    $(function(){
    $("#secondo").click(function(){
    $("#form2").toggle()
    });
    });

    
    $(function(){
      $("#secondo").click(function(){
      $("#form").css("display","none")
       });
      });
    
    $(function(){
      $("#primo").click(function(){
      $("#form2").css("display","none")
       });
      });