/**
 * poc-data
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class BookApi {
    protected basePath = 'http://localhost:3000/api';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * Count instances of the model matched by where from the data source.
     * 
     * @param where Criteria to match model instances
     */
    public bookCount (where?: string, extraHttpRequestParams?: any ) : Observable<models.InlineResponse200> {
        const path = this.basePath + '/Books/count';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (where !== undefined) {
            queryParameters.set('where', String(where));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a new instance of the model and persist it into the data source.
     * 
     * @param data Model instance data
     */
    public bookCreate (data?: models.BookAdd, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + '/Books';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);
        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a change stream.
     * 
     * @param options 
     */
    public bookCreateChangeStreamGetBooksChangeStream (options?: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/Books/change-stream';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (options !== undefined) {
            queryParameters.set('options', String(options));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Create a change stream.
     * 
     * @param options 
     */
    public bookCreateChangeStreamPostBooksChangeStream (options?: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/Books/change-stream';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let formParams = new URLSearchParams();

        headerParams.set('Content-Type', 'application/x-www-form-urlencoded');

        formParams['options'] = options;

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = formParams.toString();

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Delete a model instance by {{id}} from the data source.
     * 
     * @param id Model id
     */
    public bookDeleteById (id: string, extraHttpRequestParams?: any ) : Observable<any> {
        const path = this.basePath + '/Books/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling bookDeleteById.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Check whether a model instance exists in the data source.
     * 
     * @param id Model id
     */
    public bookExistsGetBooksidExists (id: string, extraHttpRequestParams?: any ) : Observable<models.InlineResponse2002> {
        const path = this.basePath + '/Books/{id}/exists'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling bookExistsGetBooksidExists.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Check whether a model instance exists in the data source.
     * 
     * @param id Model id
     */
    public bookExistsHeadBooksid (id: string, extraHttpRequestParams?: any ) : Observable<models.InlineResponse2002> {
        const path = this.basePath + '/Books/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling bookExistsHeadBooksid.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'HEAD',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Find all instances of the model matched by filter from the data source.
     * 
     * @param filter Filter defining fields, where, include, order, offset, and limit
     */
    public bookFind (filter?: string, extraHttpRequestParams?: any ) : Observable<Array<models.Book>> {
        const path = this.basePath + '/Books';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (filter !== undefined) {
            queryParameters.set('filter', String(filter));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Find a model instance by {{id}} from the data source.
     * 
     * @param id Model id
     * @param filter Filter defining fields and include
     */
    public bookFindById (id: string, filter?: string, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + '/Books/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling bookFindById.');
        }
        if (filter !== undefined) {
            queryParameters.set('filter', String(filter));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Find first instance of the model matched by filter from the data source.
     * 
     * @param filter Filter defining fields, where, include, order, offset, and limit
     */
    public bookFindOne (filter?: string, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + '/Books/findOne';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (filter !== undefined) {
            queryParameters.set('filter', String(filter));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Patch an existing model instance or insert a new one into the data source.
     * 
     * @param data Model instance data
     */
    public bookPatchOrCreate (data?: models.Book, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + '/Books';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'PATCH',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Patch attributes for a model instance and persist it into the data source.
     * 
     * @param id Book id
     * @param data An object of model property name/value pairs
     */
    public bookPrototypePatchAttributes (id: string, data?: models.Book, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + '/Books/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling bookPrototypePatchAttributes.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PATCH',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Replace attributes for a model instance and persist it into the data source.
     * 
     * @param id Model id
     * @param data Model instance data
     */
    public bookReplaceByIdPostBooksidReplace (id: string, data?: models.Book, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + '/Books/{id}/replace'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling bookReplaceByIdPostBooksidReplace.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Replace attributes for a model instance and persist it into the data source.
     * 
     * @param id Model id
     * @param data Model instance data
     */
    public bookReplaceByIdPutBooksid (id: number, data?: models.Book, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + `/Books/${id}`;

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling bookReplaceByIdPutBooksid.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Replace an existing model instance or insert a new one into the data source.
     * 
     * @param data Model instance data
     */
    public bookReplaceOrCreatePostBooksReplaceOrCreate (data?: models.Book, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + '/Books/replaceOrCreate';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Replace an existing model instance or insert a new one into the data source.
     * 
     * @param data Model instance data
     */
    public bookReplaceOrCreatePutBooks (data?: models.Book, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + '/Books';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update instances of the model matched by {{where}} from the data source.
     * 
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    public bookUpdateAll (where?: string, data?: models.Book, extraHttpRequestParams?: any ) : Observable<models.InlineResponse2001> {
        const path = this.basePath + '/Books/update';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (where !== undefined) {
            queryParameters.set('where', String(where));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Update an existing model instance or insert a new one into the data source based on the where criteria.
     * 
     * @param where Criteria to match model instances
     * @param data An object of model property name/value pairs
     */
    public bookUpsertWithWhere (where?: string, data?: models.Book, extraHttpRequestParams?: any ) : Observable<models.Book> {
        const path = this.basePath + '/Books/upsertWithWhere';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (where !== undefined) {
            queryParameters.set('where', String(where));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(data);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
