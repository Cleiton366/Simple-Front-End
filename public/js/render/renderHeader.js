$("#header").append(
    "<div id='sideNav' class='sideNavMenu'>"+
            "<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>"+
            "<a href='my-cart.html'><i class='fas fa-shopping-cart'></i>My Cart</a>"+
            "<a href='wishlist.html'><i class='fas fa-heart'></i>My Wishlist</a>"+
            "<a href='my-account.html'><i class='far fa-user'></i>My Account</a>"+

            "<form action='' class='login'>"+
                "<label for='email'>EMAIL:</label>"+
                "<input type='email' id='email'>"+
                "<label for='senha'>PASSWORD:</label>"+
                "<input type='password' id='password'>"+
                "<input type='submit' id='submitLogin' value='Sign in'>"+
                "<a href='../html/forgot-acc.html' id='pPassword'>Forgot your password?</a>"+
                "<a id='pAccount' href='../html/create-acc.html'>Create an account</a>"+
           "</form>"+

            "<label class='switch' id='darkModeSwitch'>"+
                "<a href=''>Dark Mode</a>"+
                "<input type='checkbox'>"+
                "<span onclick='darkMode()' class='slider round'></span>"+
            "</label>"+

        "</div>"+
        "<a onclick='openNav()'><i class='fas fa-bars'></i></a>"+

    "< nav >"+
    "<ul class='menu'>"+
        "<li><a href='index.html'>HOME</a></li>"+
        "<li><a href=''>ABOUT US</a></li>"+
        "<li><a href='store.html'>STORE</a></li>"+
        "<li><a href='contact-us.html'>CONTACT US</a></li>"+
    "</ul>"+
"</nav >"
);