<template>
    <div class="">
        <main-header></main-header>

        <div class="container pad-12-v">
            <h1 class="pad-1-bottom h-text-uppercase">{{home.intro.title}}</h1>
            <p class="" v-html="home.intro.desc"></p>
        </div>

        <main-footer></main-footer>
    </div>
</template>

***********************************************************

<script>

export default
{
    "components": 
    {
        "main-header"   : require("@modules/shared/components/main-header.vue"),
        "main-footer"   : require("@modules/shared/components/main-footer.vue"),
    },

    ///////////////////////////////////////////////////////
    //  ...
    ///////////////////////////////////////////////////////

    data ()
    {
        return { "home": this.$store.state.home };
    },
    "props" : [""],
    "watch" : {},

    ///////////////////////////////////////////////////////
    //  ...
    ///////////////////////////////////////////////////////

    "mounted": function(){},
    "destroyed": function(){},

    ///////////////////////////////////////////////////////
    //  ...
    ///////////////////////////////////////////////////////

    "methods" : {},
    "computed" : {},
}
</script>

***********************************************************

<style lang="scss" scoped>
@import "~styles/_vars.scss";

///////////////////////////////////////////////////////////
//  ...
///////////////////////////////////////////////////////////

.template
{}


</style>