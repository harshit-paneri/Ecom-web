const cardData = [{
    imgage : "https://3635909.app.netsuite.com/core/media/media.nl?id=3966235&c=3635909&h=o-y7dRBz6-eubhNVD90wJZNIZXyDQ1zikn9ryZSLUJ8fW4lY&_xt=.bin",
    title : "Gait Trainers & Walkers",
    price : "$600.00",
},
{
    imgage : "https://3635909.app.netsuite.com/core/media/media.nl?id=3966236&c=3635909&h=gtX6XelgoJc62lhxsIVlOxFsXNvPYyxJ8R2HPIIZ9nBp7qZz&_xt=.bin",
    title : "Manual Stand-up Lifts",
    price : "$400.00",
},
{
    imgage : "https://3635909.app.netsuite.com/core/media/media.nl?id=3847481&c=3635909&h=lsUT05Uivuu6QPLwLIsnI5MaS_ripyilGkViJpm-rseyN2g8&_xt=.bin",
    title : "Asthma Care Supplies",
    price : "$2.00",
},
{
    imgage : "https://3635909.app.netsuite.com/core/media/media.nl?id=3966125&c=3635909&h=W2n2J-DwRdVeS-rlJt94hJJHC9N8laAaaUwNgghvq2jBKYDQ&_xt=.bin",
    title : "Wound Care Dressings",
    price : "$1.00",
},
]


{/* <div class="dark:text-white bg-gray-200 p-2 rounded-lg shadow-lg">
            <div class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="https://3635909.app.netsuite.com/core/media/media.nl?id=3966235&c=3635909&h=o-y7dRBz6-eubhNVD90wJZNIZXyDQ1zikn9ryZSLUJ8fW4lY&_xt=.bin" alt="" />
              </a>
              <div class="p-3">
                <a href="#">
                  <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Gait Trainers & Walkers
                  </h5>
                </a>
                <a href="#" class="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Price: $600.00
                </a>
              </div>
            </div>
</div> */}

const postMethod = ()=>{
    cardData.map((postData)=>{
        console.log(postData)
        const postElement =  document.createElement('div')
        postElement.classList.add('card')
        postElement.innerHTML = `
        <div class="dark:text-white bg-gray-200 p-2 rounded-lg shadow-lg">
            <div class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="${postData.imgage}" alt="" />
              </a>
              <div class="p-3">
                <a href="#">
                  <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    ${postData.title}
                  </h5>
                </a>
                <a href="#" class="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  ${postData.price}
                </a>
              </div>
            </div>
</div>
        `
        document.querySelector('.card-container').appendChild(postElement)
        console.log(postElement)
    })
}
postMethod();