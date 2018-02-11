import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
    private authersList: Array<string>;
    constructor(){
        this.authersList = ['Author1', 'Author2', 'Author3', 'Author4'];
    }
    getAuthorsList(){
        return this.authersList;
    }
}