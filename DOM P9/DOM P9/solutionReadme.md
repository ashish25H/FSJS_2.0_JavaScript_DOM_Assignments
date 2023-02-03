# task-1
![img1](./ass9.1-after.png)

## solution
```
const title = document.querySelector('.caption .title');
title.style.color = 'hsl(0deg 83% 49%)';
```

# task-2
![img2](./ass9.2-after.png)

## solution
```
const head = document.getElementsByTagName('head');
const style = document.createElement('style');
const css = `.add-to-cart:hover{background-color:#e50d0d;}`;
style.appendChild(document.createTextNode(css));
console.log(style);
console.log(head);
head[0].appendChild(style);
```
