#!/usr/bin/env python3

gender = input('Gender? ')
if gender == "male" or gender == "Male":
    print("Your cat is male")
else:
    print("Your cate is female")

age = int(input('Age? '))
if age < 5:
    print("Your cat is young")
else:
    print("Your cat is old")
