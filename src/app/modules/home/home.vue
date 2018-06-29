<template>
    <div class="">
        <main-header></main-header>

        <div class="container pad-5-v">
            <div class="col">
                <h1 class="pad-1-bottom h-text-uppercase">{{home.intro.title}}</h1>
                <p class="" v-html="home.intro.desc"></p>
            </div>
        </div>

        <div id="demo_grid">
            <div class="container pad-1-v">
                <div class="col pad-3-v">
                    <h3>Grid system</h3>
                    <p>Below is a demo of grid system classes.</p>
                </div>
            </div>

            <div class="container pad-1-v">
                <div class="col-6 pad-1-bottom">Column 6</div>
                <div class="col--half">Column Half</div>
            </div>

            <div class="container -center-v pad-1-v">
                <div class="col-4">Column Third</div>
                <div class="col-4 pad-2-v">Column Third</div>
                <div class="col-4">Column Third</div>
            </div>

            <div class="container -center-h -center-v pad-1-v">
                <div class="col-3 pad-2-v">Column 3</div>
                <div class="col-2 pad-1-v">Column 2</div>
            </div>

            <div class="container pad-1-v">
                <div class="col-6 col-offset-6">Column 6 offset 6</div>
            </div>
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
        "main-header"   : require("@modules/shared/components/main-header.vue").default,
        "main-footer"   : require("@modules/shared/components/main-footer.vue").default,
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

#demo_grid .container
{
    border: 1px solid rgba( 0,0,0, 0.25 );

    & > div
    {
        background: rgba( 255, 255, 100, 0.25 );
        border: 1px solid rgba( 0,0,0, 0.25 );   
    }
}


</style>