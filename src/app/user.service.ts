import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map, filter } from 'rxjs/operators';

import { Query, User } from './types';

@Injectable()
export class UserService {

  constructor(private apollo: Apollo) { }

  getAllUsers(searchTerm: String){
    return this.apollo.watchQuery<Query>({
      pollInterval: 500,
      query: gql`
        query allUsers($searchTerm: String){
          allUsers(searchTerm: $searchTerm){
            _id
            email
            firstName
            lastName
          }
        }
      `,
      variables: {
        searchTerm: searchTerm
      }
    })
      .valueChanges
      .pipe(
        map(result => result.data.allUsers)
      );
  }

  registerUser(email: string, password: string, firstName: string, lastName: string){
    return this.apollo.mutate({
      mutation: gql`
        mutation register($email: String!, $password: String!, $firstName: String!, $lastName: String!){
          register(email: $email, password: $password, firstName: $firstName, lastName: $lastName){
            _id
            email
            firstName
            lastName
          }
        }
      `,
      variables: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      }
    });
  }
}
