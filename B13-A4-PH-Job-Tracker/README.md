## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:  1. When I need to get only one element from DOM, then I use getElementById, 
    2. When I want the similar elements, then I set same className those element, and by using getElementsByClassName, I can get all elements.
    3. querySelector can take the first element from dom by className/tag name/id name. Before class used dott(.), id hash(#) and for tag (Only tag name) into inverted comma. 
    4. querySelectorAll take the all elements from dom by className/tag name/id name.

### 2. How do you create and insert a new element into the DOM?
ans :  1. document.cerateElement() For create new elemennt into the dom
    2. innerHTML for insert a new element.
### 3. What is Event Bubbling? And how does it work?
ans: Event Bubbling is a way that's event propagate childNode to parentNode. First runs on that element, then its bubble up to his parent.  
### 4. What is Event Delegation in JavaScript? Why is it useful?
ans :   Event delegation is a system where add EventListener to the parentNode and trigger the targeted child node. it is very usefull because we do not need to set eventListener for each child. 
### 5. What is the difference between preventDefault() and stopPropagation() methods?
ans :  1. preventDefault() prevent the default behavior of an element when the event runs. 
    2. stopPropagation() prevent event bubbling.
---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
