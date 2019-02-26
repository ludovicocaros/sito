import { Component,OnInit} from '@angular/core';
import * as $ from 'jquery';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mioForm:FormGroup;
  mioForm2:FormGroup;

  
  
    
  constructor( private router: Router) {
    
  
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
  var password = $("#password").val();
  if( dati.username == username && dati.password == password){
    this.router.navigateByUrl("modulo");
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
  
    casa(router:Router){
      this.router.navigate(["home"]);
    }
    
    toggle_primo(){$("#form").toggle();}
    toggle_secondo(){$("#form2").toggle();}
    scompare_form(){$("#form").css("display","none");}
    scompare_formdue(){$("#form2").css("display","none");}
    
    
    
    
    ngOnInit() {
      
      $("#form").css("display","none");
      $("#form2").css("display","none");
      
      
    }
  
  }
  
 
  