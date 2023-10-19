import { skills } from './Info';

export const MySkill = ():JSX.Element=>{
    const technical = skills.filter((skill)=> skill.category ==='technical');
    const soft = skills.filter((skill)=> skill.category ==='soft')
    return(
        <section className="max-w-4xl mx-auto mt-20">
            <div className="container mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between">
                <div className="flex flex-col">
                    <h3 className="md:text-4xl text-red-400 md:font-bold">Technical Skills</h3>
                      {technical.map((tec)=>(
                        <ul className='flex flex-col items-start justify-start ' key={tec.category}>
                            <li className='text-1xl '>{tec.title}</li>
                        </ul>
                      ))}
                </div>
                <div className="flex flex-col">
                    <h3 className="text-green-400 md:text-4xl md:font-bold">Soft Skills</h3>
                      {soft.map((tec)=>(
                        <ul className='flex flex-col items-start justify-start ' key={tec.category}>
                            <li className='text-1xl text-black'>{tec.title}</li>
                        </ul>
                      ))}
                </div>
              </div>
            </div>
        </section>
    )
}