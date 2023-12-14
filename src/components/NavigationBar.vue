<template>
    <div class="container">
        <nav class="navbar">
            <div class="links">

                <router-link v-scroll-to="{ el: '#Services', onDone: onDone, onCancel: onCancel }"
                    to="/#">Services</router-link> |
                <router-link v-scroll-to="{ el: '#Pricing', onDone: onDone, onCancel: onCancel }"
                    to="/#">Pricing</router-link> |
                <router-link v-scroll-to="{ el: '#Projects', onDone: onDone, onCancel: onCancel }" to="/#">Projects
                    us</router-link>
            </div>
            <button @click="goTocontact" class="secondarybtn"> Let's Talk</button>
        </nav>
        <div class="topnav">
            <a href="#home" class="active">Logo</a>
            <div id="myLinks">
                <router-link to="/about">About us</router-link>
                <router-link to="/services">Services</router-link>
                <router-link to="/pricing">Pricing</router-link>
                <router-link to="/contact">Let's Talk</router-link>

            </div>
            <a href="javascript:void(0);" class="icon" @click="myFunctiion">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavigationBar",
    methods: {
        goTocontact() {
            this.$router.push("/contact")
        },
        myFunctiion() {
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }

        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    background-color: #ffffff;
    width: 100%;
    justify-content: end;
    height: 103px;
    border-bottom: 1px solid #C2C2C2;
    z-index: 0;
}

.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding-right: 40px;
}

.links {
    display: flex;
    gap: 20px;
}


/* Responsive Menu */
.topnav {
    display: none;

}

@media only screen and (max-width: 1295px) {

    .navbar {
        display: none;
    }

    .topnav {
        overflow: hidden;
        background-color: #ffffff;
        position: relative;
        display: block;
        width: 100%;
        transition: height 4s;

    }

    .topnav #myLinks {
        display: none;
    }

    .topnav a {
        color: #2A2929;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        display: block;
    }

    .topnav a.icon {
        background: #ffffff;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
    }

    .topnav a:hover {
        background-color: #ffffff;
        color: black;
    }

    .active {
        background-color: #ffffff;
        color: white;
    }

    .container {
        display: flex;
        background-color: #ffffff;
        width: 100%;
        justify-content: end;
        height: auto;
        border-bottom: 1px solid #C2C2C2;
        z-index: 0;
        transition: height 4s;
    }
}
</style>