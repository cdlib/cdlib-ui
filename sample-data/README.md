# cdlib-ui Sample Data

The JSON files within the **sample-data** directory provide data to cdlib-ui components. They are copies of actual content from the cdlib.org website served via the WordPress REST API. See the REST API Handbook at https://developer.wordpress.org/rest-api.

Browse the following REST API endpoints and save the resulting JSON as JSON files into **sample-data**. Firefox and Chrome browsers most easily accomplish this task.

## Public Endpoints

* https://cdlib.org/wp-json/wp/v2/categories?per_page=100&_fields=id,link,name,parent
* https://cdlib.org/wp-json/wp/v2/pages?per_page=100&_fields=id,title,content,acf
* https://cdlib.org/wp-json/wp/v2/posts?offset=2&_fields=id,modified,link,title,content,excerpt,author,categories
* https://cdlib.org/wp-json/wp/v2/tags?per_page=100&_fields=id,link,name
* https://cdlib.org/wp-json/wp/v2/users?per_page=100&_fields=id,name,link,slug

## Private Endpoints

(must be logged into WordPress as a user on the same browser for authentication)

* https://cdlib.org/wp-json/wp/v2/menu-items?menus=251&_fields=id,title,url,parent,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=252&_fields=id,title,url,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=445&_fields=id,title,url,parent,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=486&_fields=id,title,url,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=500&_fields=id,title,url,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=878&_fields=id,title,url,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=879&_fields=id,title,url,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=888&_fields=id,title,url,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=889&_fields=id,title,url,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=890&_fields=id,title,url,menu_order,menus
* https://cdlib.org/wp-json/wp/v2/menu-items?menus=891&_fields=id,title,url,menu_order,menus

Run `npm run format-sample-data` to convert the stringified files of JSON into formatted versions for easier reading.

To import the sample data into the cdlib-ui components, reqire the JSON file within a component's **config.js** and access its fields for use with the Handlebars templates. For example, see **elements/3-components/updated.config.js**.
