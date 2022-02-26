# Copyright (c) 2022, ideenkreise Tech and contributors
# For license information, please see license.txt

import frappe
from datetime import date
from datetime import timedelta
from frappe.model.document import Document

class Complaint(Document):
	pass

@frappe.whitelist()
def role_fun():	
	# return frappe.db.sql('''select role from `tabHas Role` where parent='+%frappe.session.user_email''')
	# print(frappe.session.user)
	return frappe.db.sql('select * from `tabHas Role` where parent = %(parent)s',values={'parent':frappe.session.user}, as_dict=1)

@frappe.whitelist()
def clarification_fun(sender_arg,reciever_arg,subject_arg,clarification_arg):	
	doc= frappe.new_doc('Clarification')
	doc.sender = sender_arg
	doc.receiver = reciever_arg
	doc.owner = reciever_arg
	doc.subject = subject_arg
	doc.description = clarification_arg
	c_save=doc.save()
	if c_save:
		doc1= frappe.new_doc('ToDo')
		doc1.owner = reciever_arg
		doc1.reference_type  = 'Clarification'
		doc1.reference_name = c_save.name
		doc1.description= 'Assignment for Clarification'+ c_save.name
		doc1.save()
	return c_save


def complaint_has_permission(user):
	role=role_fun()
	role_array=[r['role'].split()[0] for r in role]
	condition="(1=0"
	for role_name in role_array:
		condition+=' or division like '+"'%"+role_name+"%'"
		if role_name=='Approver' or frappe.session.user=='Administrator':
			condition+='or 1=1'
		if role_name=='Feedback':
			condition+='or owner = '+"'"+frappe.session.user+"'"
	condition+=")"
	print(condition)
	return condition

# def has_permission(doc, user):
# 	return False
# @frappe.whitelist()
# def notification_fun (doc_name,doc_status):
# 	doc_check=frappe.db.sql('select * from `tabComplaint Timeline` where complaint = %(name)s  and state=%(status)s' ,values={'name':doc_name,'status':doc_status}, as_dict=1)
# 	if doc_check :
# 		return False
# 	else:
# 		doc_select=frappe.db.sql('select `duration` from `tabComplaint SLA` where state = %(status)s' ,values={'status':doc_status}, as_dict=1)
# 		duration=doc_select[0]
# 		print (duration.duration)
# 		doc1= frappe.new_doc('Complaint Timeline')
# 		doc1.complaint = doc_name
# 		doc1.state  = doc_status
# 		doc1.insert_date = date.today()
# 		doc1.update_date = date.today() + timedelta(days=int(duration.duration))
# 		doc1.status  = '1'
# 		doc1.save()
# 		return True
		
		
# 	return doc_name

