import { HttpHeaders } from '@angular/common/http';

export class Endpoint {
    public static eco = "http://localhost:3000/all_ecos";
    public static coverPage = "http://localhost:3000/";

    public static headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Accept-Language': 'en',
            'SM_USER': 'vbalimi'
        })
    };
}
