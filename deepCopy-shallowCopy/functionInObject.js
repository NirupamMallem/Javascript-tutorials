const pp = require('loadash')
let dev1 = { 

    name: 'msn',
    skills: {
        primary: 'js',
        secondary: 'springboot'
    },

    findAge: function ageFinder()
    {
        return 30;
    },
    joiningDate: new Date()

}

let dev2 = pp.cloneDeep(dev1)
dev2.name = 'vishnu'
dev2.skills.primary='backend'

// we need to use loadash library

