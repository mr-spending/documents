enum apiEnv {
  local = 'http://localhost:3500/',
  dev = 'https://nest-api-git-develop-mr-spending.vercel.app/',
  prod = 'https://nest-api-git-main-mr-spending.vercel.app/',
}

export const environment = {
  firebaseConfig: {
    apiKey: "AIzaSyAR15wj4FSFVL75gtPNSOYYSQuOovuo1KQ",
    authDomain: "mrspending-e9b8b.firebaseapp.com",
    databaseURL: "https://mrspending-e9b8b-default-rtdb.firebaseio.com",
    projectId: "mrspending-e9b8b",
    storageBucket: "mrspending-e9b8b.appspot.com",
    messagingSenderId: "642008186725",
    appId: "1:642008186725:web:6a09a0e246432a05a0ab8c",
    measurementId: "G-ZLMGMXP4KF"
  },
  apiKey: apiEnv.prod,
}
