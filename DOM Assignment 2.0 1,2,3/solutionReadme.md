# First Assignment

## task - 1
![task-1](./firstAssignmentImage/task1Output.png)

### solution

``` const ul = document.querySelector("ul");
const li = document.createElement("li");
li.innerHTML = `<a>Hire Me</a>`;
ul.appendChild(li); 
```


## task - 2
![task-2](./firstAssignmentImage/task2Output.png)

### solution
```
document.querySelector('.search-field input').placeholder = `Search My Project`;
```

## task - 3
![task-3](./firstAssignmentImage/task3Output.png)


### solution
```
const oldNode = document.querySelector('#contact a');
const parent = oldNode.parentNode;
const a = document.createElement('a');
a.href = `#`;
a.innerText = `Projects`;
parent.replaceChild(a,oldNode);
```

## task - 4
![task-4](./firstAssignmentImage/task4Output.png)

### solution
```
const img = document.querySelector('.hero-right-section img');
img.src = './person-image.jpg';
```

## task - 5
![task-5](./firstAssignmentImage/task5Output.png)

### solution
```
const btnSection = document.querySelector('.hero-right-section-btns');
const btn = document.createElement('button');
btn.innerText = `Support Me`;
btnSection.appendChild(btn);
```

# Second Assignment

## task - 1
![task-1](./secondAssignmentImage/task1Output.png)

### solution
```
document.querySelectorAll('.accordian h3').forEach(val => val.style.backgroundColor = '#d8b7f4');
```

## task - 2
![task-2](./secondAssignmentImage/task2Output.png)
### solution
```
const parentDiv = document.querySelector(".accordian-wrapper");
const div = document.createElement("div");
const h3 = document.createElement("h3");
h3.innerText = "Skills";
div.classList.add("accordian");
const p = document.createElement("p");
p.innerText = `I propese a very good command over the full stack developer tech like MERN which can be seen in my work over the GitHub`;
div.appendChild(h3);
div.appendChild(p);
parentDiv.appendChild(div);
console.log(div);
```

# Thired Assignment
## task - 1
![task-1](./thirdAssignmentImage/task1Output.png)
### solution

```
const leftName = document.querySelector('.mainLeftDetails .enterName');
leftName.placeholder = 'FSJS 2.0';
const leftEmail = document.querySelector('.mainLeftDetails .enterMail');
leftEmail.placeholder = 'fsjs@inureon.ai';
const leftMessage = document.querySelector('.mainLeftDetails .enterMessage');
leftMessage.placeholder = 'Hello World';


const userName = document.querySelector('.userName');
userName.placeholder = 'FSJS 2.0';
const userEmail = document.querySelector('.userEmail');
userEmail.placeholder = 'fsjs@inureon.ai';
const userMessage = document.querySelector('.userMessage');
userMessage.placeholder = 'Hello World';
```