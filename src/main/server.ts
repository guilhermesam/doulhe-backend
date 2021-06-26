import '../infra/repositories/connect'
import app from './app'

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`)
})