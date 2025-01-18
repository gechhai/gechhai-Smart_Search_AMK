import axios from 'axios';

async function fetchData(question){
    
    const response = await axios.get(`http://127.0.0.1:5000/agent?question=${question}`);
    return response.data;
}

console.log(await fetchData(encodeURIComponent('ចូលប្រាប់ខ្ញុំពីការកែប្រែលក្ខខណ្ឌកាត់ពន្ធលើប្រាក់ឧបត្ថម្ភប្រចាំខែសម្រាប់ប្រធានធនាគារភូមិ')))
