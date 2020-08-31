export default {
    srcDir: 'src/',
    components: true,
    modules: [
        '@nuxt/firebase'
    ],
    firebase: {
        config: {
            apiKey: "AIzaSyAIuaRTo9fPfyBIIgaTZyTLMSNU8LzcRyk",
            authDomain: "biblia-literal-c4456.firebaseapp.com",
            databaseURL: "https://biblia-literal-c4456.firebaseio.com",
            projectId: "biblia-literal-c4456",
            storageBucket: "biblia-literal-c4456.appspot.com",
            messagingSenderId: "659182219017",
            appId: "1:659182219017:web:ffa186ae1c590b11ffedd8",
            measurementId: "G-1NJHPDRHWG"
        },
        services: {
            auth: {
                persistence: 'local',
                initialize: {
                    onAuthStateChangedMutation: 'SET_AUTH_USER'
                },
                ssr: true
            },
        }
    }
}