
async function getEvents(userName) {
    try {
        if (!userName) {
            throw new Error("Nome de usuário é obrigatorio")
        }

        const response = await fetch(`https://api.github.com/users/${userName}/events?per_page=10`)
        

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
            
        }

        const eventsData = await response.json()
        return eventsData
        
    } catch (error) {
        console.error('Erro ao buscar eventos', error)
        return []
    }
}

export { getEvents }