import fetch from 'node-fetch';

async function fetchData(url: string): Promise<void> {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log('Data:', data);
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}
const apiUrl = ''; 
fetchData(apiUrl);
