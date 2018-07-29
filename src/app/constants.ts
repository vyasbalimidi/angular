import { HttpHeaders } from '@angular/common/http';

export class Endpoint {
    public static eco = "http://www.mocky.io/v2/5b5dfaec32000010001cfa9d";
    public static coverPage = "http://www.mocky.io/v2/5b5dfcd632000010001cfa9e";

    public static headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'Accept-Language': 'en',
            'SM_USER': 'vbalimi'
        })
    };
}
