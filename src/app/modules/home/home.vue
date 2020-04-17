<template>
	<div class="home">
		<main-header></main-header>

		<div class="container pad-5-v">
			<div class="col-9">
				<h1 class="pad-1-bottom">{{home.title}}</h1>
				<p class="" v-html="home.desc"></p>
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
	//  Data
	///////////////////////////////////////////////////////

	data ()
	{
		return { "home": this.$store.state.home };
	},

	"props" : [""],

	"watch" : {},

	///////////////////////////////////////////////////////
	//  Lifecycle
	///////////////////////////////////////////////////////

	mounted ()
	{
		// 
	},

	// destroyed (){},

	///////////////////////////////////////////////////////
	//  Functional
	///////////////////////////////////////////////////////

	"methods" : 
	{
		//
	},

	"computed" : 
	{
		//
	},
}
</script>

***********************************************************

<style lang="scss" scoped>
@import "~styles/_vars.scss";

///////////////////////////////////////////////////////////
// 	Component-scoped SASS styles
///////////////////////////////////////////////////////////

.home
{
	//
}

</style>