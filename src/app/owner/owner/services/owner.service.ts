import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {OwnerConfig} from '../model/ownerconfig';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OwnerService {

    /*
    RFC: i didnt use subjects here, because there is only 1 config
     */

    private configURL: string = environment.rootUrl + 'config';

    constructor(private http: HttpClient) {
    }


    getConfig(): Observable<OwnerConfig> {
        return this.http.get<OwnerConfig>(this.configURL);
    }


    save(config: OwnerConfig) {
        console.log(config);
        this.http.post(this.configURL, config).subscribe();
    }
}
