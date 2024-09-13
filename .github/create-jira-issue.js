const axios = require('axios');

(async () => {
  try {
    const response = await axios.post('https://jellythijs.atlassian.net/rest/api/3/issue', {
      fields: {
        project: { key: 'AGT' }, // Your Jira project key
        summary: 'Issue Created By Joe GH Action', // Customize summary
        issuetype: { name: 'Task' }, // Specify issue type
      }
    }, {
      headers: {
        'Authorization': `Basic ${process.env.JIRA_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    // Output the Issue ID so GitHub Actions can capture it
    const issueId = response.data.key;
    console.log(`::set-output name=issue_id::${issueId}`);

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    process.exit(1);
  }
})();
