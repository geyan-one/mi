window.onload = function () {
    var cartA = document.querySelector('.cartA ');
    var carta = document.querySelector('.cartA a');
    var cartB = document.querySelector('.cartB');
    cartA.onmouseover = function () {
        carta.style.color = 'orange';
        this.style.background = 'white';
        cartB.style.display = 'block';
    }
    cartA.onmouseout = function () {
        carta.style.color = '';
        this.style.background = '';
        cartB.style.display = 'none';
    }
    /****************************************************/
    var Sli = document.querySelectorAll('.banner-nav ul li');
    var Ssul = document.querySelector('.list-click');
    var Sul = document.querySelectorAll('.list-click ul');
    var length = Sli.length;
    for (var i = 0; i < length; i++) {
        Sli[i].index = i;
        Sli[i].onmouseover = function () {
            for (var j = 0; j < length; j++) {
                Sul[j].style.display = 'none';
                Ssul.style.display = 'none';
            }
            this.style.color = '#ff6700';
            Sul[this.index].style.display = 'block';
            Ssul.style.display = 'block';
        }
        Sli[i].onmouseout = function () {
            /*for (var j = 0; j < length; j++) {
                Sul[j].style.display = 'block';
                Ssul.style.display = 'block';
            }*/
            this.style.color = '';
            Sul[this.index].style.display = 'none';
            Ssul.style.display = 'none';
        }
    }
    /*******************************************************/
    var in_A = document.querySelector('.banner-search .search');
    var in_B = document.querySelector('.banner-search .frame');
    var IA = document.querySelector('.search-A .search-a');
    var Ii = document.querySelector('.banner-search .fa');
    var A = document.querySelector('.search-hot');
    in_A.onmouseover = function () {
        this.style.borderColor = '#8f8f8f';
        in_B.style.borderColor = '#757575';
    }
    in_A.onmouseout = function () {
        this.style.borderColor = '';
        in_B.style.borderColor = '';
    }
    in_B.onmouseover = function () {
        in_A.style.borderColor = '#8f8f8f';
    }
    in_B.onmouseout = function () {
        in_A.style.borderColor = '';
    }
    in_A.onclick = function () {
        in_B.onmouseover = null;
        in_B.onmouseout = null;
        in_A.onmouseover = null;
        in_A.onmouseout = null;
        this.style.borderColor = '#ff6700';
        in_B.style.borderColor = '#ff6700';
        IA.style.display = 'block';
        A.style.display = 'none';
    }
    in_A.onblur = function () {
        this.style.borderColor = '';
        in_B.style.borderColor = '';
        IA.style.display = 'none';
        A.style.display = 'block';
    }
    /***********************************************************************/
    var carouselli = document.querySelectorAll('.carousel .tu .sjleft li');
    var depotdiv = document.querySelectorAll('.carousel .tu .depot div');
    var lenght = carouselli.length;
    for (var p = 0; p < lenght; p++) {
        carouselli[p].index = p;
        depotdiv[p].index = p;
        carouselli[p].onmouseover = function () {
            for (var j = 0; j < lenght; j++) {
                depotdiv[j].style.display = 'none';
                carouselli[j].style.background = '';
            }
            depotdiv[this.index].style.display = 'block';
            carouselli[this.index].style.background = '#ff6700';
        }
        carouselli[p].onmouseout = function () {
            depotdiv[this.index].style.display = 'none';
            carouselli[this.index].style.background = '';
        }
    }
    /****************************************************************************/
    var carouselimg = document.querySelectorAll('.carousel .tu .image img');
    var carouselimage = document.querySelector('.carousel .tu .image');
    var carouselspanone = document.querySelector('.carousel .tu .angle .A-one');
    var carouselspantwo = document.querySelector('.carousel .tu .angle .A-two');
    var carouseldiv = document.querySelectorAll('.carousel .tu .choice div');
    var length = carouselimg.length;
    for (var i = 0; i < length; i++) {
        carouseldiv[i].index = i;
        carouseldiv[i].onclick = function () {
            for (var j = 0; j < length; j++) {
                carouseldiv[j].style.background = '#333';
                carouselimg[j].style.display = 'none';
            }
            carouseldiv[this.index].style.background = '#fff';
            carouselimg[this.index].style.display = 'block';
        }
        carouseldiv[i].onmouseover = function () {
            carouseldiv[this.index].style.background = '#fff';
        }
        carouseldiv[i].onmouseout = function () {
            if (carouselimg[this.index].style.display == 'block') {
                carouseldiv[this.index].style.background = '#fff';
            } else
                carouseldiv[this.index].style.background = '#333';
        }
    }
    /*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
    var Wli = document.querySelectorAll('.home-appliances .whole-A li');
    var Hul = document.querySelectorAll('.home-appliances .home-right ul');
    var length = Wli.length;
    for (var i = 0; i < length; i++) {
        Wli[i].index = i;
        Wli[i].onmouseover = function () {
            for (var j = 0; j < length; j++) {
                Wli[j].style.borderBottom = '';
                Wli[j].style.color = '';
                Hul[j].style.display = 'none';

            }
            this.style.color = '#ff6709';
            this.style.borderBottom = '3px solid #ff6709';
            Hul[this.index].style.display = 'block';
        }
    }
    /* var Wwli = document.querySelectorAll('.home-appliances .home-right ul li');
     var p10 = document.querySelectorAll('.home-appliances .home-right li .p10');
     console.log(Wwli);
     console.log(p10);

     for (var a = 0; a < Wwli.length; a++) {
         Wwli[a].index = a;
         Wwli[a].onmouseover = function () {
             for (var b = 0; b < length; b++) {
                 p10[b].style.display = 'none';
             }
             p10[a].style.display = 'block';
         }*/
    /*%%%%%%555###########################*/
    var Lli = document.querySelectorAll('.intelligence .whole-A li');
    var Lul = document.querySelectorAll('.intelligence .home-right ul');
    var len = Lli.length;
    for (var j = 0; j < len; j++) {
        Lli[j].index = j;
        Lli[j].onmouseover = function () {
            for (var K = 0; K < len; K++) {
                Lli[K].style.borderBottom = '';
                Lli[K].style.color = '';
                Lul[K].style.display = 'none';

            }
            this.style.color = '#ff6709';
            this.style.borderBottom = '3px solid #ff6709';
            Lul[this.index].style.display = 'block';
        }
    }
    /*%%%%%%555###########################*/
    var Ali = document.querySelectorAll('.Accessories .whole-A li');
    var Aul = document.querySelectorAll('.Accessories .home-right ul');
    var Aleng = Ali.length;
    for (var a = 0; a < Aleng; a++) {
        Ali[a].index = a;
        Ali[a].onmouseover = function () {
            for (var K = 0; K < Aleng; K++) {
                Ali[K].style.borderBottom = '';
                Ali[K].style.color = '';
                Aul[K].style.display = 'none';

            }
            this.style.color = '#ff6709';
            this.style.borderBottom = '3px solid #ff6709';
            Aul[this.index].style.display = 'block';
        }
    }
    /*%%%%%%555###########################*/
    var Cli = document.querySelectorAll('.Collocation .whole-A li');
    var Cul = document.querySelectorAll('.Collocation .home-right ul');
    var leng = Cli.length;
    for (var j = 0; j < leng; j++) {
        Cli[j].index = j;
        Cli[j].onmouseover = function () {
            for (var K = 0; K < leng; K++) {
                Cli[K].style.borderBottom = '';
                Cli[K].style.color = '';
                Cul[K].style.display = 'none';

            }
            this.style.color = '#ff6709';
            this.style.borderBottom = '3px solid #ff6709';
            Cul[this.index].style.display = 'block';
        }
    }
    /*%%%%%%555###########################*/
    var Pli = document.querySelectorAll('.Periphery .whole-A li');
    var Pul = document.querySelectorAll('.Periphery .home-right ul');
    var Plen = Pli.length;
    for (var B = 0; B < Plen; B++) {
        Pli[B].index = B;
        Pli[B].onmouseover = function () {
            for (var A = 0; A < Plen; A++) {
                Pli[A].style.borderBottom = '';
                Pli[A].style.color = '';
                Pul[A].style.display = 'none';

            }
            this.style.color = '#ff6709';
            this.style.borderBottom = '3px solid #ff6709';
            Pul[this.index].style.display = 'block';
        }
    }

    /*#################################################*/
    /*var A = document.querySelectorAll('.content .angle a');
    var Pul = document.querySelectorAll('.content .UL-A li');
    }*/


    /* Pli[B].onmouseout= function () {
         this.style.color = '';
         this.style.borderBottom = '';
     }*/
    /*&&&&&&&&&&&&&&&&&&&&视频##############################3*/
     var lldiv = document.querySelectorAll('.fix-video div');
     var llimga = document.querySelectorAll('.fix-video div .imga');
     var llimg = document.querySelectorAll('.bottom figure');
     /*var llli = document.querySelectorAll('.fix-video div ul li');*/
     var body = document.querySelector('body');
     var llfix = document.querySelector('.fix-video');
     var lllen = llimg.length;
     console.log(llimga);
     for (var i = 0; i < lllen; i++) {
         llimg[i].index = i;
         lldiv[i].index = i;
         llimg[i].onclick = function () {
             for (var c = 0; c < lllen; c++) {
                 lldiv[c].style.top = 100 + 'px';
                 body.style.background = '#333';
                 body.style.opacity = '0.6';
             }
         }
     }
 }
    /* llimga[i].onclick=function () {
         lldiv[i].style.top = '';
         llimga[i].style.background = '#ff6709';
     }*/
    /**************************************************************/

