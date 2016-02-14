import { Map, List } from 'immutable'
let initialState = Map({
  isPlaying: true,
  money: 200,
  activeTask: 'Pair Programming',
  time: Map({
    hour: 7,
    day: 1,
    week: 1,
    phase: 1
  }),
  resources: Map({
    energy: 500,
    mood: 100,
    health: 100,
    enthusiasm: 100
  }),
  skills: Map({
    softSkills: Map({
      level: 1,
      exp: 0,
      expToLevel: 250
    }),
    techSkills: Map({
      level: 1,
      exp: 0,
      expToLevel: 250
    })
  }),
  items: List([
    Map({
      name: 'Mountain Dew',
      money: 5,
      resources: Map({
        energy: 5,
        mood: 1,
      })
    }),
    Map({
      name: 'Red Bull',
      money: 5,
      resources: Map({
        energy: 30,
        mood: 5,
        health: -5
      })
    })
  ]),
  tasks: List([
    Map({
      name: 'Pair Programming',
      resources: Map({
        energy: -10,
        mood: -3
      }),
      skills: Map({
        softSkills: 3,
        techSkills: 1
      }),
      initialCosts: Map({
        energy: 30,
        mood: 10
      })
    }),
    Map({
      name: 'Solo Programming',
      resources: Map({
        energy: -10,
        mood: -3
      }),
      skills: Map({
        softSkills: 3,
        techSkills: 1
      }),
      initialCosts: Map({
        energy: 30,
        mood: 10
      })
    }),
    Map({
      name: 'Group Projects',
      resources: Map({
        energy: -10,
        mood: -3
      }),
      skills: Map({
        softSkills: 3,
        techSkills: 1
      }),
      initialCosts: Map({
        energy: 30,
        mood: 10
      })
    }),
    Map({
      name: 'Napping',
      resources: Map({
        energy: -10,
        mood: -3
      }),
      skills: Map({
        softSkills: 3,
        techSkills: 1
      }),
      initialCosts: Map({
        energy: 30,
        mood: 10
      })
    })
    ])
})

export default initialState