// Copyright (c) 2022, ideenkreise Tech and contributors
// For license information, please see license.txt

frappe.ui.form.on('Complaint', {
	// refresh: function(frm) {

	// }

	refresh: async function (frm) {

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

			
			console.log("///////////responsibiliy user count/////////////");
			for (let c = 1; c < 6; c++) {
				responsibilty_name = 'responsibility__' + c;

				console.log(frm.doc[responsibilty_name]);

				if (frm.doc[responsibilty_name]!= undefined) {
					rensponsibility_count = rensponsibility_count + 1;
				}

			}

			
            
            if (role_names.includes(frm.doc.responsibility__1) && frm.doc.s1 != "1") {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s1', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

			if (role_names.includes(frm.doc.responsibility__2) && frm.doc.s2 != "1") {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s2', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

			if (role_names.includes(frm.doc.responsibility__3) && frm.doc.s3 != "1") {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s3', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

			if (role_names.includes(frm.doc.responsibility__4) && frm.doc.s4 != "1") {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s4', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

			if (role_names.includes(frm.doc.responsibility__5) && frm.doc.s5 != "1") {
				frm.add_custom_button(('Approve'), function () {

					frm.set_value('s5', '1');
					frm.doc.status1 = parseInt(frm.doc.status1) + 1;
					status_update(frm);
					frm.save();

					frappe.msgprint("Approved");
				}, __("Action"));
			}

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
	


		////////////Complaint timeline/////////////
if(doc.status=='Draft')
{
//if: doctype-Complaint timeline has same complaint name with same state and status as 1, return
//else: insert complaint name,insert date, calculate Update date with referance of doctype complaint SLA.set status 0.
//if we have previous doc state, set its status as 1 

}
if(doc.status=='Initiated')
{

	
}
if(doc.status=='Investigated')
{

	
}
if(doc.status=='Verified')
{

	
}
if(doc.status=='Approved')
{

	
}
if(doc.status=='QA Approved')
{

	
}
if(doc.status=='Final Approval')
{

	
}








	}

	





});



