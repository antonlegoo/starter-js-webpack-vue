<template>
    <div class="container">
        <main-header></main-header>
        <main-content></main-content>
        <main-footer></main-footer>
    </div>
</template>

###########################################################

<script>

import header from "./components/main-header.vue";
import content from "./components/main-content.vue";
import footer from "./components/main-footer.vue";

export default
{
	data ()
	{
		return {}
	},
    components: 
    {
        "main-header"   : header,
        "main-content"  : content,
        "main-footer"   : footer,
    }
}
</script>

###########################################################

<style lang="scss">

@import "~styles/_vars.scss";

//
//  # Vars
// 


//
//  # Block
// 


//
//  # Element
// 

</style>