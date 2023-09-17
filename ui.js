class UI {
    constructor() {
        this.profile = document.getElementById('profile')
        this.reposArea = document.getElementById('repos')
        this.alertArea = document.getElementById('alert')
    }
    // function for showing profile
    showProfile(data) {
        console.log(data)
        this.profile.innerHTML = `
        <div class="row border p-4 my-4">
            <div class="col-md-3">
                <img class="img-fluid rounded shadow" src="${data.avatar_url}" alt="userPic">
                <a class="btn btn-primary my-4 w-100" href=${data.html_url}> See Profile </a>
            </div>
          
            <div class="col-md-9">
                <span class="badge bg-primary fs-6 mt-1">Public Repos : ${data.public_repos}</span>
                <span class="badge bg-secondary fs-6 mt-1">Public Gists : ${data.public_gists}</span>
                <span class="badge bg-success fs-6 mt-1">Followers : ${data.followers}</span>
                <span class="badge bg-info fs-6 mt-1">Following : ${data.following}</span>

                <ul class="list-group mt-5">
                    <li class="list-group-item">About :${data.bio}</li>
                    <li class="list-group-item">Company :${data.company}</li>
                    <li class="list-group-item">WebSite :${data.blog}</li>
                    <li class="list-group-item">Location :${data.location}</li>
                    <li class="list-group-item">Date :${new Date(data.created_at).toDateString()}</li>

                </ul>
                

            </div>
        </div>
        `
    }
    // function for showing repos
    showRepos(repos) {
    // repos array
        repos.forEach((repo) => {
            console.log(repo);
    //html of each repo
        this.reposArea.innerHTML += `
    <div class="border row p-3 mb-4">
        <div class="col-md-6">
            <a href=${repo.html_url}>${repo.name}</a>
        </div>
        <div class="col-md-6">
            <span class="badge bg-primary">Stars : ${repo.stargazers_count}</span>
            <span class="badge bg-secondary">Watchers : ${repo.watchers_count}</span>
            <span class="badge bg-success">Forks : ${repo.forks_count}</span>
        </div>
    </div>
        `;
    });
    }

    // function for showing alert box
    showAlert (message,className){
        // step-1 creating html
        const div = document.createElement('div')
        // step-2 adding class
        div.classList.add('alert')
        // step-3 color of the alert box
        div.classList.add(className)
        // step-4 adding alert message
        div.textContent = message
        // step-4 sending all these shits to html!
        this.alertArea.innerHTML = '' // firtsly need to delete previous alerts!
        this.alertArea.appendChild(div)
        // step-5 delayed div remove 
        setTimeout(()=> {
            div.remove()
        }, 3000)
    
    
    
    }
}
    
export default UI