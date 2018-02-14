import { HttpHeaders } from '@angular/common/http';

export class Endpoint {
    public static eco = "http://53.88.75.34:9081/nc0/api/safira/eco/find?filter-tasks=present";
    public static coverPage = "http://53.88.75.34:9081/nc0/api/safira/eco/cover-page?eco-number=";

    public static headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            'SM_USER': 'vbalimi'
        })
    };
}
