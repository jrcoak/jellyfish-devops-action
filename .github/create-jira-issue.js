const axios = require('axios');

(async () => {
  try {
    const response = await axios.post('https://jellythijs.atlassian.net/rest/api/3/issue', {
      fields: {
        project: { key: 'AGT' }, 
        summary: 'Issue Created By Joe GH Action', 
        issuetype: { name: 'Task' }, 
      }
    }, {
      headers: {
        'Authorization': `Basic ${process.env.JIRA_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    const issueId = response.data.key;
    console.log(`::set-output name=issue_id::${issueId}`);

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    process.exit(1);
  }
})();
