class Github{
    // data for request from API 
    constructor(){
        this.clientId = 'd91356b7e155ed137e36'
        this.clientSecret = '286bb9d47bf409181ecda64db2b8a635b4607ded'
        this.perPage = 10
        this.sort = 'asc' // these perPage and sort need to be variable, Dont use hardcode :D

    }
    // Getting user data
        async getUser(username ){
            // making a request according to the parameter/ user info
          const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
          );
          // getting repos
         const repoRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)
 
        // turning respose to json
        const profile = await profileRes.json();
        const repos = await repoRes.json();

        // return cannot be repeated, needs to be turned to object
        return {
            profile,
            repos
        } 
     }
    }
    export default Github ;