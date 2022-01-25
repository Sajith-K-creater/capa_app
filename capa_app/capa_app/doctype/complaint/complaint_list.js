






let role_names;

frappe.listview_settings['Complaint'] = {
	add_fields: ['division'],	
	filters: [
		// ['division', '=',  frappe.user.has_role('Approver')]
	],

	// get_indicator: function(doc) {
	// 	if(doc.division==="Breakfast Mix") {
	// 		return [__("Breakfast Mix"), "green", "division,=,Breakfast Mix"];
		
	 
	 

}



async function get_data(){

		let roles = '';
		await frappe.call('capa_app.capa_app.doctype.complaint.complaint.role_fun', {

		}).then(r => {
		roles = r.message;
		
		});

		let role_names= roles.map(role => role.role);
		console.log(role_names);
		
		return role_names[0];
	

}






