// Copyright (c) 2022, ideenkreise Tech and contributors
// For license information, please see license.txt


		frappe.listview_settings['Clarification'] = {
			
			filters: [
				['receiver', '=', frappe.session.user]
			]
		}


