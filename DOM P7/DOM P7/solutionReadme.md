# task-1
![img1](./ass7.1-after.png)

## solution
```
const aTag = document.querySelectorAll('.main__languages a');
const parent = document.querySelector('.main__languages');

aTag.forEach((a)=>{
    let innertext = a.innerText;
    if(innertext.includes('2.0')){
        parent.removeChild(a);
    }
});


```

# task-2
![img2](./ass7.2-after.png)

## solution
```
const input = document.querySelector('.main__form-input').disabled = false;
const submit = document.querySelector('.main__form-btn').disabled = false;

```