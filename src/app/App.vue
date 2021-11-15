<script>
import { createApp, defineComponent } from 'vue' 
import { createHead, useHead } from '@vueuse/head'

export default defineComponent({
	setup()
	{
		useHead(
		{
			"title" : "Title",
			"link" : 
			[
				// {
				// 	"rel" : "shortcut icon", "type" : "image/png", "href" : "./images/favicon.png",
				// },
			],
			"meta" : 
			[
				{ "charset" : "UTF-8" },
				{
					"name" : "viewport",
					"content" : "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
				},
			]
		})
	}
})
</script>