import { createStore } from 'vuex'
import projects from './projects.js'

export default createStore({
    state: {
        loading: false,
        activeTab: 'languages',
        tabContent: {},
        tabContents: [{
                tab: 'languages',
                content: [
                    { title: 'PHP', value: 85 },
                    { title: 'JavaScript', value: 85 },
                    { title: 'HTML', value: 90 },
                    { title: 'CSS', value: 80 },
                ]
            }, {
                tab: 'front end',
                content: [
                    { title: 'Vue', value: 85 },
                    { title: 'Tailwind CSS', value: 85 },
                    { title: 'Alpine Js', value: 80 },
                    { title: 'Inertia Js', value: 80 },
                ]
            },
            {
                tab: 'back end',
                content: [
                    { title: 'Laravel', value: 80 },
                    { title: 'Livewire', value: 85 },
                ]
            },
            {
                tab: 'databases',
                content: [
                    { title: 'MySQL', value: 80 },
                    { title: 'PgSQL', value: 70 },
                ]
            },
            {
                tab: 'tools & technologies',
                content: [
                    { title: 'PWA', value: 60 },
                    { title: 'REST', value: 75 },
                ]
            },
        ],
        socialAccounts: [
            { name: 'fab fa-github', link: 'https://github.com/Freeman-md' },
            { name: 'fab fa-instagram', link: 'https://instagram.com/freemancodz' },
            { name: 'fab fa-twitter', link: 'https://twitter.com/FMadudili' },
            { name: 'fab fa-linkedin-in', link: 'https://www.linkedin.com/in/freeman-madudili-9864101a2/' }
        ],
        sidebar: false,
        links: [
            {name: 'About', number: '01. '}, 
            {name: 'Experience', number: '02. '},   
            {name: 'Work', number: '03. '},
            {name: 'Contact', number: '04. '}],
        projects: null,
        activeLnk: '',
        mode: 'dark'
    },
    getters: {
        getLoading: state => state.loading,
        getActiveTab: state => state.activeTab,
        getSidebar: state => state.sidebar,
        getSocialAccounts: state => state.socialAccounts,
        getLinks: state => state.links,
        getMode: state => state.mode,
        getTabContent: state => state.tabContent,
        getProjects: state => state.projects,
    },
    mutations: {
        setActiveTab(state, payload) {
            state.activeTab = payload.value
        },
        setTabContent(state, payload) {
            state.tabContent = state.tabContents.find(content => content.tab == payload.value)
        },
        toggle(state) {
            state.sidebar = !state.sidebar
        },
        setProjects(state, payload) {
            state.projects = payload.projects
        },
        setActiveLink(state, payload) {
            state.activeLink = payload.link
        },
        setLoading(state, payload) {
            state.loading = payload.value
        },
        setMode(state) {
            if (state.mode === 'dark') {
                state.mode = 'light'
            } else {
                state.mode = 'dark'
            }
        }
    },
    actions: {
        getProjects: async({commit}) => {
            commit('setLoading', {value: true})
            const response = await fetch('https://justbuy.xclusivedesigns.co.uk/api/v1/projects')
            const projects = await response.json()
            commit('setProjects', {projects})
            commit('setLoading', {value: false})
        },
    },
    modules: {}
})