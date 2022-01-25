// Copyright (c) 2022, ideenkreise Tech and contributors
// For license information, please see license.txt

frappe.ui.form.on('Clarification', {
	refresh: function(frm) {

		frappe.listview_settings['Clarification'] = {
			
			filters: [
				['Assigned To', '=', frappe.session.user]
			]
		}

	}
});
