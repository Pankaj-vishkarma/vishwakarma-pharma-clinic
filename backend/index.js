const app=require('./app')
const PORT=process.env.PORT
const path=require('path')

const __dirnamePath = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirnamePath, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirnamePath, 'client', 'build', 'index.html'));
  });
}
app.listen(PORT,()=>{
    console.log(`Server up and running on port http://localhost:${PORT}`)
})
