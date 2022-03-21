require('dotenv/config')
const app = require('./app')
const port = process.env.port || 3001

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
