<template>
    <div class="header">
		<h1 class="header__title h-text-left col-12 pad--v-2">
			Header
		</h1>
	</div>
</template>

###########################################################

<script>

export default
{
	name: "main-header",
	data ()
	{
		return {}
	},
	// mounted: function(){}
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

.header
{}


//
//  # Element
// 

.header__title
{
	@include breakpoint( $bp-desktop )
	{
		color: purple;
	}

	@include breakpoint( $bp-tablet )
	{
		color: red;
	}

	@include breakpoint( $bp-mobile )
	{
		color: orange;
	}
}

</style>