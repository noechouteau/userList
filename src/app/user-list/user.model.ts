export class User {

    id!: number;
    name!: string;
    occupation!: string;
    email!: string;
    bio!: string;
    avatar!: string;


    constructor(id: number, name: string, occupation: string, email: string, bio: string, avatar?: string) {
        this.id = id;
        this.name = name;
        this.occupation = occupation;
        this.email = email;
        this.bio = bio;
        this.avatar = avatar ?? "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/" + Math.floor(Math.random() * 1000) + ".jpg";
    }
    
}