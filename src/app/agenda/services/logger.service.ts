import {Injectable} from '@angular/core';

@Injectable()
export class Logger {

    constructor() {
    }

    public static log(message: string) {
        console.log(message);
    }

}
