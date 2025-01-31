const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                            <p>${user.bio ?? ''}</p>
                                            <p>Seguidores: ${user.followers} ☑️</p>
                                            <p>Seguindo: ${user.following} 🌟</p>
                                        </div>
                                    </div>`

        if (user.events.length > 0) {
            let events = '';
            const pushEvents = user.events.filter(event => event.type === 'PushEvent')

            pushEvents.forEach(event => {
                const branch = event.payload.ref.split('/').pop()
                const repoUrl = `https://github.com/${event.repo.name}/tree/${branch}`

                event.payload.commits.forEach(commit => {
                    events += `
                        <li class="event">
                            <h3>${event.repo.name}</h3> -
                            <a href="${repoUrl}" target="_blank">
                                ${commit.message}
                            </a>
                        </li>`
                })
            })

            this.userProfile.innerHTML += `<div class="events section">
                                           <h2>Eventos</h2>
                                           <br></br>
                                           <ul>${events}</ul>
                                        </div>`
        }

        
                
        let repositoriesItens = ""
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
    renderNotFaund() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}
export { screen }