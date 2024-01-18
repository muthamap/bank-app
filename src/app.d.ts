// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

interface Person {
    id: number;
    fname: string;
    lname: string;
    company: number;
    photo: string;
    money: string;
    position: string;
    city: string;
    notifications: number;
    email: string;
    address: string;
    birthday: string;
    notes: string;
    tags: string[];
}

