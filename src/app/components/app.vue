<template>
    <div class="container">
        <img src="images/green-left.png">
        <main-header></main-header>
        <main-content></main-content>
        <main-footer></main-footer>
    </div>
</template>

***********************************************************

<script>

import header from "./main-header.vue";
import content from "./main-content.vue";
import footer from "./main-footer.vue";

export default
{
	data ()
	{
		return {}
	},
    "components": 
    {
        "main-header"   : header,
        "main-content"  : content,
        "main-footer"   : footer,
    },
}
</script>

***********************************************************

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