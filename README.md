### About the App
This App is developed using React and Redux. It can be used to search and find popular movies.
It uses The Movie DB API.

### How to use the app
1. `git clone https://github.com/PrajwalM2212/Movie-App.git`
2. `create /src/environment/config.js`
3. Obtain your API key from [The Movie DB API](https://www.themoviedb.org/en)
4. Inside config.js add 
   ```
   const config = {
       api_key: 'YOUR_API_KEY'
   };
   
   export default config;
   ```
   Replace YOUR_API_KEY with the API key you obtained from The Movie DB API
5. npm install
6. npm start
