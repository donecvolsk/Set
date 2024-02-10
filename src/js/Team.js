export class Team {
    constructor() {
        this.members = new Set();        
    }
    
    add (member) {       
        if(this.members.has(member)) {
            throw new Error(`Персонаж ${member.name} уже есть в команде!`);
        }
        this.members.add(member);
    }

    addAll(...Args) {
        Args.forEach(element => {
            this.members.add(element);
        });
       
    }

    toArray() {
        return Array.from(this.members);
    }
}