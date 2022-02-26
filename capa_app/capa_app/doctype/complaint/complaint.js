// Copyright (c) 2022, ideenkreise Tech and contributors
// For license information, please see license.txt

frappe.ui.form.on('Complaint', {
	// refresh: function(frm) {

	// }
	"source": async function(frm) {

		console.log(frm.doc.source);
		//frm.reload_doc();
		

		

		if(frm.doc.source=='Consumer Complaints')
		{
			//Hide
			frm.set_df_property('product_code', "hidden", 1);
			frm.set_df_property('id_date', "hidden", 1);
			frm.set_df_property('audit', "hidden", 1);
			frm.set_df_property('nc_description', "hidden", 1);
			frm.set_df_property('nc_clause_no', "hidden", 1);
			frm.set_df_property('nc_attach', "hidden", 1);
			frm.set_df_property('nc_number', "hidden", 1);
			frm.set_df_property('nc_category', "hidden", 1);
			frm.set_df_property('auditee', "hidden", 1);
			frm.set_df_property('auditor', "hidden", 1);
			frm.set_df_property('date_of_audit', "hidden", 1);
			frm.set_df_property('correction_1', "hidden", 1);
			frm.set_df_property('correction_2', "hidden", 1);
			frm.set_df_property('correction_3', "hidden", 1);
			frm.set_df_property('correction_4', "hidden", 1);
			frm.set_df_property('correction_5', "hidden", 1);
			frm.set_df_property('correction_due_date_1', "hidden", 1);
			frm.set_df_property('correction_due_date_2', "hidden", 1);
			frm.set_df_property('correction_due_date_3', "hidden", 1);
			frm.set_df_property('correction_due_date_4', "hidden", 1);
			frm.set_df_property('correction_due_date_5', "hidden", 1);
			frm.set_df_property('correction_responsibility_1', "hidden", 1);
			frm.set_df_property('correction_responsibility_2', "hidden", 1);
			frm.set_df_property('correction_responsibility_3', "hidden", 1);
			frm.set_df_property('correction_responsibility_4', "hidden", 1);
			frm.set_df_property('correction_responsibility_5', "hidden", 1);

			//Unhide
			frm.set_df_property('complaint_sub_category', "hidden", 0);
			frm.set_df_property('product_name', "hidden", 0);
			frm.set_df_property('product_sku', "hidden", 0);
			frm.set_df_property('complaint', "hidden", 0);
			frm.set_df_property('complaint_description', "hidden", 0);
			frm.set_df_property('product_batch', "hidden", 0);
			frm.set_df_property('mfg_date', "hidden", 0);

			//Validation
				frm.set_df_property('complaint_sub_category', "reqd", 1);
				frm.set_df_property('product_name', "reqd", 1);
				frm.set_df_property('product_sku', "reqd", 1);
				frm.set_df_property('complaint', "reqd", 1);
				frm.set_df_property('complaint_description', "reqd", 1);
				frm.set_df_property('product_batch', "reqd", 1);
				frm.set_df_property('mfg_date', "reqd", 1);
			
			//Unvalidate
			frm.set_df_property('audit', "reqd", 0);
			frm.set_df_property('nc_description', "reqd", 0);
			frm.set_df_property('nc_clause_no', "reqd", 0);
			frm.set_df_property('nc_number', "reqd", 0);
			frm.set_df_property('nc_category', "reqd", 0);
			frm.set_df_property('auditee', "reqd", 0);
			frm.set_df_property('auditor', "reqd", 0);
			frm.set_df_property('date_of_audit', "reqd", 0);
			frm.set_df_property('id_date', "reqd", 0);

			
           

			
			

		}
		if(frm.doc.source=='Customer Complaints')
		{
			//Hide
			//1t section
			frm.set_df_property('complaint_sub_category', "hidden", 1);

			frm.set_df_property('product_code', "hidden", 1);
			frm.set_df_property('id_date', "hidden", 1);

			//2nd section
			frm.set_df_property('audit', "hidden", 1);
			frm.set_df_property('nc_description', "hidden", 1);
			frm.set_df_property('nc_clause_no', "hidden", 1);
			frm.set_df_property('nc_attach', "hidden", 1);
			frm.set_df_property('nc_number', "hidden", 1);
			frm.set_df_property('nc_category', "hidden", 1);
			frm.set_df_property('auditee', "hidden", 1);
			frm.set_df_property('auditor', "hidden", 1);
			frm.set_df_property('date_of_audit', "hidden", 1);

			//3rd section
			frm.set_df_property('correction_1', "hidden", 1);
			frm.set_df_property('correction_2', "hidden", 1);
			frm.set_df_property('correction_3', "hidden", 1);
			frm.set_df_property('correction_4', "hidden", 1);
			frm.set_df_property('correction_5', "hidden", 1);
			frm.set_df_property('correction_due_date_1', "hidden", 1);
			frm.set_df_property('correction_due_date_2', "hidden", 1);
			frm.set_df_property('correction_due_date_3', "hidden", 1);
			frm.set_df_property('correction_due_date_4', "hidden", 1);
			frm.set_df_property('correction_due_date_5', "hidden", 1);
			frm.set_df_property('correction_responsibility_1', "hidden", 1);
			frm.set_df_property('correction_responsibility_2', "hidden", 1);
			frm.set_df_property('correction_responsibility_3', "hidden", 1);
			frm.set_df_property('correction_responsibility_4', "hidden", 1);
			frm.set_df_property('correction_responsibility_5', "hidden", 1);

			//Unhide
			frm.set_df_property('product_name', "hidden", 0);
			frm.set_df_property('product_sku', "hidden", 0);
			frm.set_df_property('complaint', "hidden", 0);
			frm.set_df_property('complaint_description', "hidden", 0);
			frm.set_df_property('product_batch', "hidden", 0);
			frm.set_df_property('mfg_date', "hidden", 0);

			//Valdation
				frm.set_df_property('product_name', "reqd", 1);
				frm.set_df_property('product_sku', "reqd", 1);
				frm.set_df_property('complaint', "reqd", 1);
				frm.set_df_property('complaint_description', "reqd", 1);
				frm.set_df_property('product_batch', "reqd", 1);
				frm.set_df_property('mfg_date', "reqd", 1);

				

			//Unvalidate
			frm.set_df_property('complaint_sub_category', "reqd", 0);
			frm.set_df_property('audit', "reqd", 0);
			frm.set_df_property('nc_description', "reqd", 0);
			frm.set_df_property('nc_clause_no', "reqd", 0);
			frm.set_df_property('nc_number', "reqd", 0);
			frm.set_df_property('nc_category', "reqd", 0);
			frm.set_df_property('auditee', "reqd", 0);
			frm.set_df_property('auditor', "reqd", 0);
			frm.set_df_property('date_of_audit', "reqd", 0);
			frm.set_df_property('id_date', "reqd", 0);


		}

		if(frm.doc.source=='Internal deviation')
		{   
			//Hide
			frm.set_df_property('complaint_sub_category', "hidden", 1);

			frm.set_df_property('audit', "hidden", 1);
			frm.set_df_property('nc_description', "hidden", 1);
			frm.set_df_property('nc_clause_no', "hidden", 1);
			frm.set_df_property('nc_attach', "hidden", 1);
			frm.set_df_property('nc_number', "hidden", 1);
			frm.set_df_property('nc_category', "hidden", 1);
			frm.set_df_property('auditee', "hidden", 1);
			frm.set_df_property('auditor', "hidden", 1);
			frm.set_df_property('date_of_audit', "hidden", 1);

			//Unhide
			frm.set_df_property('product_name', "hidden", 0);
			frm.set_df_property('product_code', "hidden", 0);
			frm.set_df_property('product_sku', "hidden", 0);
			frm.set_df_property('complaint', "hidden", 0);
			frm.set_df_property('complaint_description', "hidden", 0);
			frm.set_df_property('id_date', "hidden", 0);
			frm.set_df_property('product_batch', "hidden", 0);
			frm.set_df_property('mfg_date', "hidden", 0);

			frm.set_df_property('correction_1', "hidden", 0);
			frm.set_df_property('correction_2', "hidden", 0);
			frm.set_df_property('correction_3', "hidden", 0);
			frm.set_df_property('correction_4', "hidden", 0);
			frm.set_df_property('correction_5', "hidden", 0);
			frm.set_df_property('correction_due_date_1', "hidden", 0);
			frm.set_df_property('correction_due_date_2', "hidden", 0);
			frm.set_df_property('correction_due_date_3', "hidden", 0);
			frm.set_df_property('correction_due_date_4', "hidden", 0);
			frm.set_df_property('correction_due_date_5', "hidden", 0);
			frm.set_df_property('correction_responsibility_1', "hidden", 0);
			frm.set_df_property('correction_responsibility_2', "hidden", 0);
			frm.set_df_property('correction_responsibility_3', "hidden", 0);
			frm.set_df_property('correction_responsibility_4', "hidden", 0);
			frm.set_df_property('correction_responsibility_5', "hidden", 0);
			
			
			//Validation
				frm.set_df_property('product_name', "reqd", 1);
				frm.set_df_property('product_code', "reqd", 1);
				frm.set_df_property('product_sku', "reqd", 1);
				frm.set_df_property('complaint', "reqd", 1);
				frm.set_df_property('complaint_description', "reqd", 1);
				frm.set_df_property('id_date', "reqd", 1);
				frm.set_df_property('product_batch', "reqd", 1);
				frm.set_df_property('mfg_date', "reqd", 1);

			

			//Unvalidate
			frm.set_df_property('complaint_sub_category', "reqd", 0);
			frm.set_df_property('complaint_description', "reqd", 0);
			frm.set_df_property('audit', "reqd", 0);
			frm.set_df_property('nc_description', "reqd", 0);
			frm.set_df_property('nc_clause_no', "reqd", 0);
			frm.set_df_property('nc_number', "reqd", 0);
			frm.set_df_property('nc_category', "reqd", 0);
			frm.set_df_property('auditee', "reqd", 0);
			frm.set_df_property('auditor', "reqd", 0);
			frm.set_df_property('date_of_audit', "reqd", 0);


		
		}

		if(frm.doc.source=='External & Internal audits')
		{
			//Hide
			frm.set_df_property('complaint_sub_category', "hidden", 1);
			frm.set_df_property('product_name', "hidden", 1);
			frm.set_df_property('product_code', "hidden", 1);
			frm.set_df_property('complaint', "hidden", 1);
			frm.set_df_property('id_date', "hidden", 1);
			frm.set_df_property('complaint_description', "hidden", 1);
			frm.set_df_property('product_sku', "hidden", 1);
			frm.set_df_property('product_batch', "hidden", 1);
			frm.set_df_property('mfg_date', "hidden", 1);
			frm.set_df_property('corrective_action_report', "hidden", 1);

			//Unhide
			frm.set_df_property('audit', "hidden", 0);
			frm.set_df_property('nc_description', "hidden", 0);
			frm.set_df_property('nc_clause_no', "hidden", 0);
			frm.set_df_property('nc_attach', "hidden", 0);
			frm.set_df_property('nc_number', "hidden", 0);
			frm.set_df_property('nc_category', "hidden", 0);
			frm.set_df_property('auditee', "hidden", 0);
			frm.set_df_property('auditor', "hidden", 0);
			frm.set_df_property('date_of_audit', "hidden", 0);

			frm.set_df_property('correction_1', "hidden", 0);
			frm.set_df_property('correction_2', "hidden", 0);
			frm.set_df_property('correction_3', "hidden", 0);
			frm.set_df_property('correction_4', "hidden", 0);
			frm.set_df_property('correction_5', "hidden", 0);
			frm.set_df_property('correction_due_date_1', "hidden", 0);
			frm.set_df_property('correction_due_date_2', "hidden", 0);
			frm.set_df_property('correction_due_date_3', "hidden", 0);
			frm.set_df_property('correction_due_date_4', "hidden", 0);
			frm.set_df_property('correction_due_date_5', "hidden", 0);
			frm.set_df_property('correction_responsibility_1', "hidden", 0);
			frm.set_df_property('correction_responsibility_2', "hidden", 0);
			frm.set_df_property('correction_responsibility_3', "hidden", 0);
			frm.set_df_property('correction_responsibility_4', "hidden", 0);
			frm.set_df_property('correction_responsibility_5', "hidden", 0);

			//Validation
				frm.set_df_property('audit', "reqd", 1);
				frm.set_df_property('nc_description', "reqd", 1);
				frm.set_df_property('nc_clause_no', "reqd", 1);
				frm.set_df_property('nc_number', "reqd", 1);
				frm.set_df_property('nc_category', "reqd", 1);
				frm.set_df_property('auditee', "reqd", 1);
				frm.set_df_property('auditor', "reqd", 1);
				frm.set_df_property('date_of_audit', "reqd", 1);

			

			//Unvalidate
			frm.set_df_property('complaint_sub_category', "reqd", 0);
			frm.set_df_property('product_name', "reqd", 0);
			frm.set_df_property('product_sku', "reqd", 0);
			frm.set_df_property('product_batch', "reqd", 0);
			frm.set_df_property('mfg_date', "reqd", 0);
			frm.set_df_property('complaint', "reqd", 0);
			frm.set_df_property('complaint_description', "reqd", 0);
			frm.set_df_property('id_date', "reqd", 0);
			frm.set_df_property('product_code', "reqd", 0);


			
		

		}
	},

	refresh: async function (frm) {


		if(frm.doc.source=='Consumer Complaints')
		{
			frm.set_df_property('product_code', "hidden", 1);
			frm.set_df_property('id_date', "hidden", 1);
			frm.set_df_property('audit', "hidden", 1);
			frm.set_df_property('nc_description', "hidden", 1);
			frm.set_df_property('nc_clause_no', "hidden", 1);
			frm.set_df_property('nc_attach', "hidden", 1);
			frm.set_df_property('nc_number', "hidden", 1);
			frm.set_df_property('nc_category', "hidden", 1);
			frm.set_df_property('auditee', "hidden", 1);
			frm.set_df_property('auditor', "hidden", 1);
			frm.set_df_property('date_of_audit', "hidden", 1);
			frm.set_df_property('correction_1', "hidden", 1);
			frm.set_df_property('correction_2', "hidden", 1);
			frm.set_df_property('correction_3', "hidden", 1);
			frm.set_df_property('correction_4', "hidden", 1);
			frm.set_df_property('correction_5', "hidden", 1);
			frm.set_df_property('correction_due_date_1', "hidden", 1);
			frm.set_df_property('correction_due_date_2', "hidden", 1);
			frm.set_df_property('correction_due_date_3', "hidden", 1);
			frm.set_df_property('correction_due_date_4', "hidden", 1);
			frm.set_df_property('correction_due_date_5', "hidden", 1);
			frm.set_df_property('correction_responsibility_1', "hidden", 1);
			frm.set_df_property('correction_responsibility_2', "hidden", 1);
			frm.set_df_property('correction_responsibility_3', "hidden", 1);
			frm.set_df_property('correction_responsibility_4', "hidden", 1);
			frm.set_df_property('correction_responsibility_5', "hidden", 1);

			//Unhide
			frm.set_df_property('complaint_sub_category', "hidden", 0);
			frm.set_df_property('product_name', "hidden", 0);
			frm.set_df_property('product_sku', "hidden", 0);
			frm.set_df_property('complaint', "hidden", 0);
			frm.set_df_property('complaint_description', "hidden", 0);
			frm.set_df_property('product_batch', "hidden", 0);
			frm.set_df_property('mfg_date', "hidden", 0);
			
			

		}
		if(frm.doc.source=='Customer Complaints')
		{
			//1t section
			frm.set_df_property('complaint_sub_category', "hidden", 1);

			frm.set_df_property('product_code', "hidden", 1);
			frm.set_df_property('id_date', "hidden", 1);

			//2nd section
			frm.set_df_property('audit', "hidden", 1);
			frm.set_df_property('nc_description', "hidden", 1);
			frm.set_df_property('nc_clause_no', "hidden", 1);
			frm.set_df_property('nc_attach', "hidden", 1);
			frm.set_df_property('nc_number', "hidden", 1);
			frm.set_df_property('nc_category', "hidden", 1);
			frm.set_df_property('auditee', "hidden", 1);
			frm.set_df_property('auditor', "hidden", 1);
			frm.set_df_property('date_of_audit', "hidden", 1);

			//3rd section
			frm.set_df_property('correction_1', "hidden", 1);
			frm.set_df_property('correction_2', "hidden", 1);
			frm.set_df_property('correction_3', "hidden", 1);
			frm.set_df_property('correction_4', "hidden", 1);
			frm.set_df_property('correction_5', "hidden", 1);
			frm.set_df_property('correction_due_date_1', "hidden", 1);
			frm.set_df_property('correction_due_date_2', "hidden", 1);
			frm.set_df_property('correction_due_date_3', "hidden", 1);
			frm.set_df_property('correction_due_date_4', "hidden", 1);
			frm.set_df_property('correction_due_date_5', "hidden", 1);
			frm.set_df_property('correction_responsibility_1', "hidden", 1);
			frm.set_df_property('correction_responsibility_2', "hidden", 1);
			frm.set_df_property('correction_responsibility_3', "hidden", 1);
			frm.set_df_property('correction_responsibility_4', "hidden", 1);
			frm.set_df_property('correction_responsibility_5', "hidden", 1);

			//Unhide
			frm.set_df_property('product_name', "hidden", 0);
			frm.set_df_property('product_sku', "hidden", 0);
			frm.set_df_property('complaint', "hidden", 0);
			frm.set_df_property('complaint_description', "hidden", 0);
			frm.set_df_property('product_batch', "hidden", 0);
			frm.set_df_property('mfg_date', "hidden", 0);


		}

		if(frm.doc.source=='Internal deviation')
		{
			frm.set_df_property('complaint_sub_category', "hidden", 1);

			frm.set_df_property('audit', "hidden", 1);
			frm.set_df_property('nc_description', "hidden", 1);
			frm.set_df_property('nc_clause_no', "hidden", 1);
			frm.set_df_property('nc_attach', "hidden", 1);
			frm.set_df_property('nc_number', "hidden", 1);
			frm.set_df_property('nc_category', "hidden", 1);
			frm.set_df_property('auditee', "hidden", 1);
			frm.set_df_property('auditor', "hidden", 1);
			frm.set_df_property('date_of_audit', "hidden", 1);

			//Unhide
			frm.set_df_property('product_name', "hidden", 0);
			frm.set_df_property('product_code', "hidden", 0);
			frm.set_df_property('product_sku', "hidden", 0);
			frm.set_df_property('complaint', "hidden", 0);
			frm.set_df_property('complaint_description', "hidden", 0);
			frm.set_df_property('id_date', "hidden", 0);
			frm.set_df_property('product_batch', "hidden", 0);
			frm.set_df_property('mfg_date', "hidden", 0);

			frm.set_df_property('correction_1', "hidden", 0);
			frm.set_df_property('correction_2', "hidden", 0);
			frm.set_df_property('correction_3', "hidden", 0);
			frm.set_df_property('correction_4', "hidden", 0);
			frm.set_df_property('correction_5', "hidden", 0);
			frm.set_df_property('correction_due_date_1', "hidden", 0);
			frm.set_df_property('correction_due_date_2', "hidden", 0);
			frm.set_df_property('correction_due_date_3', "hidden", 0);
			frm.set_df_property('correction_due_date_4', "hidden", 0);
			frm.set_df_property('correction_due_date_5', "hidden", 0);
			frm.set_df_property('correction_responsibility_1', "hidden", 0);
			frm.set_df_property('correction_responsibility_2', "hidden", 0);
			frm.set_df_property('correction_responsibility_3', "hidden", 0);
			frm.set_df_property('correction_responsibility_4', "hidden", 0);
			frm.set_df_property('correction_responsibility_5', "hidden", 0);

		
		}

		if(frm.doc.source=='External & Internal audits')
		{
			frm.set_df_property('complaint_sub_category', "hidden", 1);
			frm.set_df_property('product_name', "hidden", 1);
			frm.set_df_property('product_code', "hidden", 1);
			frm.set_df_property('complaint', "hidden", 1);
			frm.set_df_property('id_date', "hidden", 1);
			frm.set_df_property('complaint_description', "hidden", 1);
			frm.set_df_property('product_sku', "hidden", 1);
			frm.set_df_property('product_batch', "hidden", 1);
			frm.set_df_property('mfg_date', "hidden", 1);
			frm.set_df_property('corrective_action_report', "hidden", 1);

			//Unhide
			frm.set_df_property('audit', "hidden", 0);
			frm.set_df_property('nc_description', "hidden", 0);
			frm.set_df_property('nc_clause_no', "hidden", 0);
			frm.set_df_property('nc_attach', "hidden", 0);
			frm.set_df_property('nc_number', "hidden", 0);
			frm.set_df_property('nc_category', "hidden", 0);
			frm.set_df_property('auditee', "hidden", 0);
			frm.set_df_property('auditor', "hidden", 0);
			frm.set_df_property('date_of_audit', "hidden", 0);

			frm.set_df_property('correction_1', "hidden", 0);
			frm.set_df_property('correction_2', "hidden", 0);
			frm.set_df_property('correction_3', "hidden", 0);
			frm.set_df_property('correction_4', "hidden", 0);
			frm.set_df_property('correction_5', "hidden", 0);
			frm.set_df_property('correction_due_date_1', "hidden", 0);
			frm.set_df_property('correction_due_date_2', "hidden", 0);
			frm.set_df_property('correction_due_date_3', "hidden", 0);
			frm.set_df_property('correction_due_date_4', "hidden", 0);
			frm.set_df_property('correction_due_date_5', "hidden", 0);
			frm.set_df_property('correction_responsibility_1', "hidden", 0);
			frm.set_df_property('correction_responsibility_2', "hidden", 0);
			frm.set_df_property('correction_responsibility_3', "hidden", 0);
			frm.set_df_property('correction_responsibility_4', "hidden", 0);
			frm.set_df_property('correction_responsibility_5', "hidden", 0);

			
		

		}

		
		console.log(frm.doc.source);
		//frappe.web_form.set_df_property('product_name', 'hidden', 1);

		// frappe.frm.doc.set_df_property('product_name', 'readyonly');
		
		

		
		// frm.set_df_property('product_name', 'read_only', 1);
		// if (frm.doc.status == "Approved") {

		// 	await frappe.call({
		// 		method: 'capa_app.capa_app.doctype.complaint.complaint.workflow_role_update',
		// 		args: {
		// 			name: frm.doc.name
		// 		},
		// 	}).then(r => {
		// 		roles = r.message;

		// 	})

		// }

		// await frappe.call('capa_app.capa_app.doctype.complaint.complaint.all_role_fun', {

		// }).then(r => {
		// 	allrole = r.message;
		// })
		// let allrole_names= allrole.map(name => name.name);




		frm.add_custom_button(('Clarification'), function () {

			
			// var fields = [
			// 	{fieldtype:'Check', fieldname:'is_group', label:__('Is Group?'),
			// 		description: __("Further nodes can be only created under 'Group' type nodes")},
			// 	{fieldtype:'Data', fieldname: 'group_name', 
			// 		label:__('Group Name')}, 
			// 	{fieldtype:'Link', fieldname: 'document_type', 
			// 		label:__('Type of Group'), options:'DocType'}, 
			// 	{fieldtype:'Dynamic Link', fieldname: 'document_id',
			// 	label:__('Document Id'), options:'document_type'}
			// ]
			
			// var d = new frappe.ui.Dialog({
			// 	title: __('New {0}',[__(me.ctype)]),
			// 	fields: fields
			// })
			var d = new frappe.ui.Dialog({
				title : 'Send Clarification',

				'fields': [
					{'fieldname': 'label1', 'fieldtype': 'HTML'},
					{'fieldname': 'reciepient', 'fieldtype': 'Link','options':'User' },
					{'fieldname': 'label2', 'fieldtype': 'HTML'},
					{'fieldname': 'body', 'fieldtype': 'Long Text' }
				],
				primary_action: function(values){
					return frappe.call({
						method: "capa_app.capa_app.doctype.complaint.complaint.clarification_fun",
						args:{'reciever_arg':values.reciepient,'clarification_arg':values.body,'sender_arg':frappe.session.user,'subject_arg':frm.doc.name},
						// args:{"sender_arg":frappe.session.user,"reciever_arg":d.fields_dict.reciever,
						// "subject_arg":frm.doc.name,
						// "clarification_arg":d.fields_dict.clarification },
						callback: function(r){
						if (r.message) {
						//alert("done");
						d.hide();
						//show_alert(d.get_values());
						frappe.msgprint("Clarification has been send Successfully");

						}
						}
						});
					
				}
			});
			
			d.fields_dict.label1.$wrapper.html('Reciever');
			d.fields_dict.label2.$wrapper.html('Clarification');
			d.show();
				
		
			//frm.save();

			//frappe.msgprint("Clarification has been send");
		});

		

		let rensponsibility_count = 0;
		let responsibilty_name;
		let responsibilty_name1;

		let roles = '';
		//let role = '';
		//let a = '';
		//role = null;
		// call with a single parameter
		await frappe.call('capa_app.capa_app.doctype.complaint.complaint.role_fun', {

		}).then(r => {
			roles = r.message;
		})

		


		//let role_length = roles.length;


		let role_names= roles.map(role => role.role);
		//console.log(role_names);


		if (frm.doc.status == "Verified") {

			
			frm.set_df_property('yes', "hidden", 1);
			frm.set_df_property('no', "hidden", 1);

			frm.set_df_property('complaint_sub_category', "read_only", 1);
			frm.set_df_property('product_name', "read_only", 1);
			frm.set_df_property('division', "read_only", 1);
			frm.set_df_property('product_sku', "read_only", 1);
			frm.set_df_property('product_batch', "read_only", 1);
			frm.set_df_property('mfg_date', "read_only", 1);
			frm.set_df_property('complaint', "read_only", 1);
			frm.set_df_property('complaint_description', "read_only", 1);

			//1t section
			frm.set_df_property('source', "read_only", 1);

			frm.set_df_property('product_code', "read_only", 1);
			frm.set_df_property('id_date', "read_only", 1);

			//2nd section
			frm.set_df_property('audit', "read_only", 1);
			frm.set_df_property('nc_description', "read_only", 1);
			frm.set_df_property('nc_clause_no', "read_only", 1);
			frm.set_df_property('nc_attach', "read_only", 1);
			frm.set_df_property('nc_number', "read_only", 1);
			frm.set_df_property('nc_category', "read_only", 1);
			frm.set_df_property('auditee', "read_only", 1);
			frm.set_df_property('auditor', "read_only", 1);
			frm.set_df_property('date_of_audit', "read_only", 1);

			//3rd section
			frm.set_df_property('correction_1', "read_only", 1);
			frm.set_df_property('correction_2', "read_only", 1);
			frm.set_df_property('correction_3', "read_only", 1);
			frm.set_df_property('correction_4', "read_only", 1);
			frm.set_df_property('correction_5', "read_only", 1);
			frm.set_df_property('correction_due_date_1', "read_only", 1);
			frm.set_df_property('correction_due_date_2', "read_only", 1);
			frm.set_df_property('correction_due_date_3', "read_only", 1);
			frm.set_df_property('correction_due_date_4', "read_only", 1);
			frm.set_df_property('correction_due_date_5', "read_only", 1);
			frm.set_df_property('correction_responsibility_1', "read_only", 1);
			frm.set_df_property('correction_responsibility_2', "read_only", 1);
			frm.set_df_property('correction_responsibility_3', "read_only", 1);
			frm.set_df_property('correction_responsibility_4', "read_only", 1);
			frm.set_df_property('correction_responsibility_5', "read_only", 1);

			frm.set_df_property('root_cause_tool', "read_only", 1);
			frm.set_df_property('root_cause_analysis', "read_only", 1);
			frm.set_df_property('corrective_action1', "read_only", 1);
			frm.set_df_property('corrective_action2', "read_only", 1);
			frm.set_df_property('corrective_action3', "read_only", 1);
			frm.set_df_property('corrective_action4', "read_only", 1);
			frm.set_df_property('corrective_action5', "read_only", 1);
			frm.set_df_property('due_date1', "read_only", 1);
			frm.set_df_property('due_date2', "read_only", 1);
			frm.set_df_property('due_date3', "read_only", 1);
			frm.set_df_property('due_date4', "read_only", 1);
			frm.set_df_property('due_date5', "read_only", 1);
			frm.set_df_property('responsibility__1', "read_only", 1);
			frm.set_df_property('responsibility__2', "read_only", 1);
			frm.set_df_property('responsibility__3', "read_only", 1);
			frm.set_df_property('responsibility__4', "read_only", 1);
			frm.set_df_property('responsibility__5', "read_only", 1);
			frm.set_df_property('5_why_or_fishbone_sheet', "read_only", 1);
			frm.set_df_property('corrective_action_report', "read_only", 1);
			frm.set_df_property('attachments', "read_only", 1);
			frm.set_df_property('yes', "read_only", 1);
			frm.set_df_property('no', "read_only", 1);
			
			
			if(frm.doc.source=='Internal deviation' || 'External & Internal audits')
			{
				let count1=0;
				let count2=0;

				for(let c=1;c<6;c++){

					responsibilty_name = 'responsibility__' + c;

				//console.log(frm.doc[responsibilty_name]);

				if (frm.doc[responsibilty_name]!= undefined) {
					count1 = count1 + 1;
				}

				}

				for(let d=1;d<6;d++){

					responsibilty_name1 = 'correction_responsibility_' + d;

				//console.log(frm.doc[responsibilty_name]);

				if (frm.doc[responsibilty_name1]!= undefined) {
					count2 = count2 + 1;
				}

				}

				rensponsibility_count = count1+count2;
				
				console.log(rensponsibility_count);

				if ((role_names.includes(frm.doc.responsibility__1) && frm.doc.s1 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s1', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}
	
				if ((role_names.includes(frm.doc.responsibility__2) && frm.doc.s2 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s2', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}
	
				if ((role_names.includes(frm.doc.responsibility__3) && frm.doc.s3 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s3', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}
	
				if ((role_names.includes(frm.doc.responsibility__4) && frm.doc.s4 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s4', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}
	
				if ((role_names.includes(frm.doc.responsibility__5) && frm.doc.s5 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s5', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}

				if ((role_names.includes(frm.doc.correction_responsibility_1) && frm.doc.s6 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s6', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}
				if ((role_names.includes(frm.doc.correction_responsibility_2) && frm.doc.s7 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s7', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}
				if ((role_names.includes(frm.doc.correction_responsibility_3) && frm.doc.s8 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s8', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}
				if ((role_names.includes(frm.doc.correction_responsibility_4) && frm.doc.s9 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s9', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}
				if ((role_names.includes(frm.doc.correction_responsibility_5) && frm.doc.s10 != "1")|| frappe.session.user=='Administrator') {
					frm.add_custom_button(('Approve'), function () {
	
						frm.set_value('s10', '1');
						frm.doc.status1 = parseInt(frm.doc.status1) + 1;
						status_update(frm);
						frm.save();
	
						frappe.msgprint("Approved");
					}, __("Action"));
				}

				
				//console.log('heii'+frm.doc.s6);


			}
			else{
			//console.log("///////////responsibiliy user count/////////////");
			for (let c = 1; c < 6; c++) {
				responsibilty_name = 'responsibility__' + c;

				//console.log(frm.doc[responsibilty_name]);

				if (frm.doc[responsibilty_name]!= undefined) {
					rensponsibility_count = rensponsibility_count + 1;
				}

			}

			//console.log(role_names);
            
            if ((role_names.includes(frm.doc.responsibility__1) && frm.doc.s1 != "1") || frappe.session.user=='Administrator') {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s1', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

			if ((role_names.includes(frm.doc.responsibility__2) && frm.doc.s2 != "1")|| frappe.session.user=='Administrator') {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s2', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

			if ((role_names.includes(frm.doc.responsibility__3) && frm.doc.s3 != "1")|| frappe.session.user=='Administrator') {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s3', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

			if ((role_names.includes(frm.doc.responsibility__4) && frm.doc.s4 != "1")|| frappe.session.user=='Administrator') {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s4', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

			if ((role_names.includes(frm.doc.responsibility__5) && frm.doc.s5 != "1")|| frappe.session.user=='Administrator') {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s5', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

		}

		}

		if (frm.doc.status == "Draft") {

			frm.set_df_property('yes', "hidden", 1);
			frm.set_df_property('no', "hidden", 1);
			//Read
			frm.set_df_property('complaint_sub_category', "read_only", 0);
			frm.set_df_property('product_name', "read_only", 0);
			frm.set_df_property('division', "read_only", 0);
			frm.set_df_property('product_sku', "read_only", 0);
			frm.set_df_property('product_batch', "read_only", 0);
			frm.set_df_property('mfg_date', "read_only", 0);
			frm.set_df_property('complaint', "read_only", 0);
			frm.set_df_property('complaint_description', "read_only", 0);

			//1t section
			frm.set_df_property('source', "read_only", 0);

			frm.set_df_property('product_code', "read_only", 0);
			frm.set_df_property('id_date', "read_only", 0);

			//2nd section
			frm.set_df_property('audit', "read_only", 0);
			frm.set_df_property('nc_description', "read_only", 0);
			frm.set_df_property('nc_clause_no', "read_only", 0);
			frm.set_df_property('nc_attach', "read_only", 0);
			frm.set_df_property('nc_number', "read_only", 0);
			frm.set_df_property('nc_category', "read_only", 0);
			frm.set_df_property('auditee', "read_only", 0);
			frm.set_df_property('auditor', "read_only", 0);
			frm.set_df_property('date_of_audit', "read_only", 0);

			//Read only

			//3rd section
			frm.set_df_property('correction_1', "read_only", 1);
			frm.set_df_property('correction_2', "read_only", 1);
			frm.set_df_property('correction_3', "read_only", 1);
			frm.set_df_property('correction_4', "read_only", 1);
			frm.set_df_property('correction_5', "read_only", 1);
			frm.set_df_property('correction_due_date_1', "read_only", 1);
			frm.set_df_property('correction_due_date_2', "read_only", 1);
			frm.set_df_property('correction_due_date_3', "read_only", 1);
			frm.set_df_property('correction_due_date_4', "read_only", 1);
			frm.set_df_property('correction_due_date_5', "read_only", 1);
			frm.set_df_property('correction_responsibility_1', "read_only", 1);
			frm.set_df_property('correction_responsibility_2', "read_only", 1);
			frm.set_df_property('correction_responsibility_3', "read_only", 1);
			frm.set_df_property('correction_responsibility_4', "read_only", 1);
			frm.set_df_property('correction_responsibility_5', "read_only", 1);



			frm.set_df_property('root_cause_tool', "read_only", 1);
			frm.set_df_property('root_cause_analysis', "read_only", 1);
			frm.set_df_property('corrective_action1', "read_only", 1);
			frm.set_df_property('corrective_action2', "read_only", 1);
			frm.set_df_property('corrective_action3', "read_only", 1);
			frm.set_df_property('corrective_action4', "read_only", 1);
			frm.set_df_property('corrective_action5', "read_only", 1);
			frm.set_df_property('due_date1', "read_only", 1);
			frm.set_df_property('due_date2', "read_only", 1);
			frm.set_df_property('due_date3', "read_only", 1);
			frm.set_df_property('due_date4', "read_only", 1);
			frm.set_df_property('due_date5', "read_only", 1);
			frm.set_df_property('responsibility__1', "read_only", 1);
			frm.set_df_property('responsibility__2', "read_only", 1);
			frm.set_df_property('responsibility__3', "read_only", 1);
			frm.set_df_property('responsibility__4', "read_only", 1);
			frm.set_df_property('responsibility__5', "read_only", 1);
			frm.set_df_property('5_why_or_fishbone_sheet', "read_only", 1);
			frm.set_df_property('corrective_action_report', "read_only", 1);
			frm.set_df_property('attachments', "read_only", 1);
			frm.set_df_property('yes', "read_only", 1);
			frm.set_df_property('no', "read_only", 1);

			//Validation
			if(frm.doc.source=='Consumer Complaints')
		      {
				frm.set_df_property('complaint_sub_category', "reqd", 1);
				frm.set_df_property('product_name', "reqd", 1);
				frm.set_df_property('product_sku', "reqd", 1);
				frm.set_df_property('complaint', "reqd", 1);
				frm.set_df_property('complaint_description', "reqd", 1);
				frm.set_df_property('product_batch', "reqd", 1);
				frm.set_df_property('mfg_date', "reqd", 1);

				//Unvalidate
			frm.set_df_property('audit', "reqd", 0);
			frm.set_df_property('nc_description', "reqd", 0);
			frm.set_df_property('nc_clause_no', "reqd", 0);
			frm.set_df_property('nc_number', "reqd", 0);
			frm.set_df_property('nc_category', "reqd", 0);
			frm.set_df_property('auditee', "reqd", 0);
			frm.set_df_property('auditor', "reqd", 0);
			frm.set_df_property('date_of_audit', "reqd", 0);
			frm.set_df_property('id_date', "reqd", 0);

			
				
			  }
			  
			  if(frm.doc.source=='Customer Complaints')
		      {
				frm.set_df_property('product_name', "reqd", 1);
				frm.set_df_property('product_sku', "reqd", 1);
				frm.set_df_property('complaint', "reqd", 1);
				frm.set_df_property('complaint_description', "reqd", 1);
				frm.set_df_property('product_batch', "reqd", 1);
				frm.set_df_property('mfg_date', "reqd", 1);

				//Unvalidate
			frm.set_df_property('complaint_sub_category', "reqd", 0);
			frm.set_df_property('audit', "reqd", 0);
			frm.set_df_property('nc_description', "reqd", 0);
			frm.set_df_property('nc_clause_no', "reqd", 0);
			frm.set_df_property('nc_number', "reqd", 0);
			frm.set_df_property('nc_category', "reqd", 0);
			frm.set_df_property('auditee', "reqd", 0);
			frm.set_df_property('auditor', "reqd", 0);
			frm.set_df_property('date_of_audit', "reqd", 0);
			frm.set_df_property('id_date', "reqd", 0);

			
			  }
			  
			  if(frm.doc.source=='Internal deviation')
		      {
				frm.set_df_property('product_name', "reqd", 1);
				frm.set_df_property('product_code', "reqd", 1);
				frm.set_df_property('product_sku', "reqd", 1);
				frm.set_df_property('complaint', "reqd", 1);
				frm.set_df_property('complaint_description', "reqd", 1);
				frm.set_df_property('id_date', "reqd", 1);
				frm.set_df_property('product_batch', "reqd", 1);
				frm.set_df_property('mfg_date', "reqd", 1);

				//Unvalidate
			frm.set_df_property('complaint_sub_category', "reqd", 0);
			frm.set_df_property('complaint_description', "reqd", 0);
			frm.set_df_property('audit', "reqd", 0);
			frm.set_df_property('nc_description', "reqd", 0);
			frm.set_df_property('nc_clause_no', "reqd", 0);
			frm.set_df_property('nc_number', "reqd", 0);
			frm.set_df_property('nc_category', "reqd", 0);
			frm.set_df_property('auditee', "reqd", 0);
			frm.set_df_property('auditor', "reqd", 0);
			frm.set_df_property('date_of_audit', "reqd", 0);

			
				
			  }
			  
			  if(frm.doc.source=='External & Internal audits')
		      {

				frm.set_df_property('audit', "reqd", 1);
				frm.set_df_property('nc_description', "reqd", 1);
				frm.set_df_property('nc_clause_no', "reqd", 1);
				frm.set_df_property('nc_number', "reqd", 1);
				frm.set_df_property('nc_category', "reqd", 1);
				frm.set_df_property('auditee', "reqd", 1);
				frm.set_df_property('auditor', "reqd", 1);
				frm.set_df_property('date_of_audit', "reqd", 1);

				//Unvalidate
			frm.set_df_property('complaint_sub_category', "reqd", 0);
			frm.set_df_property('product_name', "reqd", 0);
			frm.set_df_property('product_sku', "reqd", 0);
			frm.set_df_property('product_batch', "reqd", 0);
			frm.set_df_property('mfg_date', "reqd", 0);
			frm.set_df_property('complaint', "reqd", 0);
			frm.set_df_property('complaint_description', "reqd", 0);
			frm.set_df_property('id_date', "reqd", 0);
			frm.set_df_property('product_code', "reqd", 0);
				
			  }
			
		}
		if (frm.doc.status == "Initiated") {
			
			frm.set_df_property('yes', "hidden", 1);
			frm.set_df_property('no', "hidden", 1);
			//rm.set_df_property('complaint', "autofocus", 1)

			frm.set_df_property('complaint_sub_category', "read_only", 1);
			frm.set_df_property('product_name', "read_only", 1);
			frm.set_df_property('division', "read_only", 1);
			frm.set_df_property('product_sku', "read_only", 1);
			frm.set_df_property('product_batch', "read_only", 1);
			frm.set_df_property('mfg_date', "read_only", 1);
			frm.set_df_property('complaint', "read_only", 1);
			frm.set_df_property('complaint_description', "read_only", 1);

			//1t section
			frm.set_df_property('source', "read_only", 1);

			frm.set_df_property('product_code', "read_only", 1);
			frm.set_df_property('id_date', "read_only", 1);

			//2nd section
			frm.set_df_property('audit', "read_only", 1);
			frm.set_df_property('nc_description', "read_only", 1);
			frm.set_df_property('nc_clause_no', "read_only", 1);
			frm.set_df_property('nc_attach', "read_only", 1);
			frm.set_df_property('nc_number', "read_only", 1);
			frm.set_df_property('nc_category', "read_only", 1);
			frm.set_df_property('auditee', "read_only", 1);
			frm.set_df_property('auditor', "read_only", 1);
			frm.set_df_property('date_of_audit', "read_only", 1);

			frm.set_df_property('yes', "read_only", 1);
			frm.set_df_property('no', "read_only", 1);

			//Read
			//3rd section
			frm.set_df_property('correction_1', "read_only", 0);
			frm.set_df_property('correction_2', "read_only", 0);
			frm.set_df_property('correction_3', "read_only", 0);
			frm.set_df_property('correction_4', "read_only", 0);
			frm.set_df_property('correction_5', "read_only", 0);
			frm.set_df_property('correction_due_date_1', "read_only", 0);
			frm.set_df_property('correction_due_date_2', "read_only", 0);
			frm.set_df_property('correction_due_date_3', "read_only", 0);
			frm.set_df_property('correction_due_date_4', "read_only", 0);
			frm.set_df_property('correction_due_date_5', "read_only", 0);
			frm.set_df_property('correction_responsibility_1', "read_only", 0);
			frm.set_df_property('correction_responsibility_2', "read_only", 0);
			frm.set_df_property('correction_responsibility_3', "read_only", 0);
			frm.set_df_property('correction_responsibility_4', "read_only", 0);
			frm.set_df_property('correction_responsibility_5', "read_only", 0);

			


			frm.set_df_property('root_cause_tool', "read_only", 0);
			frm.set_df_property('root_cause_analysis', "read_only", 0);
			frm.set_df_property('corrective_action1', "read_only", 0);
			frm.set_df_property('corrective_action2', "read_only", 0);
			frm.set_df_property('corrective_action3', "read_only", 0);
			frm.set_df_property('corrective_action4', "read_only", 0);
			frm.set_df_property('corrective_action5', "read_only", 0);
			frm.set_df_property('due_date1', "read_only", 0);
			frm.set_df_property('due_date2', "read_only", 0);
			frm.set_df_property('due_date3', "read_only", 0);
			frm.set_df_property('due_date4', "read_only", 0);
			frm.set_df_property('due_date5', "read_only", 0);
			frm.set_df_property('responsibility__1', "read_only", 0);
			frm.set_df_property('responsibility__2', "read_only", 0);
			frm.set_df_property('responsibility__3', "read_only", 0);
			frm.set_df_property('responsibility__4', "read_only", 0);
			frm.set_df_property('responsibility__5', "read_only", 0);
			frm.set_df_property('5_why_or_fishbone_sheet', "read_only", 0);
			frm.set_df_property('corrective_action_report', "read_only", 0);
			frm.set_df_property('attachments', "read_only", 0);


			//Validation
			if(frm.doc.source=='Consumer Complaints')
			{
				frm.set_df_property('root_cause_tool', "reqd", 1);
				frm.set_df_property('root_cause_analysis', "reqd", 1);
				frm.set_df_property('5_why_or_fishbone_sheet', "reqd", 1);
				frm.set_df_property('corrective_action_report', "reqd", 1);

				frm.set_df_property('corrective_action1', "reqd", 1);
				frm.set_df_property('due_date1', "reqd", 1);
				frm.set_df_property('responsibility__1', "reqd", 1);

			
			frm.set_df_property('corrective_action2', "reqd", 0);
			frm.set_df_property('corrective_action3', "reqd", 0);
			frm.set_df_property('corrective_action4', "reqd", 0);
			frm.set_df_property('corrective_action5', "reqd", 0);

			frm.set_df_property('due_date2', "reqd", 0);
			frm.set_df_property('due_date3', "reqd", 0);
			frm.set_df_property('due_date4', "reqd", 0);
			frm.set_df_property('due_date5', "reqd", 0);
			
			frm.set_df_property('responsibility__2', "reqd", 0);
			frm.set_df_property('responsibility__3', "reqd", 0);
			frm.set_df_property('responsibility__4', "reqd", 0);
			frm.set_df_property('responsibility__5', "reqd", 0);
				
			

			



				if(frm.doc.corrective_action2 || frm.doc.due_date2 || frm.doc.responsibility__2)
				{
					frm.set_df_property('corrective_action2', "reqd", 1);
					frm.set_df_property('due_date2', "reqd", 1);
					frm.set_df_property('responsibility__2', "reqd", 1);
				}
				if(frm.doc.corrective_action3 || frm.doc.due_date3 || frm.doc.responsibility__3)
				{
					frm.set_df_property('corrective_action3', "reqd", 1);
					frm.set_df_property('due_date3', "reqd", 1);
					frm.set_df_property('responsibility__3', "reqd", 1);
				}
				if(frm.doc.corrective_action4 || frm.doc.due_date4 || frm.doc.responsibility__4)
				{
					frm.set_df_property('corrective_action4', "reqd", 1);
					frm.set_df_property('due_date4', "reqd", 1);
					frm.set_df_property('responsibility__4', "reqd", 1);
				}
				if(frm.doc.corrective_action5 || frm.doc.due_date5 || frm.doc.responsibility__5)
				{
					frm.set_df_property('corrective_action5', "reqd", 1);
					frm.set_df_property('due_date5', "reqd", 1);
					frm.set_df_property('responsibility__5', "reqd", 1);
				}
			}
			if(frm.doc.source=='Customer Complaints')
			{
				frm.set_df_property('root_cause_tool', "reqd", 1);
				frm.set_df_property('root_cause_analysis', "reqd", 1);

				frm.set_df_property('corrective_action1', "reqd", 1);
				frm.set_df_property('due_date1', "reqd", 1);
				frm.set_df_property('responsibility__1', "reqd", 1);

				
				frm.set_df_property('5_why_or_fishbone_sheet', "reqd", 1);
				frm.set_df_property('corrective_action_report', "reqd", 1);


			frm.set_df_property('corrective_action2', "reqd", 0);
			frm.set_df_property('corrective_action3', "reqd", 0);
			frm.set_df_property('corrective_action4', "reqd", 0);
			frm.set_df_property('corrective_action5', "reqd", 0);

			frm.set_df_property('due_date2', "reqd", 0);
			frm.set_df_property('due_date3', "reqd", 0);
			frm.set_df_property('due_date4', "reqd", 0);
			frm.set_df_property('due_date5', "reqd", 0);
			
			frm.set_df_property('responsibility__2', "reqd", 0);
			frm.set_df_property('responsibility__3', "reqd", 0);
			frm.set_df_property('responsibility__4', "reqd", 0);
			frm.set_df_property('responsibility__5', "reqd", 0);

				

				if(frm.doc.corrective_action2 || frm.doc.due_date2 || frm.doc.responsibility__2)
				{
					frm.set_df_property('corrective_action2', "reqd", 1);
					frm.set_df_property('due_date2', "reqd", 1);
					frm.set_df_property('responsibility__2', "reqd", 1);
				}
				if(frm.doc.corrective_action3 || frm.doc.due_date3 || frm.doc.responsibility__3)
				{
					frm.set_df_property('corrective_action3', "reqd", 1);
					frm.set_df_property('due_date3', "reqd", 1);
					frm.set_df_property('responsibility__3', "reqd", 1);
				}
				if(frm.doc.corrective_action4 || frm.doc.due_date4 || frm.doc.responsibility__4)
				{
					frm.set_df_property('corrective_action4', "reqd", 1);
					frm.set_df_property('due_date4', "reqd", 1);
					frm.set_df_property('responsibility__4', "reqd", 1);
				}
				if(frm.doc.corrective_action5 || frm.doc.due_date5 || frm.doc.responsibility__5)
				{
					frm.set_df_property('corrective_action5', "reqd", 1);
					frm.set_df_property('due_date5', "reqd", 1);
					frm.set_df_property('responsibility__5', "reqd", 1);
				}
			}
			if(frm.doc.source=='Internal deviation')
			{
				frm.set_df_property('root_cause_tool', "reqd", 1);
				frm.set_df_property('root_cause_analysis', "reqd", 1);
				frm.set_df_property('correction_1', "reqd", 1);
				frm.set_df_property('correction_due_date_1', "reqd", 1);
				frm.set_df_property('correction_responsibility_1', "reqd", 1);

				
				frm.set_df_property('5_why_or_fishbone_sheet', "reqd", 1);
				frm.set_df_property('corrective_action_report', "reqd", 1);

			frm.set_df_property('correction_2', "reqd", 0);
			frm.set_df_property('correction_3', "reqd", 0);
			frm.set_df_property('correction_4', "reqd", 0);
			frm.set_df_property('correction_5', "reqd", 0);

			frm.set_df_property('correction_due_date_2', "reqd", 0);
			frm.set_df_property('correction_due_date_3', "reqd", 0);
			frm.set_df_property('correction_due_date_4', "reqd", 0);
			frm.set_df_property('correction_due_date_5', "reqd", 0);
			
			frm.set_df_property('correction_responsibility_2', "reqd", 0);
			frm.set_df_property('correction_responsibility_3', "reqd", 0);
			frm.set_df_property('correction_responsibility_4', "reqd", 0);
			frm.set_df_property('correction_responsibility_5', "reqd", 0);

				

				if(frm.doc.correction_2 || frm.doc.correction_due_date_2 || frm.doc.correction_responsibility_2)
				{
					frm.set_df_property('correction_2', "reqd", 1);
					frm.set_df_property('correction_due_date_2', "reqd", 1);
					frm.set_df_property('correction_responsibility_2', "reqd", 1);

				}
				if(frm.doc.correction_3 || frm.doc.correction_due_date_3 || frm.doc.correction_responsibility_3)
				{
					frm.set_df_property('correction_3', "reqd", 1);
					frm.set_df_property('correction_due_date_3', "reqd", 1);
					frm.set_df_property('correction_responsibility_3', "reqd", 1);

				}
				if(frm.doc.correction_4 || frm.doc.correction_due_date_4 || frm.doc.correction_responsibility_4)
				{
					frm.set_df_property('correction_4', "reqd", 1);
					frm.set_df_property('correction_due_date_4', "reqd", 1);
					frm.set_df_property('correction_responsibility_4', "reqd", 1);

				}
				if(frm.doc.correction_5 || frm.doc.correction_due_date_5 || frm.doc.correction_responsibility_5)
				{
					frm.set_df_property('correction_5', "reqd", 1);
					frm.set_df_property('correction_due_date_5', "reqd", 1);
					frm.set_df_property('correction_responsibility_5', "reqd", 1);

				}

				frm.set_df_property('corrective_action1', "reqd", 1);
				frm.set_df_property('due_date1', "reqd", 1);
				frm.set_df_property('responsibility__1', "reqd", 1);

			frm.set_df_property('corrective_action2', "reqd", 0);
			frm.set_df_property('corrective_action3', "reqd", 0);
			frm.set_df_property('corrective_action4', "reqd", 0);
			frm.set_df_property('corrective_action5', "reqd", 0);

			frm.set_df_property('due_date2', "reqd", 0);
			frm.set_df_property('due_date3', "reqd", 0);
			frm.set_df_property('due_date4', "reqd", 0);
			frm.set_df_property('due_date5', "reqd", 0);
			
			frm.set_df_property('responsibility__2', "reqd", 0);
			frm.set_df_property('responsibility__3', "reqd", 0);
			frm.set_df_property('responsibility__4', "reqd", 0);
			frm.set_df_property('responsibility__5', "reqd", 0);

				if(frm.doc.corrective_action2 || frm.doc.due_date2 || frm.doc.responsibility__2)
				{
					frm.set_df_property('corrective_action2', "reqd", 1);
					frm.set_df_property('due_date2', "reqd", 1);
					frm.set_df_property('responsibility__2', "reqd", 1);
				}
				if(frm.doc.corrective_action3 || frm.doc.due_date3 || frm.doc.responsibility__3)
				{
					frm.set_df_property('corrective_action3', "reqd", 1);
					frm.set_df_property('due_date3', "reqd", 1);
					frm.set_df_property('responsibility__3', "reqd", 1);
				}
				if(frm.doc.corrective_action4 || frm.doc.due_date4 || frm.doc.responsibility__4)
				{
					frm.set_df_property('corrective_action4', "reqd", 1);
					frm.set_df_property('due_date4', "reqd", 1);
					frm.set_df_property('responsibility__4', "reqd", 1);
				}
				if(frm.doc.corrective_action5 || frm.doc.due_date5 || frm.doc.responsibility__5)
				{
					frm.set_df_property('corrective_action5', "reqd", 1);
					frm.set_df_property('due_date5', "reqd", 1);
					frm.set_df_property('responsibility__5', "reqd", 1);
				}
				

			}
			if(frm.doc.source=='External & Internal audits')
			{
				frm.set_df_property('root_cause_tool', "reqd", 1);
				frm.set_df_property('root_cause_analysis', "reqd", 1);

				frm.set_df_property('correction_1', "reqd", 1);
				frm.set_df_property('correction_due_date_1', "reqd", 1);
				frm.set_df_property('correction_responsibility_1', "reqd", 1);
				frm.set_df_property('corrective_action_report', "reqd", 0);

			
			frm.set_df_property('correction_2', "reqd", 0);
			frm.set_df_property('correction_3', "reqd", 0);
			frm.set_df_property('correction_4', "reqd", 0);
			frm.set_df_property('correction_5', "reqd", 0);

			frm.set_df_property('correction_due_date_2', "reqd", 0);
			frm.set_df_property('correction_due_date_3', "reqd", 0);
			frm.set_df_property('correction_due_date_4', "reqd", 0);
			frm.set_df_property('correction_due_date_5', "reqd", 0);
			
			frm.set_df_property('correction_responsibility_2', "reqd", 0);
			frm.set_df_property('correction_responsibility_3', "reqd", 0);
			frm.set_df_property('correction_responsibility_4', "reqd", 0);
			frm.set_df_property('correction_responsibility_5', "reqd", 0);

				

				if(frm.doc.correction_2 || frm.doc.correction_due_date_2 || frm.doc.correction_responsibility_2)
				{
					frm.set_df_property('correction_2', "reqd", 1);
					frm.set_df_property('correction_due_date_2', "reqd", 1);
					frm.set_df_property('correction_responsibility_2', "reqd", 1);

				}
				if(frm.doc.correction_3 || frm.doc.correction_due_date_3 || frm.doc.correction_responsibility_3)
				{
					frm.set_df_property('correction_3', "reqd", 1);
					frm.set_df_property('correction_due_date_3', "reqd", 1);
					frm.set_df_property('correction_responsibility_3', "reqd", 1);

				}
				if(frm.doc.correction_4 || frm.doc.correction_due_date_4 || frm.doc.correction_responsibility_4)
				{
					frm.set_df_property('correction_4', "reqd", 1);
					frm.set_df_property('correction_due_date_4', "reqd", 1);
					frm.set_df_property('correction_responsibility_4', "reqd", 1);

				}
				if(frm.doc.correction_5 || frm.doc.correction_due_date_5 || frm.doc.correction_responsibility_5)
				{
					frm.set_df_property('correction_5', "reqd", 1);
					frm.set_df_property('correction_due_date_5', "reqd", 1);
					frm.set_df_property('correction_responsibility_5', "reqd", 1);

				}

				frm.set_df_property('corrective_action1', "reqd", 1);
				frm.set_df_property('due_date1', "reqd", 1);
				frm.set_df_property('responsibility__1', "reqd", 1);

			frm.set_df_property('corrective_action2', "reqd", 0);
			frm.set_df_property('corrective_action3', "reqd", 0);
			frm.set_df_property('corrective_action4', "reqd", 0);
			frm.set_df_property('corrective_action5', "reqd", 0);

			frm.set_df_property('due_date2', "reqd", 0);
			frm.set_df_property('due_date3', "reqd", 0);
			frm.set_df_property('due_date4', "reqd", 0);
			frm.set_df_property('due_date5', "reqd", 0);
			
			frm.set_df_property('responsibility__2', "reqd", 0);
			frm.set_df_property('responsibility__3', "reqd", 0);
			frm.set_df_property('responsibility__4', "reqd", 0);
			frm.set_df_property('responsibility__5', "reqd", 0);

				if(frm.doc.corrective_action2 || frm.doc.due_date2 || frm.doc.responsibility__2)
				{
					frm.set_df_property('corrective_action2', "reqd", 1);
					frm.set_df_property('due_date2', "reqd", 1);
					frm.set_df_property('responsibility__2', "reqd", 1);
				}
				if(frm.doc.corrective_action3 || frm.doc.due_date3 || frm.doc.responsibility__3)
				{
					frm.set_df_property('corrective_action3', "reqd", 1);
					frm.set_df_property('due_date3', "reqd", 1);
					frm.set_df_property('responsibility__3', "reqd", 1);
				}
				if(frm.doc.corrective_action4 || frm.doc.due_date4 || frm.doc.responsibility__4)
				{
					frm.set_df_property('corrective_action4', "reqd", 1);
					frm.set_df_property('due_date4', "reqd", 1);
					frm.set_df_property('responsibility__4', "reqd", 1);
				}
				if(frm.doc.corrective_action5 || frm.doc.due_date5 || frm.doc.responsibility__5)
				{
					frm.set_df_property('corrective_action5', "reqd", 1);
					frm.set_df_property('due_date5', "reqd", 1);
					frm.set_df_property('responsibility__5', "reqd", 1);
				}
			}
			
		}

		if (frm.doc.status == "Investigated") {
			frm.set_df_property('yes', "hidden", 1);
			frm.set_df_property('no', "hidden", 1);

			frm.set_df_property('complaint_sub_category', "read_only", 1);
			frm.set_df_property('product_name', "read_only", 1);
			frm.set_df_property('division', "read_only", 1);
			frm.set_df_property('product_sku', "read_only", 1);
			frm.set_df_property('product_batch', "read_only", 1);
			frm.set_df_property('mfg_date', "read_only", 1);
			frm.set_df_property('complaint', "read_only", 1);
				//1t section
				frm.set_df_property('source', "read_only", 1);

				frm.set_df_property('product_code', "read_only", 1);
				frm.set_df_property('id_date', "read_only", 1);
	
				//2nd section
				frm.set_df_property('audit', "read_only", 1);
				frm.set_df_property('nc_description', "read_only", 1);
				frm.set_df_property('nc_clause_no', "read_only", 1);
				frm.set_df_property('nc_attach', "read_only", 1);
				frm.set_df_property('nc_number', "read_only", 1);
				frm.set_df_property('nc_category', "read_only", 1);
				frm.set_df_property('auditee', "read_only", 1);
				frm.set_df_property('auditor', "read_only", 1);
				frm.set_df_property('date_of_audit', "read_only", 1);

				//3rd section
			frm.set_df_property('correction_1', "read_only", 1);
			frm.set_df_property('correction_2', "read_only", 1);
			frm.set_df_property('correction_3', "read_only", 1);
			frm.set_df_property('correction_4', "read_only", 1);
			frm.set_df_property('correction_5', "read_only", 1);
			frm.set_df_property('correction_due_date_1', "read_only", 1);
			frm.set_df_property('correction_due_date_2', "read_only", 1);
			frm.set_df_property('correction_due_date_3', "read_only", 1);
			frm.set_df_property('correction_due_date_4', "read_only", 1);
			frm.set_df_property('correction_due_date_5', "read_only", 1);
			frm.set_df_property('correction_responsibility_1', "read_only", 1);
			frm.set_df_property('correction_responsibility_2', "read_only", 1);
			frm.set_df_property('correction_responsibility_3', "read_only", 1);
			frm.set_df_property('correction_responsibility_4', "read_only", 1);
			frm.set_df_property('correction_responsibility_5', "read_only", 1);


			frm.set_df_property('complaint_description', "read_only", 1);
			frm.set_df_property('root_cause_tool', "read_only", 1);
			frm.set_df_property('root_cause_analysis', "read_only", 1);
			frm.set_df_property('corrective_action1', "read_only", 1);
			frm.set_df_property('corrective_action2', "read_only", 1);
			frm.set_df_property('corrective_action3', "read_only", 1);
			frm.set_df_property('corrective_action4', "read_only", 1);
			frm.set_df_property('corrective_action5', "read_only", 1);
			frm.set_df_property('due_date1', "read_only", 1);
			frm.set_df_property('due_date2', "read_only", 1);
			frm.set_df_property('due_date3', "read_only", 1);
			frm.set_df_property('due_date4', "read_only", 1);
			frm.set_df_property('due_date5', "read_only", 1);
			frm.set_df_property('responsibility__1', "read_only", 1);
			frm.set_df_property('responsibility__2', "read_only", 1);
			frm.set_df_property('responsibility__3', "read_only", 1);
			frm.set_df_property('responsibility__4', "read_only", 1);
			frm.set_df_property('responsibility__5', "read_only", 1);
			frm.set_df_property('5_why_or_fishbone_sheet', "read_only", 1);
			frm.set_df_property('corrective_action_report', "read_only", 1);
			frm.set_df_property('attachments', "read_only", 1);
			frm.set_df_property('yes', "read_only", 1);
			frm.set_df_property('no', "read_only", 1);
			
		}
		if (frm.doc.status == "Approved") {
			frm.set_df_property('yes', "hidden", 1);
			frm.set_df_property('no', "hidden", 1);

			frm.set_df_property('complaint_sub_category', "read_only", 1);
			frm.set_df_property('product_name', "read_only", 1);
			frm.set_df_property('division', "read_only", 1);
			frm.set_df_property('product_sku', "read_only", 1);
			frm.set_df_property('product_batch', "read_only", 1);
			frm.set_df_property('mfg_date', "read_only", 1);
			frm.set_df_property('complaint', "read_only", 1);
			frm.set_df_property('complaint_description', "read_only", 1);

			//1t section
			frm.set_df_property('source', "read_only", 1);

			frm.set_df_property('product_code', "read_only", 1);
			frm.set_df_property('id_date', "read_only", 1);

			//2nd section
			frm.set_df_property('audit', "read_only", 1);
			frm.set_df_property('nc_description', "read_only", 1);
			frm.set_df_property('nc_clause_no', "read_only", 1);
			frm.set_df_property('nc_attach', "read_only", 1);
			frm.set_df_property('nc_number', "read_only", 1);
			frm.set_df_property('nc_category', "read_only", 1);
			frm.set_df_property('auditee', "read_only", 1);
			frm.set_df_property('auditor', "read_only", 1);
			frm.set_df_property('date_of_audit', "read_only", 1);

			//3rd section
		frm.set_df_property('correction_1', "read_only", 1);
		frm.set_df_property('correction_2', "read_only", 1);
		frm.set_df_property('correction_3', "read_only", 1);
		frm.set_df_property('correction_4', "read_only", 1);
		frm.set_df_property('correction_5', "read_only", 1);
		frm.set_df_property('correction_due_date_1', "read_only", 1);
		frm.set_df_property('correction_due_date_2', "read_only", 1);
		frm.set_df_property('correction_due_date_3', "read_only", 1);
		frm.set_df_property('correction_due_date_4', "read_only", 1);
		frm.set_df_property('correction_due_date_5', "read_only", 1);
		frm.set_df_property('correction_responsibility_1', "read_only", 1);
		frm.set_df_property('correction_responsibility_2', "read_only", 1);
		frm.set_df_property('correction_responsibility_3', "read_only", 1);
		frm.set_df_property('correction_responsibility_4', "read_only", 1);
		frm.set_df_property('correction_responsibility_5', "read_only", 1);

			frm.set_df_property('root_cause_tool', "read_only", 1);
			frm.set_df_property('root_cause_analysis', "read_only", 1);
			frm.set_df_property('corrective_action1', "read_only", 1);
			frm.set_df_property('corrective_action2', "read_only", 1);
			frm.set_df_property('corrective_action3', "read_only", 1);
			frm.set_df_property('corrective_action4', "read_only", 1);
			frm.set_df_property('corrective_action5', "read_only", 1);
			frm.set_df_property('due_date1', "read_only", 1);
			frm.set_df_property('due_date2', "read_only", 1);
			frm.set_df_property('due_date3', "read_only", 1);
			frm.set_df_property('due_date4', "read_only", 1);
			frm.set_df_property('due_date5', "read_only", 1);
			frm.set_df_property('responsibility__1', "read_only", 1);
			frm.set_df_property('responsibility__2', "read_only", 1);
			frm.set_df_property('responsibility__3', "read_only", 1);
			frm.set_df_property('responsibility__4', "read_only", 1);
			frm.set_df_property('responsibility__5', "read_only", 1);
			frm.set_df_property('5_why_or_fishbone_sheet', "read_only", 1);
			frm.set_df_property('corrective_action_report', "read_only", 1);
			frm.set_df_property('attachments', "read_only", 1);
			frm.set_df_property('yes', "read_only", 1);
			frm.set_df_property('no', "read_only", 1);
			
		}
		if (frm.doc.status == "QA Approved") {

			frm.set_df_property('yes', "hidden", 0);
			 frm.set_df_property('no', "hidden", 0);


			frm.set_df_property('complaint_sub_category', "read_only", 1);
			frm.set_df_property('product_name', "read_only", 1);
			frm.set_df_property('division', "read_only", 1);
			frm.set_df_property('product_sku', "read_only", 1);
			frm.set_df_property('product_batch', "read_only", 1);
			frm.set_df_property('mfg_date', "read_only", 1);
			frm.set_df_property('complaint', "read_only", 1);
			frm.set_df_property('complaint_description', "read_only", 1);

			//1t section
			frm.set_df_property('source', "read_only", 1);

			frm.set_df_property('product_code', "read_only", 1);
			frm.set_df_property('id_date', "read_only", 1);

			//2nd section
			frm.set_df_property('audit', "read_only", 1);
			frm.set_df_property('nc_description', "read_only", 1);
			frm.set_df_property('nc_clause_no', "read_only", 1);
			frm.set_df_property('nc_attach', "read_only", 1);
			frm.set_df_property('nc_number', "read_only", 1);
			frm.set_df_property('nc_category', "read_only", 1);
			frm.set_df_property('auditee', "read_only", 1);
			frm.set_df_property('auditor', "read_only", 1);
			frm.set_df_property('date_of_audit', "read_only", 1);

			//3rd section
		frm.set_df_property('correction_1', "read_only", 1);
		frm.set_df_property('correction_2', "read_only", 1);
		frm.set_df_property('correction_3', "read_only", 1);
		frm.set_df_property('correction_4', "read_only", 1);
		frm.set_df_property('correction_5', "read_only", 1);
		frm.set_df_property('correction_due_date_1', "read_only", 1);
		frm.set_df_property('correction_due_date_2', "read_only", 1);
		frm.set_df_property('correction_due_date_3', "read_only", 1);
		frm.set_df_property('correction_due_date_4', "read_only", 1);
		frm.set_df_property('correction_due_date_5', "read_only", 1);
		frm.set_df_property('correction_responsibility_1', "read_only", 1);
		frm.set_df_property('correction_responsibility_2', "read_only", 1);
		frm.set_df_property('correction_responsibility_3', "read_only", 1);
		frm.set_df_property('correction_responsibility_4', "read_only", 1);
		frm.set_df_property('correction_responsibility_5', "read_only", 1);

			frm.set_df_property('root_cause_tool', "read_only", 1);
			frm.set_df_property('root_cause_analysis', "read_only", 1);
			frm.set_df_property('corrective_action1', "read_only", 1);
			frm.set_df_property('corrective_action2', "read_only", 1);
			frm.set_df_property('corrective_action3', "read_only", 1);
			frm.set_df_property('corrective_action4', "read_only", 1);
			frm.set_df_property('corrective_action5', "read_only", 1);
			frm.set_df_property('due_date1', "read_only", 1);
			frm.set_df_property('due_date2', "read_only", 1);
			frm.set_df_property('due_date3', "read_only", 1);
			frm.set_df_property('due_date4', "read_only", 1);
			frm.set_df_property('due_date5', "read_only", 1);
			frm.set_df_property('responsibility__1', "read_only", 1);
			frm.set_df_property('responsibility__2', "read_only", 1);
			frm.set_df_property('responsibility__3', "read_only", 1);
			frm.set_df_property('responsibility__4', "read_only", 1);
			frm.set_df_property('responsibility__5', "read_only", 1);
			frm.set_df_property('5_why_or_fishbone_sheet', "read_only", 1);
			frm.set_df_property('corrective_action_report', "read_only", 1);
			frm.set_df_property('attachments', "read_only", 1);

			//Read
			frm.set_df_property('yes', "read_only", 0);
			 frm.set_df_property('no', "read_only", 0);
			
			 frm.set_df_property('yes', "reqd", 1);
				frm.set_df_property('no', "reqd", 1);

			//Validation 
			// if((!frm.doc.yes && frm.doc.no) || (frm.doc.yes && !frm.doc.no) )
			// {
			// 	frm.set_df_property('yes', "reqd", 0);
			// 	frm.set_df_property('no', "reqd", 0);

			// }
			
		}
		if (frm.doc.status == "Final Approval") {
			frm.set_df_property('complaint_sub_category', "read_only", 1);
			frm.set_df_property('product_name', "read_only", 1);
			frm.set_df_property('division', "read_only", 1);
			frm.set_df_property('product_sku', "read_only", 1);
			frm.set_df_property('product_batch', "read_only", 1);
			frm.set_df_property('mfg_date', "read_only", 1);
			frm.set_df_property('complaint', "read_only", 1);
			frm.set_df_property('complaint_description', "read_only", 1);

			//1t section
			frm.set_df_property('source', "read_only", 1);

			frm.set_df_property('product_code', "read_only", 1);
			frm.set_df_property('id_date', "read_only", 1);

			//2nd section
			frm.set_df_property('audit', "read_only", 1);
			frm.set_df_property('nc_description', "read_only", 1);
			frm.set_df_property('nc_clause_no', "read_only", 1);
			frm.set_df_property('nc_attach', "read_only", 1);
			frm.set_df_property('nc_number', "read_only", 1);
			frm.set_df_property('nc_category', "read_only", 1);
			frm.set_df_property('auditee', "read_only", 1);
			frm.set_df_property('auditor', "read_only", 1);
			frm.set_df_property('date_of_audit', "read_only", 1);

			//3rd section
		frm.set_df_property('correction_1', "read_only", 1);
		frm.set_df_property('correction_2', "read_only", 1);
		frm.set_df_property('correction_3', "read_only", 1);
		frm.set_df_property('correction_4', "read_only", 1);
		frm.set_df_property('correction_5', "read_only", 1);
		frm.set_df_property('correction_due_date_1', "read_only", 1);
		frm.set_df_property('correction_due_date_2', "read_only", 1);
		frm.set_df_property('correction_due_date_3', "read_only", 1);
		frm.set_df_property('correction_due_date_4', "read_only", 1);
		frm.set_df_property('correction_due_date_5', "read_only", 1);
		frm.set_df_property('correction_responsibility_1', "read_only", 1);
		frm.set_df_property('correction_responsibility_2', "read_only", 1);
		frm.set_df_property('correction_responsibility_3', "read_only", 1);
		frm.set_df_property('correction_responsibility_4', "read_only", 1);
		frm.set_df_property('correction_responsibility_5', "read_only", 1);

			frm.set_df_property('root_cause_tool', "read_only", 1);
			frm.set_df_property('root_cause_analysis', "read_only", 1);
			frm.set_df_property('corrective_action1', "read_only", 1);
			frm.set_df_property('corrective_action2', "read_only", 1);
			frm.set_df_property('corrective_action3', "read_only", 1);
			frm.set_df_property('corrective_action4', "read_only", 1);
			frm.set_df_property('corrective_action5', "read_only", 1);
			frm.set_df_property('due_date1', "read_only", 1);
			frm.set_df_property('due_date2', "read_only", 1);
			frm.set_df_property('due_date3', "read_only", 1);
			frm.set_df_property('due_date4', "read_only", 1);
			frm.set_df_property('due_date5', "read_only", 1);
			frm.set_df_property('responsibility__1', "read_only", 1);
			frm.set_df_property('responsibility__2', "read_only", 1);
			frm.set_df_property('responsibility__3', "read_only", 1);
			frm.set_df_property('responsibility__4', "read_only", 1);
			frm.set_df_property('responsibility__5', "read_only", 1);
			frm.set_df_property('5_why_or_fishbone_sheet', "read_only", 1);
			frm.set_df_property('corrective_action_report', "read_only", 1);
			frm.set_df_property('attachments', "read_only", 1);
			frm.set_df_property('yes', "read_only", 1);
			frm.set_df_property('no', "read_only", 1);
			
		}



		function status_update(frm){


			if (rensponsibility_count == frm.doc.status1) {
	
				//console.log(rensponsibility_count);
	
				frm.set_value('status3', 'Approved');
				//frm.set_value('status', 'Approved');
				//frm.save();
				//console.log(frm.doc.status);
	
	
			}
			else {
				return "Not Approved yet";
			}
		}
	


		

// if(frm.doc.status=='Draft')
// {
// //if: doctype-Complaint timeline has same complaint name with same state and status as 1, return.
// //else: insert complaint name,insert date, calculate Update date with referance of doctype complaint SLA.set status 0.
// //if we have previous doc state, set its status as 1.
// console.log(frm.doc.name);

// // if(frm.doc.name!=frm.doctype.complaint_timeline.complaint){

// // 	console.log("hai");
// // }

// }
// if(doc.status=='Initiated')
// {

	
// }
// if(doc.status=='Investigated')
// {

	
// }
// if(doc.status=='Verified')
// {

	
// }
// if(doc.status=='Approved')
// {

	
// }
// if(doc.status=='QA Approved')
// {

	
// }
// if(doc.status=='Final Approval')
// {

	
// }




//on_update();


	},
	
	
	////////////Complaint timeline/////////////
	// after_save:function (frm){
	// 	console.log("heiii");
	// 	console.log(frm.doc.name,frm.doc.status);

	// 	return frappe.call({
	// 	method: "capa_app.capa_app.doctype.complaint.complaint.notification_fun",
	// 	args:{'doc_name':frm.doc.name,'doc_status':frm.doc.status},
		
	// 	callback: function(r){
	// 	if (r.message) {
	// 	console.log(r);

	// 	}
	// 	}
	// 	});

	// }
	

	





});



