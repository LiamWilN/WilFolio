import Data from '../assets/details.config.json'

export const HeadNavigation = () => {
  return (
    <>
        <div className='hidden sm:flex'>
          {
            Data.navigation.map( (i) => {
              return (
                <ul key={i.id}>
                  <li className='mx-2'>
                    <a href="">{i['nav-name']}</a>
                  </li>
                </ul>
              )
            })
          }
        </div>
    </>
  )
}
