from . import __version__ as app_version

app_name = "capa_app"
app_title = "Capa App"
app_publisher = "ideenkreise Tech"
app_description = "application for capa"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info@ideenkreisetech.com"
app_license = "MIT"

app_logo_url = "/assets/capa_app/images/mtr-logo.png"
brand_html = '<img src="/assets/capa_app/images/mtr-logo.png" style="height:30px;width:30px">&nbsp&nbsp<b>MTR CAPA</b>'
website_context = {
    "favicon": "/assets/capa_app/images/mtr-logo.png",
    "splash_image": "/assets/capa_app/images/mtr-logo.png"
}


permission_query_conditions = {
	"Complaint": "capa_app.capa_app.doctype.complaint.complaint.complaint_has_permission",
}

# has_permission = {
# 	"Complaint": "capa_app.capa_app.doctype.complaint.complaint.has_permission",	
# }

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/capa_app/css/capa_app.css"
# app_include_js = "/assets/capa_app/js/capa_app.js"

# include js, css files in header of web template
# web_include_css = "/assets/capa_app/css/capa_app.css"
# web_include_js = "/assets/capa_app/js/capa_app.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "capa_app/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "capa_app.install.before_install"
# after_install = "capa_app.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "capa_app.uninstall.before_uninstall"
# after_uninstall = "capa_app.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "capa_app.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"capa_app.tasks.all"
# 	],
# 	"daily": [
# 		"capa_app.tasks.daily"
# 	],
# 	"hourly": [
# 		"capa_app.tasks.hourly"
# 	],
# 	"weekly": [
# 		"capa_app.tasks.weekly"
# 	]
# 	"monthly": [
# 		"capa_app.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "capa_app.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "capa_app.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "capa_app.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

user_data_fields = [
	{
		"doctype": "{doctype_1}",
		"filter_by": "{filter_by}",
		"redact_fields": ["{field_1}", "{field_2}"],
		"partial": 1,
	},
	{
		"doctype": "{doctype_2}",
		"filter_by": "{filter_by}",
		"partial": 1,
	},
	{
		"doctype": "{doctype_3}",
		"strict": False,
	},
	{
		"doctype": "{doctype_4}"
	}
]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"capa_app.auth.validate"
# ]

