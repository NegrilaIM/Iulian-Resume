const express = require(`express`)
const app = express()
const PORT = 3031
const server = app.listen(PORT, function() {console.log(`server started at ${PORT}`)})

app.get('/api/resume/:name', function (req, res) {
    const data = {
      iulian: {
        name: `IULIAN-MARINEL`,
        surname: 'NEGRILA',
        role: `FRONTEND DEVELOPER`,
        phone:'+40731 689 359',
        email:'negrilaim@gmail.com',
        about: {
            title: 'ABOUT ME',
            details: `<i>"Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong."</i><br>
            This quote perfectly describes my connection to the IT field`
        },

        work: {
            title: 'WORK EXPERIENCE',
            details: `I started programming 1 year ago trying to make my own website for my company, This sparked my curiosity
            and i started to learn. When I discovered the taste of programming, it was something fascinating and i realized that this is what i want to do. I like to work with
            frameworks especially with Vue.js and React. I especially like Vue.js for minimal template syntax. In parallel, i also work as my own UX/UI designer, this is one of
            the FrontEnd branches that attracts me.`

        },
        soft_skills: {
            title: 'SOFT SKILLS',
            details: `Teamwork<br/>
                      Creativity<br/>
                      Adaptability<br/>
                      Communication<br/>
                      Self-discilpine`
                      
                      

        },

        special_skills: {
            title: `SPECIAL SKILLS`,
            details: `The ability to be a leader and work in a team. I own a company with several employees <br /> <br/>
                      I am usually the heart of any group because I am a very sociable person.`
        },

        skills: [
            {
              name: 'HTML',
              rate: '6'
            },
            {
              name: 'CSS',
              rate: '7'
            },
            {
              name: 'JS  (ES6)',
              rate: '6'
            },
            {
              name: 'VUE.JS',
              rate: '5'
            },
            {
              name: 'REACT.JS',
              rate: '6'
            },
            {
              name: 'NPM/YARN',
              rate: '5'
            },
            {
              name: 'GIT',
              rate: '7'
            },
            {
              name: 'NODEJS',
              rate: '5'
            },

            {
              name: 'LINUX',
              rate: '5'
            },
            {
              name: 'FIGMA',
              rate: '5'
            },
            {
              name: 'ILLUSTRATOR',
              rate: '5'
            },
            {
              name: 'PHOTOSHOP',
              rate: '6'
            },
          ],

        educations: {
        title:'EDUCATION',
        details:`<b>IT SCHOOL</b><br/>2022<br/>Study Program: Frontend Developer<br/><br/>
                 <b>UNIVERSITY OF LINCOLN</b><br/>2016-2020<br/>Study Program:Electrical-Electronic in cars<br/><br/>
                 <b>TECHNOLOGIC HIGHSCHOOL</b><br/>2012-2016<br/>Study Program:Economy`
         },
        personal_projects: {
        title:'CURRENT PROJECTS',
        details: `<b>CAR BUDS</b> <br/>Everything about your car.</br></br>
                  <b>JUBILIANTDELIVERY</b><br/>Check the availability of goods shipments for the company`
        }
      }
    }
    const name = req.params.name
    res.send (data[name])
})