import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recupera_eventi(){
    var params={};
    params['token']='JW3BZZWKTGV2VEUB6ACR';
    params['location.address']='rome';
    
     $.ajax({
               url:"https://www.eventbriteapi.com/v3/events/search/",
               data: params,
               success:function(data){
               for(var i= 0; i<9 ; i++){
                $("table").append("<tr> <td>"+ (data.events[i].name.text) + "</td>"+"<td>"+ (data.events[i].end.local) + "</td> </tr>");
              } 
              
              
              },
              error:function(xhr){
                console.log(xhr);
              }
               
              });
            }
   
            
    recuperaeventi2() {
      $(function(){
        $.ajax({
         type:'GET',
         url:"https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=8ec58347383a461e8fbc05407c025e30&pageSize=10",
         data:'html',
         success: function(result){
            for(var i=0;i<10;i++)

              

              $("#news").append("<tr> <td>"+(result.articles[i].title)+"</td>"+"<td>"+(result.articles[i].source.name)+"</td>");
  
           
         },
        error: function(xhr) {
  
        console.log(xhr);
        }
      });
    
    
    
       });


   
          }
        }
       
