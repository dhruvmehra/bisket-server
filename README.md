# Backend template

As the name suggests this template use Expressjs and Mongodb to create a backend. Firebase Auth is used to protect the API URIs.

## How to use

1. Clone the project
2. Rename "env.js" file to ".env"
3. Set up a firebase project and a MongoDB data server to get necessary environment values
4. Download private pair key from (https://console.firebase.google.com/project/bisket-app/settings/serviceaccounts/adminsdk)
5. Rename the downloaded file to "serviceAccountKey.js" and place under config/
6. Finally, run "npm i && npm run start" in the terminal
