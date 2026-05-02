
const fetch = require('node-fetch');

async function testPredict() {
    const response = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            rank: 1000,
            category: 'Open General',
            specialty: 'All Fields',
            collegeType: 'All Colleges',
            round: 'All Rounds'
        })
    });
    const data = await response.json();
    console.log(`Found ${data.resultCount} results for rank 1000`);
    if (data.results.length > 0) {
        console.log('Sample result:', data.results[0]);
    }
}

testPredict();
