function mover() {
    const btnMover = document.getElementById("btnMover");

    btnMover.addEventListener("click", res => {
        const elem = document.getElementById("animate");

        var pos = 0;

        var id = setInterval(() => {
            if (pos == 350) {

                clearInterval(id);


                id = setInterval(() => {

                    if (pos == 0) {

                        clearInterval(id);

                    } else {

                        pos--;
                        elem.style.top = pos + "px";
                        elem.style.left = pos + "px";
                    }

                }, 5);




            } else {

                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }, 5);
    });
}

mover();