//change theme
const btn = document.querySelector('.theme__btn')

btn.addEventListener('click', () => 
{

    if(document.body.className == '')
    {
        document.body.className = 'dark'
    }
    else
    {
        document.body.className = ''
    }


}
)




//nav

const navMenu = document.querySelectorAll('nav a')


const removeActveClass= () =>

    {
        navMenu.forEach(item=> 
        {
                item.classList.remove('active')
        }
        )
    }


navMenu.forEach(item=>
{
    item.addEventListener('click', () =>
    {
        removeActveClass()
        item.classList.add('active')
    })
}
)


