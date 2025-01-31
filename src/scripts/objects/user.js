const user = {
    avatarUrl:'',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    events: [],
    repositories: [],
    setInfo(gitHubUser){
        console.log(user)
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.userName  = gitHubUser.login
    },
    setEvents(events){
        this.events = events
    },
    setRepositories(repositories){
        this.repositories = repositories
    }

}

export { user }
