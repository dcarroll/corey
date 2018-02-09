# corey

Testing the pre-alpha bits of sfdx-core - you can't use this if you are not able to be on Salesforce VPN.

Clone this repo
cd into corey
In a different directory clone the sfdx-core repo from Salesforce internal enterprise git.
cd into that one
Build the core with npm install.
Run yarn link to make it availble to the plugin.
In the plugin directory run yarn link sfdx-core.
In the plugin directory run npm install
run sfdx plugin:link

run sfdx djcy:rest:get -u <dx-aware username> -l <a relative url to the rest api, try "\".


