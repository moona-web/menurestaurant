let _btn = document.querySelectorAll('button')
_btn.forEach(function (val, i) {
    val.addEventListener('mouseenter', function () {
        this.style['background-color'] = 'orange'
        this.style['color'] = 'white'
    })

    val.addEventListener('mouseleave', function () {
        this.style['background-color'] = 'white'
        this.style['color'] = 'rgb(228, 115, 75)'
    })
})

fetch('menu.json')
    .then(res => res.json())
    .then(myData => {
        alldata(myData)
        _btn[0].addEventListener('click', function () {
            document.getElementsByClassName('pics')[0].innerHTML = ''
            alldata(myData)
        })

        _btn[1].addEventListener('click', function () {
            document.getElementsByClassName('pics')[0].innerHTML = ''
            _break(myData)
        })

        _btn[2].addEventListener('click', function () {
            document.getElementsByClassName('pics')[0].innerHTML = ''
            all(myData)
        })

        _btn[3].addEventListener('click', function () {
            document.getElementsByClassName('pics')[0].innerHTML = ''
            _shakes(myData)
        })

        _btn[4].addEventListener('click', function () {
            document.getElementsByClassName('pics')[0].innerHTML = ''
            _dinner(myData)
        })
    })
    

function alldata(myData) {
    myData.result.map((val) => {

        let _divAll = document.createElement('div')
        _divAll.className = 'all h-100 col-12 col-lg-6  d-flex flex-wrap mt-4 '
        _divAll.innerHTML = `
                  <div class="col-12 h-75 col-lg-4 mt-lg-2">
                            <img class="col-12 h-50 " src="${val.img}" alt="">
                        </div>
    
                        <div class="col-12 col-lg-8 h-25 flex-wrap ">
                            <div class="d-flex justify-content-between ">
                                <h5 class='ps-2'>${val.title}</h5>
                                <h6 class='ps-2'>${val.price}</h6>
                            </div>
    
                            <div>
                                <p  class='ps-2'>${val.desc}</p>
                            </div>
    
                        </div>
       `

        document.getElementsByClassName('pics')[0].appendChild(_divAll)

    })
}
function all(myData) {
    myData.result.map((val) => {
        if (val.category == 'lunch') {
            let _divAll = document.createElement('div')
            _divAll.className = 'all h-100 col-12 col-lg-6  d-flex flex-wrap mt-4 '
            _divAll.innerHTML = `
                  <div class="col-12 h-75 col-lg-4 mt-lg-2">
                            <img class="col-12 h-50 " src="${val.img}" alt="">
                        </div>
    
                        <div class="col-12 col-lg-8 h-25 flex-wrap ">
                            <div class="d-flex justify-content-between ">
                                <h5 class='ps-2'>${val.title}</h5>
                                <h6 class='ps-2'>${val.price}</h6>
                            </div>
    
                            <div>
                                <p class='ps-2'>${val.desc}</p>
                            </div>
    
                        </div>
       `

            document.getElementsByClassName('pics')[0].appendChild(_divAll)

        }


    })
}

function _break(myData) {
    myData.result.map((val) => {
        if (val.category == 'breakfast') {
            let _divAll = document.createElement('div')
            _divAll.className = 'all h-100 col-12 col-lg-6  d-flex flex-wrap mt-4 '
            _divAll.innerHTML = `
                  <div class="col-12 h-75 col-lg-4 mt-lg-2">
                            <img class="col-12 h-50 " src="${val.img}" alt="">
                        </div>
    
                        <div class="col-12 col-lg-8 h-25 flex-wrap">
                            <div class="d-flex justify-content-between">
                                <h5 class='ps-2'>${val.title}</h5>
                                <h6 class='ps-2'>${val.price}</h6>
                            </div>
    
                            <div>
                                <p class='ps-2'>${val.desc}</p>
                            </div>
    
                        </div>
       `

            document.getElementsByClassName('pics')[0].appendChild(_divAll)

        }


    })
}

function _shakes(myData) {
    myData.result.map((val) => {
        if (val.category == 'shakes') {
            let _divAll = document.createElement('div')
            _divAll.className = 'all h-100 col-12 col-lg-6  d-flex flex-wrap mt-4 '
            _divAll.innerHTML = `
                  <div class="col-12 h-75 col-lg-4 mt-lg-2">
                            <img class="col-12 h-50 " src="${val.img}" alt="">
                        </div>
    
                        <div class="col-12 col-lg-8 h-25 flex-wrap ">
                            <div class="d-flex justify-content-between ">
                                <h5 class='ps-2'>${val.title}</h5>
                                <h6 class='ps-2'>${val.price}</h6>
                            </div>
    
                            <div>
                                <p class='ps-2'>${val.desc}</p>
                            </div>
    
                        </div>
       `

            document.getElementsByClassName('pics')[0].appendChild(_divAll)

        }


    })
}

function _dinner(myData) {
    myData.result.map((val) => {
        if (val.category == 'dinner') {
            let _divAll = document.createElement('div')
            _divAll.className = 'all h-100 col-12 col-lg-6  d-flex flex-wrap mt-4 '
            _divAll.innerHTML = `
                  <div class="col-12 h-75 col-lg-4 mt-lg-2">
                            <img class="col-12 h-50 " src="${val.img}" alt="">
                        </div>
    
                        <div class="col-12 col-lg-8 h-25 flex-wrap ">
                            <div class="d-flex justify-content-between ">
                                <h5 class='ps-2'>${val.title}</h5>
                                <h6 class='ps-2'>${val.price}</h6>
                            </div>
    
                            <div>
                                <p class='ps-2'>${val.desc}</p>
                            </div>
    
                        </div>
       `

            document.getElementsByClassName('pics')[0].appendChild(_divAll)

        }


    })
}


