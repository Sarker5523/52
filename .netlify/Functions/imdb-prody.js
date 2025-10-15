const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const { title } = event.queryStringParameters;
  if (!title) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Title required' }) };
  }

  try {
    const apiKey = process.env.OMDB_API_KEY;
    const response = await fetch(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch data' }) };
  }
};
