console.log("ASSALAM O ALIKUM")
function call() {
    const imagesContainer = document.getElementById("images");
    const followersContainer = document.getElementById("followers");
    const followingContainer = document.getElementById("following");
    const repoContainer = document.getElementById("repo");
    const userName = document.getElementById('userName');
    const viewProfileLink = document.getElementById('viewProfileLink');
    let inputValue = document.getElementById('inputButton').value;
    let picContainer = document.getElementsByClassName('pic-container')
    fetch(`https://api.github.com/users/${inputValue}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.avatar_url)
            userName.innerHTML = json.name;
            const imageElem = document.createElement("img");
            imageElem.src = json.avatar_url;
            imagesContainer.appendChild(imageElem);
            console.log(json.followers)
            followersContainer.innerHTML = `Followers is: 
            ${json.followers}`
            followingContainer.innerHTML = `Followings is: 
            ${json.following}`
            // repoContainer.innerHTML = `Public Repo is: 
            // ${json.public_repos}`
            let profileView = "VIEW PROFILE";
            let view = profileView.link(`${json.html_url}`);
            repoContainer.innerHTML = `Public Repo is: 
            ${json.public_repos}`
            viewProfileLink.innerHTML = `${view}`
        })
    console.log(inputButton)
}

function clearbtn(){
    location.reload();
}
