# Copyright (c) 2022, ideenkreise Tech and contributors
# For license information, please see license.txt

import frappe

def execute(filters=None):
	columns=get_columns()
	data=get_data(filter)
	return columns, data



def get_columns():
	return [
    "Status:Data:100",
    "Count:Data:100"
            ]

def get_data(filter):
	return frappe.db.sql("""
         SELECT
            status,count(*)
         FROM `tabComplaint` group by status
     """, values={}, as_list=1)



