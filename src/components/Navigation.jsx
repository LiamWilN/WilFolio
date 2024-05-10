import Data from '../assets/details.config.json'

export const HeadNavigation = () => {
  return (
    <>
        <div className='hidden sm:flex'>
          {
            Data.navigation.map( (i) => {
              return (
                <div key={i.id}>
                  <a href="#" className='mx-2'>{i['nav-name']}</a>
                </div>
              )
            })
          }
        </div>
    </>
  )
}

export const HiddenNavigation = () => {
  return (
    <div className='h-28 bg-slate-600'> 
      {
        Data.navigation.map( (i) => {
          <div key={i.id}>
            <a href="#" className='mx-2'>{i['nav-name']}</a>
          </div>
        })
      }
    </div>
  )
}