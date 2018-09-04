class Github{
    constructor(){
       this.client_id = '6ec21790eb9fa8490dfd';
       this.client_secret = '8aabeefdeec8521384dea770b059bab805d0dade';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}