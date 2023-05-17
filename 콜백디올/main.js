let btnOpen = document.querySelector('.btnOpen')
let main = document.querySelector("main")
let aside = document.querySelector('aside')
let btnClose = aside.querySelector('.btnClose')
let _top = aside.querySelector('.top')
let _bottom = aside.querySelector('.bottom')
let _left = aside.querySelector('.left')
let _right = aside.querySelector('.right')
let inner = aside.querySelector('.inner')


btnOpen.addEventListener("click",(e)=>{
    e.preventDefault();
    //메인에 on활성화 클래스가 부여되고 -> 상하좌우 사라지는 효과가 나타남
    main.classList.add("on");
    //aside 태그의 display를 block으로 변화
    aside.style.display = "block";
    //콜백으로 각 선들을 그려주고, inner를 보입니다
    new Anim(_top, {
        prop: "width",
        value: "100%",
        duration: 500,
        callback: () => {
            new Anim(_right, {
                prop: "height",
                value: "100%",
                duration: 500,
                callback: () => {
                    new Anim(_bottom, {
                        prop: "width",
                        value: "100%",
                        duration: 500,
                        callback:() => {
                            new Anim(_left, {
                                prop: "height",
                                value: "100%",
                                duration: 500,
                                callback: () => {
                                    new Anim(inner, {
                                        prop: "opacity",
                                        value: '1',
                                        duration: 500
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})
btnClose.addEventListener("click",(e) => {
    e.preventDefault();
    new Anim(inner, {
        prop: "opacity",
        value: 0,
        duration: 500,
        callback:() => {
            new Anim(_top, {
                prop: "width",
                value: '0%',
                duration: 500,
            })
            new Anim(_right, {
                prop: "height",
                value: '0%',
                duration: 500,
            })
            new Anim(_bottom, {
                prop: "width",
                value: '0%',
                duration: 500,
            })
            new Anim(_left, {
                prop: "height",
                value: '0%',
                duration: 500,
                callback:() => {
                    aside.style.display= "none";
                    main.classList.remove("on")
                }
            })
        }
    })
})