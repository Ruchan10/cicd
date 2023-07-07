import React from 'react'

export default function skills({skill}) {
    const [loggedIn, setLogIn]=useState(false)

    useEffect(()={
        setTimeout(()=>{
            setLogIn(true)
        },500)
    })
  return (
    <div><h1>
        {skill}
        </h1>
        <h2>List of Skills</h2>
        <ul>
            {skills.map(skill=>(
                <li key={skill.id}>
                    {skill.name}
                </li>
            ))}
        </ul>
        {loggedIn
            ? (<button>Start Working</button>) :
            (<button>Not Working</button>)}
    </div>
  )
}
