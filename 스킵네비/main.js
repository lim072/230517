let skipNavi = document.querySelectorAll("#skipNavi li a");

//반복을 돌면서 각각의 스킵네비에 focusin, focusout이라는 이벤트를 걸어주는 것
for (let el of skipNavi) {
    //포커스인 이벤트
    el.addEventListener("focusin", () => {
        el.classList.add("on");
    })
    //포커스아웃 이벤트
    el.addEventListener("focusout", () => {
        el.classList.remove("on");
    })
}