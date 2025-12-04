function attachEvents() {
    
    const URL = 'http://localhost:3030/jsonstore/messenger';

    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    const authorInp = document.querySelector('input[name="author"]');
    const contentInp = document.querySelector('input[name="content"]');
    const msgArea = document.getElementById('messages');

    sendBtn.addEventListener('click', sendMsg);
    refreshBtn.addEventListener('click', refreshMsg);

    async function sendMsg() {
        
        const author = authorInp.value.trim();
        const content = contentInp.value.trim();

        if (author === '' && content === '') return;

        const msg = {

            author,
            content
        };
        
        await fetch(URL, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(msg)
            });

            contentInp.value = '';
    }

    async function refreshMsg() {

        const res = await fetch(URL);
        const data = await res.json();

        const msgs = Object.values(data) 
            .map(m => `${m.author}: ${m.content}`)
            .join('\n');

        msgArea.value = msgs;    
    }
}

attachEvents();