

export default {
  apiUrl: 'http://joeylin.net/api/',
};
const siteConfig = {
  siteName: 'Modacity',
  siteIcon: 'ion-beer',
  footerText: 'Modacity, Inc. is a Delaware C Corporation launched in 2017 at Founder Institute San Francisco.',
};

const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'english';
const AlgoliaSearchConfig = {
  appId: '',
  apiKey: '',
};
const Auth0Config = {
  domain: '',
  clientID: '', //
  options: {
    auth: {
      autoParseHash: true,
      redirect: false,
    },
    languageDictionary: {
      title: 'joeylin.net',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo',
    },
    icon: '',
    theme: {
      labeledSubmitButton: true,
      logo: 'https://s3.amazonaws.com/redqteam.com/logo/isomorphic.png',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000',
          icon: undefined,
        },
      },
    },
  },
};

const firebaseConfig = {
  apiKey: "AIzaSyAf2MwxmQ_-1wJoI-gg1v9Xw5usI61WxRA",
  authDomain: "modacity-dev.firebaseapp.com",
  databaseURL: "https://modacity-dev.firebaseio.com",
  projectId: "modacity-dev",
  storageBucket: "modacity-dev.appspot.com",
  messagingSenderId: "935927862831",
  appId: "1:935927862831:web:6f70aad12f53a9f1"
};


const googleConfig = {
  apiKey: '', //
};
const mapboxConfig = {
  tileLayer: '',
  maxZoom: '',
  defaultZoom: '',
  center: [],
};
const youtubeSearchApi = '';
export {
  siteConfig,
  themeConfig,
  language,
  AlgoliaSearchConfig,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi,
};
