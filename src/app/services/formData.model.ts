export class FormData {
    name: string = '';
    email1: string = '';
    email2: string = '';
    message: string = '';

    clear() {
        this.name = '';
        this.email1 = '';
        this.email2 = '';
        this.message = '';
    }
}

export class Personal {
    name: string = '';
    email1 : string = '';
    email2: string = '';
    message: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}