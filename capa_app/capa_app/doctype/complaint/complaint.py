# Copyright (c) 2022, ideenkreise Tech and contributors
# For license information, please see license.txt

import frappe
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
		if role_name=='Approver' or role_name=='Administrator':
			condition+='or 1=1'
		if role_name=='Feedback':
			condition+='or owner = '+"'"+frappe.session.user+"'"
	condition+=")"
	print(condition)
	return condition

# def has_permission(doc, user):
# 	return False

