Reactive Website
Requirements
Web should have bootstrap for dynamic web functionality. Web page framework should have 2 main parts: 
•	Ability to load other pages in index.html.
•	Ability to load html items from json.
Display engine
We must have index.html file as main entry. This file should have only 1 “Main” tag which will be used as main entry point to put another html items in. The display and other events will go trough this page.

Routing engine
The user enters some url, your page should resolve it, meaning for example if user enters yourpage/contacts, he should see the contacts part loaded in index “Main” part.


Template engine
We need to create templates in other .js files and be able to read them as actual page data. For eg. We use contacts items as json objects, read them then add to index.html “Main” part.

{
“div”:
	“div”: “Some holder box”,
	“p”: “Some lorem ipsum text”
}
Main form engine
The navigation bar should be loaded from same templating engine as “Nav” and be dynamically added and/or changed.
{
	“nav”:
		“li”: “Main”,
		“li”: “About us”,
		“li”: “Contacts”
}
