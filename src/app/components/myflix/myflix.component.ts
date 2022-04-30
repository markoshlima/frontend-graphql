import { Component, OnInit } from '@angular/core';
import { GraphqlService } from 'src/app/services/graphql.service';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-myflix',
  templateUrl: './myflix.component.html',
  styleUrls: ['./myflix.component.css']
})
export class MyflixComponent implements OnInit {

  resultGraphQL = <any>{}
  resultRest = <any>{};

  constructor(
    private serviceGraphQL: GraphqlService,
    private serviceRest: RestService) { }

  ngOnInit(): void {
    this.queryGraphQL();
    //this.queryRest();
  }

  queryGraphQL(){
    var queryGraphQLActors = { query: `query {
                                        getActor(id_actor: "bc85aa97-dbbc-4cd2-ac4d-35db2099866c") {
                                          name
                                        }
                                        listCharactersActor(id_actor: "bc85aa97-dbbc-4cd2-ac4d-35db2099866c") {
                                          items {
                                            id_movie
                                            name
                                          }
                                        }
                                        getMovie(id_movie: "be31ffef-fd7c-4ae3-9ec5-b9456209bd1f") {
                                          name
                                          year
                                        }  
                                        listWatchesMovie(id_movie: "be31ffef-fd7c-4ae3-9ec5-b9456209bd1f") {
                                          nextToken
                                          items {
                                            id_customer
                                          }
                                        }
                                        getCustomer(id_customer: "90c0edd4-1b8c-477a-8357-2d08845a9fa7") {
                                          name
                                        }
                                      }`
                              }

    this.serviceGraphQL.query(JSON.stringify(queryGraphQLActors)).subscribe(
      resp => {
        this.resultGraphQL = resp;
      },
      err => console.log(err)
    );
  }

  queryRest(){
    
    this.serviceRest.getActor("bc85aa97-dbbc-4cd2-ac4d-35db2099866c").subscribe(
      resp => {
        this.resultRest.actor = resp;
        console.log(this.resultRest)
      },
      err => console.log(err)
    );
    
    this.serviceRest.listCharactersActor("bc85aa97-dbbc-4cd2-ac4d-35db2099866c").subscribe(
      resp => {
        this.resultRest.listCharacters = resp;
        console.log(this.resultRest)
      },
      err => console.log(err)
    );

    this.serviceRest.getMovie("be31ffef-fd7c-4ae3-9ec5-b9456209bd1f").subscribe(
      resp => {
        this.resultRest.movie = resp;
        console.log(this.resultRest)
      },
      err => console.log(err)
    );

    this.serviceRest.listWatchesMovie("be31ffef-fd7c-4ae3-9ec5-b9456209bd1f").subscribe(
      resp => {
        this.resultRest.watch = resp;
        console.log(this.resultRest)
      },
      err => console.log(err)
    );

    this.serviceRest.getCustomer("90c0edd4-1b8c-477a-8357-2d08845a9fa7").subscribe(
      resp => {
        this.resultRest.customer = resp;
        console.log(this.resultRest)
      },
      err => console.log(err)
    ); 


  }

}